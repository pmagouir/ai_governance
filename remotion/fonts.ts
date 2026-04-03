import { loadFont as loadNotoSerif } from "@remotion/google-fonts/NotoSerif";
import { loadFont as loadJetBrainsMono } from "@remotion/google-fonts/JetBrainsMono";
import { continueRender, delayRender } from "remotion";

// Load fonts available via @remotion/google-fonts
loadNotoSerif("normal", {
  weights: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

loadJetBrainsMono("normal", {
  weights: ["400", "500"],
  subsets: ["latin"],
});

// Noto Serif SemiCondensed is not in @remotion/google-fonts,
// so we load it via a stylesheet link injected into the DOM.
const loadNotoSerifSemiCondensed = () => {
  const handle = delayRender("Loading Noto Serif SemiCondensed");
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Noto+Serif+SemiCondensed:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300&display=swap";
  link.onload = () => continueRender(handle);
  link.onerror = () => continueRender(handle);
  document.head.appendChild(link);
};

loadNotoSerifSemiCondensed();

// Font family strings for use in components
export const FONTS = {
  display: `'Noto Serif SemiCondensed', Georgia, serif`,
  body: `'Noto Serif', Georgia, serif`,
  subhead: `'Noto Serif SemiCondensed', Georgia, serif`,
  mono: `'JetBrains Mono', monospace`,
};

// DC CAP Brand Colors
export const COLORS = {
  navy: "#101A4C",
  purple: "#8352FF",
  blue: "#87B7D5",
  gold: "#FCB017",
  tan: "#FFF4ED",
  white: "#FFFFFF",
  darkGray: "#333333",
  restricted: "#DC3545",
};
