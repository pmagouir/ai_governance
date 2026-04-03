import { Composition } from "remotion";
import { StartHere } from "./StartHere";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="StartHere"
        component={StartHere}
        durationInFrames={30 * 72}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
