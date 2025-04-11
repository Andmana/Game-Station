import CarouselV2 from "../../components/carousel/CarouselV2";
import CSection from "../../components/common/CSection";
import CartAction from "../../components/GameDescription/CartAction";
import GameAbout from "../../components/GameDescription/GameAbout";
import GameDetail from "../../components/GameDescription/GameDetail";
import GameHeader from "../../components/GameDescription/GameHeader";
import { IGame } from "../../types/IGame";

const LargeScreen = ({ data }: { data: IGame }) => {
    return (
        <CSection customClass="main-padding !pt-[65px] gap-6 flex flex-col overflow-y-hidden">
            <GameHeader data={data} />
            <div className="flex-1 flex gap-4 overflow-y-hidden">
                <div className="flex-2/3 rounded-xl overflow-hidden">
                    <CarouselV2
                        images={data.screenshots?.map(
                            (screenshot) => screenshot.image
                        )}
                    />
                </div>
                <article
                    className="h-full min-w-[400px] flex-1/3 overflow-y-auto rounded-xl flex flex-col gap-2 justify-between"
                    style={{
                        scrollbarWidth: "none",
                    }}
                >
                    <div
                        className="overflow-y-scroll flex flex-col gap-3 text-neutral-400"
                        style={{ scrollbarWidth: "none" }}
                    >
                        <GameAbout game={data} />
                        <GameDetail game={data} />
                    </div>

                    <div className="text-2xl flex justify-between rounded-2xl  py-4 px-8 bg-custom-gradient">
                        <CartAction label="Cart +" data={data} />
                    </div>
                </article>
            </div>
        </CSection>
    );
};

export default LargeScreen;
