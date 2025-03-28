import SectionWrapper from "./SectionWrapper";

const ContentSecond = () => {
    return (
        <SectionWrapper>
            <div className="relative h-full w-full main-padding flex justify-center items-center">
                <div className="absolute text-4xl top-5 transform translate-y-1/2">
                    <h2>Up coming</h2>
                </div>
                <div className="absolute w-8/12 h-8/12 bg-amber-400  "></div>
                <div className="absolute w-8/12 h-8/12 opacity-70"></div>
            </div>
        </SectionWrapper>
    );
};

export default ContentSecond;
