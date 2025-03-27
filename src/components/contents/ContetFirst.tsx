import SectionWrapper from "./SectionWrapper";
import backgroundVideo from "../../assets/videos/background-video.mp4";

const ContentFirst = () => {
    return (
        <SectionWrapper>
            <section className="h-screen w-full relative flex items-stretch justify-center">
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
            </section>
        </SectionWrapper>
    );
};

export default ContentFirst;
