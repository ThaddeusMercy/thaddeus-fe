import { ImageResponse } from "next/og";

export const alt =
  "Mercy Thaddeus — Co-founder & CPO, Attention Factory · AI educator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(145deg, #0E0E10 0%, #1a1a1f 55%, #2a1210 100%)",
          color: "#FAFAFA",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#FF6B5C",
          }}
        >
          Attention Factory
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Mercy Thaddeus
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 600,
              lineHeight: 1.25,
              color: "#D8D8D8",
              maxWidth: 900,
            }}
          >
            Co-founder & CPO · AI educator
          </div>
          <div
            style={{
              fontSize: 24,
              lineHeight: 1.45,
              color: "#A8A8AD",
              maxWidth: 820,
            }}
          >
            Corporate AI training, consulting, and applied AI content for teams
            that need to ship.
          </div>
        </div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "#FF8A7A",
          }}
        >
          mercythaddeus.xyz
        </div>
      </div>
    ),
    { ...size },
  );
}
