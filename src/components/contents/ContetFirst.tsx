import SectionWrapper from "./SectionWrapper";
import backgroundVideo from "../../assets/videos/background-video.mp4";
import ButtonWrapper from "../button-wrapper/ButtonWrapper";
import NavigationLink from "../navigation/NavigationLink";
import iconClose from "../../assets/images/icon-close.svg";
import { motion } from "framer-motion";
const ContentFirst = () => {
    return (
        <SectionWrapper>
            <section className="h-screen w-full relative flex items-center justify-start">
                <div className="h-full w-[125%] absolute top-0 left-0 z-0 transform translate-x-[-20%]">
                    <video
                        className="absoulute w-full h-full object-top object-cover"
                        src={backgroundVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                    ></video>
                </div>
                <div className="h-3/5 z-10 flex justify-between items-stretch ">
                    <div className="flex-1 main-padding flex items-center ">
                        <ButtonWrapper>
                            <motion.img
                                src={iconClose}
                                aria-hidden="true"
                                className="w-8 h-8"
                                whileHover={{ rotate: "150deg" }}
                                transition={{ duration: 0.4 }}
                            />
                        </ButtonWrapper>
                    </div>
                    <div className="w-[300px] flex flex-col items-center justify-center">
                        <h2 className="text-xl text-center mb-5 py-5 w-full bg-black ">
                            Quick Navigation
                        </h2>
                        <ul className="w-full flex  flex-col justify-center items-stretch gap-2.5">
                            <li className=" bg-[#000000]">
                                <NavigationLink to="/">
                                    Go to Shop
                                </NavigationLink>
                            </li>
                            <li className=" bg-[#000]">
                                <NavigationLink to="/">
                                    Go to Shop
                                </NavigationLink>
                            </li>
                            <li className=" bg-[#000]">
                                <NavigationLink to="/">
                                    Go to Shop
                                </NavigationLink>
                            </li>
                            <li className=" bg-[#000]">
                                <NavigationLink to="/">
                                    Go to Shop
                                </NavigationLink>
                            </li>
                            <li className=" bg-[#000]">
                                <NavigationLink to="/">
                                    Go to Shop
                                </NavigationLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 main-padding flex items-center ">
                        <ButtonWrapper>
                            <motion.img
                                src={iconClose}
                                aria-hidden="true"
                                className="w-8 h-8"
                                whileHover={{ rotate: "150deg" }}
                                transition={{ duration: 0.4 }}
                            />
                        </ButtonWrapper>
                    </div>
                </div>
            </section>
        </SectionWrapper>
    );
};

export default ContentFirst;
