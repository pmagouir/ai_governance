import React from "react";
import { Player } from "@remotion/player";
import { StartHere } from "../StartHere";
import "./app.css";

export const App: React.FC = () => {
  return (
    <div className="app-root">
      <header className="app-header">
        <h1>AI Governance – DC CAP Scholars</h1>
        <p>Interactive preview of the Remotion composition.</p>
      </header>

      <main className="app-main">
        <Player
          component={StartHere}
          durationInFrames={30 * 72}
          fps={30}
          compositionWidth={1280}
          compositionHeight={720}
          style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 16px 40px rgba(0,0,0,0.35)" }}
          controls
          loop
        />
      </main>

      <footer className="app-footer">
        <span>Built with Remotion and React.</span>
      </footer>
    </div>
  );
};

