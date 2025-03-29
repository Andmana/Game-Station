import { useCycle } from "framer-motion";
import backgroundVideo from "../../assets/videos/background-video.mp4";

import QuickNav from "../quick-nav/QuickNav";
import CSection from "../common/CSection";
import TiltCard from "./TiltCard";

const FirstContent = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);

    return (
        <>
            <CSection>
                {/* Video Background */}
                <div
                    id="video-background"
                    className="absolute h-full w-[125%] top-0 left-0 -z-0 transform translate-x-[-20%]"
                >
                    <video
                        className="absolute w-full h-full object-top object-cover"
                        src={backgroundVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>

                {/* Quick Nav */}
                <div
                    id="Quick Nav"
                    className="absolute main-padding h-full min-w-[320px] top-0 left-0 flex justify-start items-center pointer-events-none"
                >
                    <QuickNav isOpen={isOpen} toggleOpen={toggleOpen} />
                </div>
                <div className="absolute bottom-0 right-0 main-padding flex justify-center items-end md:justify-end md:items-center transform-3d pointer-events-none">
                    <TiltCard isOpen={isOpen} />
                </div>
            </CSection>
        </>
    );
};

export default FirstContent;
