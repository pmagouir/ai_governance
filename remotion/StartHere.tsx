import React from "react";
import {
  AbsoluteFill,
  Audio,
  Series,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from "remotion";
import { FONTS, COLORS } from "./fonts";

// ============================================================
// TIMING CONFIG (frames at 30fps)
// ============================================================
const SLIDE_DURATION = 300; // 10 seconds per slide
const FADE_IN = 20; // ~0.67s fade-in
const STAGGER = 12; // ~0.4s between elements
const TRANSITION = 30; // 1s crossfade between slides

// Total: 6 slides × 10s + 5 transitions × 1s = ~72s
// Set composition to 30 * 72 = 2160 frames

// ============================================================
// ANIMATION HELPERS
// ============================================================
const useFadeUp = (delay: number = 0) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    fps,
    frame: Math.max(0, frame - delay),
    durationInFrames: 40,
    config: { damping: 15, stiffness: 80 },
  });

  return {
    opacity: progress,
    transform: `translateY(${interpolate(progress, [0, 1], [30, 0])}px)`,
  };
};

const useScaleIn = (delay: number = 0) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    fps,
    frame: Math.max(0, frame - delay),
    durationInFrames: 45,
    config: { damping: 12, stiffness: 60 },
  });

  return {
    opacity: progress,
    transform: `scale(${interpolate(progress, [0, 1], [0.85, 1])})`,
  };
};

const useFadeIn = (delay: number = 0) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame - delay, [0, FADE_IN], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return { opacity };
};

// ============================================================
// SLIDE 1: TITLE
// ============================================================
const SlideTitle: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: COLORS.navy,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px",
      }}
    >
      {/* Badge */}
      <div
        style={{
          ...useFadeUp(10),
          fontFamily: FONTS.subhead,
          fontWeight: 300,
          fontSize: 18,
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          color: COLORS.gold,
          border: `1px solid rgba(252, 176, 23, 0.4)`,
          padding: "10px 30px",
          borderRadius: 2,
          marginBottom: 40,
        }}
      >
        DC CAP Scholars
      </div>

      {/* Main Title */}
      <h1
        style={{
          ...useFadeUp(22),
          fontFamily: FONTS.display,
          fontSize: 110,
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: "0.02em",
          textTransform: "uppercase" as const,
          color: COLORS.white,
          marginBottom: 30,
          textAlign: "center",
        }}
      >
        AI Governance
      </h1>

      {/* Subtitle */}
      <p
        style={{
          ...useFadeUp(34),
          fontFamily: FONTS.subhead,
          fontSize: 36,
          fontWeight: 300,
          color: COLORS.blue,
          maxWidth: 800,
          lineHeight: 1.5,
          textAlign: "center",
        }}
      >
        Building the skills that define the next professional landscape.
      </p>

      {/* Meta */}
      <p
        style={{
          ...useFadeIn(55),
          fontFamily: FONTS.body,
          fontSize: 16,
          color: "rgba(255, 255, 255, 0.5)",
          marginTop: 60,
          letterSpacing: "0.05em",
        }}
      >
        Enterprise AI Leadership Pilot · April 6 – June 5, 2026
      </p>
    </AbsoluteFill>
  );
};

// ============================================================
// SLIDE 2: WHY THIS MATTERS
// ============================================================
const SlideFrame: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${COLORS.navy} 0%, #1a2a6c 50%, ${COLORS.purple} 100%)`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "100px",
      }}
    >
      <h2
        style={{
          ...useFadeUp(8),
          fontFamily: FONTS.subhead,
          fontSize: 36,
          fontWeight: 300,
          color: COLORS.gold,
          letterSpacing: "0.05em",
          marginBottom: 50,
          textAlign: "center",
        }}
      >
        Why This Matters For You
      </h2>

      <p
        style={{
          ...useFadeUp(20),
          fontFamily: FONTS.subhead,
          fontSize: 34,
          fontWeight: 300,
          lineHeight: 1.7,
          maxWidth: 850,
          textAlign: "center",
          color: COLORS.white,
        }}
      >
        The professional landscape is changing. AI fluency is becoming a{" "}
        <span style={{ color: COLORS.gold, fontStyle: "italic" }}>
          core career competency
        </span>{" "}
        across every sector, every role, every organization. The people who build
        this skill now will lead the next chapter.
      </p>

      <p
        style={{
          ...useFadeUp(38),
          fontFamily: FONTS.subhead,
          fontSize: 24,
          fontWeight: 300,
          lineHeight: 1.7,
          maxWidth: 850,
          textAlign: "center",
          color: COLORS.white,
          marginTop: 30,
          opacity: 0.9,
        }}
      >
        DC CAP is investing in your development because we believe our team
        deserves the same opportunity we create for our scholars: access to the
        tools and training that open doors.
      </p>

      <p
        style={{
          ...useFadeIn(55),
          fontFamily: FONTS.subhead,
          fontSize: 18,
          fontWeight: 300,
          lineHeight: 1.7,
          maxWidth: 850,
          textAlign: "center",
          color: "rgba(255, 255, 255, 0.65)",
          marginTop: 20,
        }}
      >
        Governance is how we do this responsibly. It protects our students, our
        data, and your confidence to use AI well.
      </p>
    </AbsoluteFill>
  );
};

