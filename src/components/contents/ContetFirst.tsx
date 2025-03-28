import SectionWrapper from "./SectionWrapper";
import backgroundVideo from "../../assets/videos/background-video.mp4";
import QuickNavigation from "../quick-navigation/QuickNavigation";
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
                <QuickNavigation />

                <div className="absolute z-10 w-full h-full main-padding flex justify-center items-end md:justify-end md:items-center">
                    <div className="bg-[#2424247a] p-5 text-center mt-7 ">
                        <h1 className="text-4xl font-black mb-4">
                            GAME STATION
                        </h1>
                        <p className="max-w-[400px] w-auto">
                            This isn't a real online game shop. You can't buy
                            any games here.
                        </p>

                        <div className="flex justify-center gap-8 py-1 rounded-2xl text-center mt-2">
                            <a
                                className="w-[85px] border-b-2 px-7 py-2 flex justify-center"
                                href="https://github.com/Andmana/Game-Station"
                            >
                                Repo
                            </a>
                            <a
                                className="w-[85px] border-b-2 px-7 py-2 flex justify-center"
                                href="https://rawg.io/apidocs"
                            >
                                RAWG API
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </SectionWrapper>
    );
};

export default ContentFirst;
