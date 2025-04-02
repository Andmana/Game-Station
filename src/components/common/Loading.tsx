import { motion } from "framer-motion";
import bubble from "../../assets/images/buble.png";

interface LoadingProps {
    customClass?: string;
}

const Loading = ({ customClass }: LoadingProps) => {
    const bubbleConfigs = [
        {
            y: [0, -50, -100, -150, -200],
            x: [0, 20, -10, 10, -20], // Smoother, less extreme x movement
            rotate: [0, 90, 180, 270, 360],
            opacity: [0, 0.9, 0.7, 0.5, 0],
            scale: [0, 1.02, 0.98, 1.03, 0.99],
            duration: 9,
            delay: 0,
            repeatDelay: 1.5, // Unique repeat delay
            width: 40,
            height: 40,
        },
        {
            y: [20, -30, -80, -130, -180],
            x: [-10, 5, -5, 10, -15], // Smoother x movement
            rotate: [0, -45, 90, 225, 360],
            opacity: [0, 0.8, 0.6, 0.3, 0],
            scale: [0, 0.82, 0.78, 0.83, 0.4],
            duration: 8,
            delay: 4,
            repeatDelay: 4, // Unique repeat delay
            width: 30,
            height: 30,
        },
        {
            y: [10, -60, -110, -160, -210],
            x: [10, -5, 15, -5, 10], // Smoother x movement
            rotate: [0, 120, 240, 300, 360],
            opacity: [0, 0.95, 0.8, 0.4, 0],
            scale: [0, 1.12, 1.08, 1.13, 1.09],
            duration: 10,
            delay: 3,
            repeatDelay: 2.2, // Unique repeat delay
            width: 45,
            height: 45,
        },
        {
            y: [-10, -40, -90, -140, -190],
            x: [-15, 5, -10, 5, -15], // Smoother x movement
            rotate: [0, -120, -240, -300, -360],
            opacity: [0, 0.95, 0.8, 0.4, 0],
            scale: [0, 1.12, 1.38, 1.43, 1.6],
            duration: 7,
            delay: 4,
            repeatDelay: 1.2, // Unique repeat delay
            width: 38,
            height: 38,
        },
        {
            y: [5, -55, -105, -155, -205],
            x: [5, -2, 8, -5, 10], // Smoother x movement
            rotate: [0, 60, 180, 300, 360],
            opacity: [0, 0.85, 0.65, 0.35, 0],
            scale: [0, 0.97, 0.93, 0.98, 0.94],
            duration: 6,
            delay: 9,
            repeatDelay: 7, // Unique repeat delay
            width: 35,
            height: 35,
        },
    ];

    return (
        <div
            className={`relative w-full h-full flex flex-col justify-center items-center gap-4 ${customClass} bg-[#242424] `}
        >
            <p className="-z-0 absolute text-3xl font-black tracking-wide">
                LOADING...
            </p>

            <div className="flex gap-8 transform translate-y-16">
                {bubbleConfigs.map((config, index) => (
                    <motion.img
                        key={index}
                        style={{
                            width: config.width,
                            height: config.height,
                            opacity: 0,
                            willChange: "transform, opacity",
                        }}
                        src={bubble}
                        initial={{
                            y: 100,
                            x: 0,
                            rotate: 0,
                            opacity: 0,
                            scale: 0,
                        }}
                        animate={{
                            y: config.y,
                            x: config.x,
                            rotate: config.rotate,
                            opacity: config.opacity,
                            scale: config.scale,
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: config.duration,
                            ease: "linear", // Use individual easing
                            delay: config.delay,
                            repeatDelay: config.repeatDelay, // Unique repeat delay for each bubble
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Loading;