// ============================================================
// SLIDE 3: THE 4Ds
// ============================================================
const QuadrantCard: React.FC<{
  letter: string;
  title: string;
  question: string;
  bg: string;
  textColor?: string;
  delay: number;
}> = ({ letter, title, question, bg, textColor = COLORS.white, delay }) => {
  return (
    <div
      style={{
        ...useScaleIn(delay),
        background: bg,
        borderRadius: 12,
        padding: "40px 30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: textColor,
        minHeight: 240,
      }}
    >
      <span
        style={{
          fontFamily: FONTS.display,
          fontSize: 72,
          fontWeight: 900,
          lineHeight: 1,
          opacity: 0.25,
          marginBottom: 8,
        }}
      >
        {letter}
      </span>
      <span
        style={{
          fontFamily: FONTS.display,
          fontSize: 22,
          fontWeight: 800,
          textTransform: "uppercase" as const,
          letterSpacing: "0.05em",
          marginBottom: 10,
        }}
      >
        {title}
      </span>
      <span
        style={{
          fontFamily: FONTS.body,
          fontSize: 16,
          fontWeight: 400,
          fontStyle: "italic",
          lineHeight: 1.4,
          opacity: 0.9,
        }}
      >
        {question}
      </span>
    </div>
  );
};

const Slide4Ds: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: COLORS.tan,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px",
      }}
    >
      <h2
        style={{
          ...useFadeUp(5),
          fontFamily: FONTS.display,
          fontSize: 60,
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: "0.02em",
          textTransform: "uppercase" as const,
          color: COLORS.darkGray,
          marginBottom: 10,
          textAlign: "center",
        }}
      >
        The 4Ds of AI Competency
      </h2>

      <p
        style={{
          ...useFadeIn(12),
          fontFamily: FONTS.body,
          fontSize: 20,
          color: COLORS.darkGray,
          opacity: 0.6,
          marginBottom: 50,
          textAlign: "center",
        }}
      >
        Four questions that guide every interaction with AI.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          maxWidth: 900,
          width: "100%",
        }}
      >
        <QuadrantCard
          letter="D"
          title="Delegation"
          question={'"What should I ask AI to do?"'}
          bg={COLORS.navy}
          delay={20}
        />
        <QuadrantCard
          letter="D"
          title="Description"
          question={'"How do I tell it what I need?"'}
          bg={COLORS.purple}
          delay={32}
        />
        <QuadrantCard
          letter="D"
          title="Discernment"
          question={'"Is this output good enough?"'}
          bg={COLORS.blue}
          delay={44}
        />
        <QuadrantCard
          letter="D"
          title="Diligence"
          question={'"Who owns what gets sent?"'}
          bg={COLORS.gold}
          textColor={COLORS.darkGray}
          delay={56}
        />
      </div>
    </AbsoluteFill>
  );
};

// ============================================================
// SLIDE 4: THREE MODALITIES
// ============================================================
const ModalityCard: React.FC<{
  icon: string;
  name: string;
  mapping: string;
  example: string;
  delay: number;
}> = ({ icon, name, mapping, example, delay }) => {
  return (
    <div
      style={{
        ...useScaleIn(delay),
        background: "rgba(255, 255, 255, 0.06)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        borderRadius: 12,
        padding: "40px 30px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
      }}
    >
      <span style={{ fontSize: 48 }}>{icon}</span>
      <span
        style={{
          fontFamily: FONTS.display,
          fontSize: 20,
          fontWeight: 800,
          textTransform: "uppercase" as const,
          letterSpacing: "0.05em",
          color: COLORS.white,
        }}
      >
        {name}
      </span>
      <span
        style={{
          fontFamily: FONTS.mono,
          fontSize: 14,
          color: COLORS.gold,
          letterSpacing: "0.03em",
        }}
      >
        {mapping}
      </span>
      <p
        style={{
          fontFamily: FONTS.body,
          fontSize: 16,
          lineHeight: 1.5,
          fontStyle: "italic",
          color: "rgba(255, 255, 255, 0.85)",
        }}
      >
        {example}
      </p>
    </div>
  );
};

