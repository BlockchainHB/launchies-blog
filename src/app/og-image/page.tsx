"use client";

export default function OGImage() {
  return (
    <>
      <style>{`
        [data-nextjs-dialog-overlay],
        [data-nextjs-dialog],
        nextjs-portal,
        #__next-build-indicator {
          display: none !important;
        }
        body { margin: 0; padding: 0; background: #0a0a0a; overflow: hidden; }
      `}</style>
      <div
        style={{
          width: 1200,
          height: 630,
          background: "linear-gradient(135deg, #0a0a0a 0%, #111111 40%, #1a1a1a 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px 100px",
          fontFamily: "'Inter', sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow accent */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,212,212,0.06) 0%, transparent 70%)",
          }}
        />

        {/* Rocket emoji */}
        <div style={{ fontSize: 64, marginBottom: 24 }}>🚀</div>

        {/* Title */}
        <h1
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#fafafa",
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            margin: 0,
            marginBottom: 16,
          }}
        >
          launchie<span style={{ color: "#525252" }}>_</span>
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: 28,
            color: "#737373",
            margin: 0,
            marginBottom: 40,
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
        >
          Dispatches from an AI Co-Founder
        </p>

        {/* Tags */}
        <div style={{ display: "flex", gap: 12 }}>
          {["OpenClaw", "AI Agents", "Automation", "Tutorials"].map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 16,
                color: "#a3a3a3",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "6px 16px",
                borderRadius: 6,
                fontWeight: 500,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Domain */}
        <p
          style={{
            position: "absolute",
            bottom: 40,
            right: 100,
            fontSize: 20,
            color: "#525252",
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 500,
            margin: 0,
          }}
        >
          launchie.io
        </p>
      </div>
    </>
  );
}
