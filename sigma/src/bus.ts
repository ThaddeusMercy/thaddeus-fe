import { EventEmitter } from "node:events";
import type { BotConfig } from "./config.js";
import type { Approval, Message, Room } from "./db.js";

export interface SigmaEvents {
  message: [Message];
  room: [Room];
  approval: [Approval];
  bots: [BotConfig[]];
  typing: [{ room_id: string; bot_id: string; active: boolean }];
}

/** Transports (Discord, the web dashboard) subscribe here to mirror what happens in rooms. */
export const bus = new EventEmitter<SigmaEvents>();
bus.setMaxListeners(100);