const SlideModalities: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: COLORS.navy,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px",
      }}
    >
      <h2
        style={{
          ...useFadeUp(5),
          fontFamily: FONTS.display,
          fontSize: 60,
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: "0.02em",
          textTransform: "uppercase" as const,
          color: COLORS.white,
          marginBottom: 50,
          textAlign: "center",
        }}
      >
        Three Ways to Work With AI
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 24,
          maxWidth: 1000,
          width: "100%",
        }}
      >
        <ModalityCard
          icon="⚙"
          name="Automation"
          mapping="Delegation + Diligence"
          example='"Draft this email from my notes."'
          delay={18}
        />
        <ModalityCard
          icon="⚖"
          name="Augmentation"
          mapping="Description + Discernment"
          example='"Help me develop this grant narrative."'
          delay={32}
        />
        <ModalityCard
          icon="★"
          name="Agency"
          mapping="All Four Ds"
          example='"Build a Project any staff member can use."'
          delay={46}
        />
      </div>

      <p
        style={{
          ...useFadeIn(65),
          textAlign: "center",
          marginTop: 40,
          fontStyle: "italic",
          color: COLORS.gold,
          fontSize: 22,
          fontFamily: FONTS.body,
        }}
      >
        You are always the driver. The modality determines how much of the road
        you share.
      </p>
    </AbsoluteFill>
  );
};

// ============================================================
// SLIDE 5: DATA CLASSIFICATION
// ============================================================
const TierCard: React.FC<{
  number: string;
  label: string;
  desc: string;
  bg: string;
  textColor?: string;
  delay: number;
}> = ({ number, label, desc, bg, textColor = COLORS.white, delay }) => {
  return (
    <div
      style={{
        ...useScaleIn(delay),
        background: bg,
        borderRadius: 12,
        padding: "30px 20px",
        textAlign: "center",
        color: textColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 220,
        gap: 8,
      }}
    >
      <span
        style={{
          fontFamily: FONTS.display,
          fontSize: 56,
          fontWeight: 900,
          opacity: 0.3,
          lineHeight: 1,
        }}
      >
        {number}
      </span>
      <span
        style={{
          fontFamily: FONTS.display,
          fontSize: 22,
          fontWeight: 800,
          textTransform: "uppercase" as const,
          letterSpacing: "0.05em",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: FONTS.body,
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.4,
          opacity: 0.9,
        }}
      >
        {desc}
      </span>
    </div>
  );
};

const SlideData: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: COLORS.white,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px",
      }}
    >
      <h2
        style={{
          ...useFadeUp(5),
          fontFamily: FONTS.display,
          fontSize: 60,
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: "0.02em",
          textTransform: "uppercase" as const,
          color: COLORS.darkGray,
          marginBottom: 10,
          textAlign: "center",
        }}
      >
        Know Your Data
      </h2>

      <p
        style={{
          ...useFadeIn(12),
          fontFamily: FONTS.body,
          fontSize: 20,
          color: COLORS.darkGray,
          opacity: 0.6,
          marginBottom: 50,
          textAlign: "center",
        }}
      >
        Every piece of information has a classification. Know it before you share
        it.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 18,
          maxWidth: 1000,
          width: "100%",
        }}
      >
        <TierCard
          number="1"
          label="Restricted"
          desc="PII, FERPA, scholar records. Never enters AI."
          bg={COLORS.restricted}
          delay={18}
        />
        <TierCard
          number="2"
          label="Sensitive"
          desc="Internal strategy, financials. Requires approval."
          bg={COLORS.gold}
          textColor={COLORS.darkGray}
          delay={28}
        />
        <TierCard
          number="3"
          label="Internal"
          desc="Drafts, process docs. Safe with care."
          bg={COLORS.purple}
          delay={38}
        />
        <TierCard
          number="4"
          label="Public"
          desc="Published reports, website content. Free to use."
          bg={COLORS.navy}
          delay={48}
        />
      </div>

      <div
        style={{
          ...useFadeIn(65),
          marginTop: 40,
          padding: "16px 30px",
          background: "rgba(252, 176, 23, 0.12)",
          borderLeft: `4px solid ${COLORS.gold}`,
          borderRadius: 4,
          fontWeight: 600,
          textAlign: "center",
          color: COLORS.darkGray,
          fontSize: 20,
          fontFamily: FONTS.body,
          maxWidth: 1000,
        }}
      >
        When in doubt, classify one tier more restricted than you think.
      </div>
    </AbsoluteFill>
  );
};

