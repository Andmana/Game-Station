import { useState } from "react";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import Navigatebtn from "../../assets/images/icon-down.svg";
import { AnimatePresence, motion, wrap } from "framer-motion";

const imagesTemp = [img1, img2, img3];

const CarouselV2 = ({ images = imagesTemp }) => {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, images.length, page);
    const paginate = (newD: number) => setPage([page + newD, newD]);

    return (
        <div className="relative h-full flex justify-center items-center overflow-hidden isolate">
            <AnimatePresence>
                <motion.img
                    key={page}
                    src={images[imageIndex]}
                    className="absolute w-full h-full "
                    variants={{
                        enter: {
                            y: direction > 0 ? 1000 : -1000,
                            opacity: 0,
                        },
                        center: { y: 0, opacity: 1 },
                        exit: {
                            y: direction < 0 ? 1000 : -1000,
                            opacity: 0,
                        },
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        y: {
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        },
                        opacity: { duration: 0.2 },
                    }}
                />
            </AnimatePresence>
            <div
                style={{
                    backgroundImage:
                        "linear-gradient(to left, #171717, #17171700)",
                }}
                className="absolute w-24 h-full right-0 flex flex-col gap-8"
            >
                <button
                    onClick={() => paginate(-1)}
                    className="cursor-pointer flex-1/2 left-0 flex justify-center items-end"
                >
                    <img
                        src={Navigatebtn}
                        alt="Screenshot"
                        className="w-8 h-8 p-1 rotate-180 bg-[#ffffff70] rounded-full"
                    />
                </button>

                <button
                    onClick={() => paginate(1)}
                    className="cursor-pointer flex-1/2 left-0 flex justify-center items-start"
                >
                    <img
                        src={Navigatebtn}
                        alt=""
                        className="w-8 h-8 p-1 bg-[#ffffff60] rounded-full"
                    />
                </button>
            </div>
            <div
                className="absolute w-24 left-0 h-full flex flex-col items-center justify-center "
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #171717, #17171700)",
                }}
            >
                <div className="flex flex-col gap-2 relative">
                    {images.map((_, idx) => (
                        <motion.button
                            key={idx}
                            className="h-3 w-3 rounded-full bg-neutral-500"
                            initial={{ scale: 1 }}
                            animate={{ scale: imageIndex === idx ? 0.1 : 1 }}
                            onClick={() =>
                                setPage([idx, idx > imageIndex ? 1 : -1])
                            }
                            transition={{ duration: 0.2 }}
                        ></motion.button>
                    ))}
                    <motion.div
                        className="absolute h-3 w-3 rounded-full bg-white"
                        initial={{ y: 0 }}
                        animate={{ y: 0 + (imageIndex * 8 + imageIndex * 12) }}
                    ></motion.div>
                </div>
            </div>
        </div>
    );
};
export default CarouselV2;
