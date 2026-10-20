import Anthropic from "@anthropic-ai/sdk";
import { usage } from "./db.js";

export const client = new Anthropic();

/** USD per million tokens. Cache writes bill at 1.25x input. */
const PRICES: Record<string, { input: number; output: number; cacheRead: number }> = {
  "claude-fable-5-1": { input: 10, output: 50, cacheRead: 0.25 },
  "claude-opus-5-5": { input: 4, output: 20, cacheRead: 0.2 },
  "claude-opus-5": { input: 5, output: 25, cacheRead: 0.5 },
  "claude-sonnet-5-5": { input: 2, output: 10, cacheRead: 0.2 },
  "claude-sonnet-5": { input: 2, output: 10, cacheRead: 0.2 },
  "claude-haiku-5-5": { input: 0.1, output: 0.5, cacheRead: 0.01 },
};

/** Models that accept server-side refusal fallbacks in the "default" form. */
const FALLBACK_MODELS = new Set(["claude-fable-5-1", "claude-opus-5-5", "claude-opus-5", "claude-sonnet-5-5"]);

export function supportsFallbacks(model: string) {
  return FALLBACK_MODELS.has(model);
}

export function recordUsage(botId: string, model: string, u: Anthropic.Beta.BetaUsage) {
  const price = PRICES[model] ?? PRICES["claude-opus-5-5"];
  const input = u.input_tokens ?? 0;
  const output = u.output_tokens ?? 0;
  const cacheRead = u.cache_read_input_tokens ?? 0;
  const cacheWrite = u.cache_creation_input_tokens ?? 0;
  const cost =
    (input * price.input + output * price.output + cacheRead * price.cacheRead + cacheWrite * price.input * 1.25) /
    1_000_000;
  usage.add({
    bot_id: botId,
    model,
    input_tokens: input,
    output_tokens: output,
    cache_read_tokens: cacheRead,
    cache_write_tokens: cacheWrite,
    cost_usd: cost,
  });
  return cost;
}