// ============================================================
// SLIDE 6: CLOSE
// ============================================================
const CloseStep: React.FC<{
  number: string;
  text: string;
  delay: number;
}> = ({ number, text, delay }) => {
  return (
    <div
      style={{
        ...useFadeUp(delay),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: COLORS.purple,
          color: COLORS.white,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: FONTS.display,
          fontWeight: 800,
          fontSize: 22,
        }}
      >
        {number}
      </div>
      <span
        style={{
          fontFamily: FONTS.body,
          fontSize: 16,
          color: "rgba(255, 255, 255, 0.8)",
          maxWidth: 180,
          textAlign: "center",
          lineHeight: 1.4,
        }}
      >
        {text}
      </span>
    </div>
  );
};

const SlideClose: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: COLORS.navy,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px",
      }}
    >
      <h2
        style={{
          ...useFadeUp(5),
          fontFamily: FONTS.display,
          fontSize: 60,
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: "0.02em",
          textTransform: "uppercase" as const,
          color: COLORS.white,
          marginBottom: 30,
          textAlign: "center",
        }}
      >
        Your Pilot Starts Now
      </h2>

      <p
        style={{
          ...useFadeUp(15),
          fontFamily: FONTS.subhead,
          fontSize: 30,
          fontWeight: 300,
          color: COLORS.blue,
          maxWidth: 700,
          lineHeight: 1.5,
          textAlign: "center",
          marginBottom: 50,
        }}
      >
        60 days to build the competencies that will define your next career
        chapter.
      </p>

      <div
        style={{
          display: "flex",
          gap: 60,
          justifyContent: "center",
        }}
      >
        <CloseStep
          number="1"
          text="Get provisioned with Claude"
          delay={28}
        />
        <CloseStep
          number="2"
          text="Complete orientation April 8-9"
          delay={40}
        />
        <CloseStep
          number="3"
          text="Run your first real task April 20"
          delay={52}
        />
      </div>

      <p
        style={{
          ...useFadeIn(70),
          fontFamily: FONTS.body,
          fontSize: 22,
          fontWeight: 600,
          color: COLORS.gold,
          fontStyle: "italic",
          marginTop: 60,
          textAlign: "center",
        }}
      >
        "We invest in scholars. We invest in our team. This is yours. Own it."
      </p>
    </AbsoluteFill>
  );
};

// ============================================================
// MAIN COMPOSITION
// ============================================================
export const StartHere: React.FC = () => {
  const { durationInFrames } = useVideoConfig();

  // Audio volume: fade in over 1s, hold, fade out over 2s
  const audioVolume = (f: number) =>
    interpolate(
      f,
      [0, 30, durationInFrames - 60, durationInFrames],
      [0, 0.4, 0.4, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

  return (
    <AbsoluteFill style={{ background: COLORS.navy }}>
      {/* Background Music */}
      <Audio src={staticFile("music.mp3")} volume={audioVolume} />

      {/* Slides */}
      <Series>
        <Series.Sequence durationInFrames={SLIDE_DURATION}>
          <SlideTitle />
        </Series.Sequence>
        <Series.Sequence
          durationInFrames={SLIDE_DURATION}
          offset={-TRANSITION}
        >
          <SlideFrame />
        </Series.Sequence>
        <Series.Sequence
          durationInFrames={SLIDE_DURATION}
          offset={-TRANSITION}
        >
          <Slide4Ds />
        </Series.Sequence>
        <Series.Sequence
          durationInFrames={SLIDE_DURATION}
          offset={-TRANSITION}
        >
          <SlideModalities />
        </Series.Sequence>
        <Series.Sequence
          durationInFrames={SLIDE_DURATION}
          offset={-TRANSITION}
        >
          <SlideData />
        </Series.Sequence>
        <Series.Sequence
          durationInFrames={SLIDE_DURATION}
          offset={-TRANSITION}
        >
          <SlideClose />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
