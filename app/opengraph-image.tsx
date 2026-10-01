import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const dynamic = "force-static";
export const alt = `${site.name} | ${site.role}`;
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
          padding: 72,
          background: "linear-gradient(135deg, #0a0d14 0%, #10141d 100%)",
          color: "#e8eaf0",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: 9999,
            background: "linear-gradient(135deg, #38bdf8, #a78bfa)",
            opacity: 0.35,
            filter: "blur(80px)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#9aa3b5" }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "linear-gradient(135deg, #38bdf8, #a78bfa)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            {site.firstName[0]}
          </div>
          tavethiya.github.io
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>{site.name}</div>
          <div style={{ fontSize: 40, color: "#38bdf8" }}>{site.role}</div>
          <div style={{ fontSize: 28, color: "#9aa3b5", maxWidth: 900 }}>{site.tagline}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
