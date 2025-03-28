import SectionWrapper from "./SectionWrapper";
import backgroundVideo from "../../assets/videos/background-video.mp4";
import QuickNavigation from "../quick-navigation/QuickNavigation";
import {
    useMotionValue,
    useSpring,
    useTransform,
    motion,
    useCycle,
} from "framer-motion";

const ContentFirst = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    console.log(isOpen);

    return (
        <SectionWrapper>
            <section className="h-screen w-full relative flex items-center justify-start">
                <div className="h-full w-[125%] absolute top-0 left-0 z-0 transform translate-x-[-20%]">
                    <video
                        className="absolute w-full h-full object-top object-cover"
                        src={backgroundVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
                <QuickNavigation isOpen={isOpen} toggleOpen={toggleOpen} />
                <TiltCard isOpen={isOpen} />
            </section>
        </SectionWrapper>
    );
};

interface TiltCardProps {
    isOpen: boolean;
}

const TiltCard = ({ isOpen }: TiltCardProps) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        ["10.5deg", "-10.5deg"]
    );
    const rotateY = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        ["-10.5deg", "10.5deg"]
    );

    const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (
        event
    ) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const { width, height } = rect;

        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            className="transform-3d absolute z-10 w-full h-full main-padding flex justify-center items-end md:justify-end md:items-center"
            initial={{ opacity: 0, translateY: "50px" }}
            animate={
                isOpen
                    ? { opacity: 0, translateY: "50px" }
                    : { opacity: 1, translateY: 0 }
            }
            transition={{
                duration: 0.4,
                type: "spring",
                damping: 20,
                stiffness: 300,
            }}
        >
            <motion.div
                className="bg-[#00000066] mt-7"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            >
                <div
                    style={{
                        transform: "translateZ(30px)",
                        transformStyle: "preserve-3d",
                    }}
                    className="bg-[#2424247a] p-5 text-center inset-6"
                >
                    <h1 className="text-4xl font-black mb-4">GAME STATION</h1>
                    <p className="max-w-[400px] w-auto">
                        This isn't a real online game shop. You can't buy any
                        games here.
                    </p>

                    <div className="flex justify-center gap-8 py-1 rounded-2xl text-center mt-2">
                        <a
                            className="w-[100px] border-b-2 py-2 flex justify-center"
                            href="https://github.com/Andmana/Game-Station"
                        >
                            Repo
                        </a>
                        <a
                            className="w-[100px] border-b-2 py-2 flex justify-center"
                            href="https://rawg.io/apidocs"
                        >
                            RAWG API
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ContentFirst;
