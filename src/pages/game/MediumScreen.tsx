import CarouselV2 from "../../components/carousel/CarouselV2";
import CartAction from "../../components/GameDescription/CartAction";
import GameAbout from "../../components/GameDescription/GameAbout";
import GameDetail from "../../components/GameDescription/GameDetail";
import GameHeader from "../../components/GameDescription/GameHeader";
import { IGame } from "../../types/IGame";

const MediumScreen = ({ data }: { data: IGame }) => {
    return (
        <section className="w-fulloverflow-hidden" style={{ marginTop: 65 }}>
            <div
                style={{
                    height: "calc(100vh - 65px)",
                }}
                className="flex flex-col justify-between gap-4  main-padding !pt-0 "
            >
                <GameHeader data={data} />

                <div className="flex-1 rounded-xl overflow-hidden">
                    <CarouselV2
                        images={data.screenshots?.map(
                            (screenshot) => screenshot.image
                        )}
                    />
                </div>

                <div className="text-2xl flex justify-between rounded-2xl  py-4 px-8 bg-custom-gradient-top">
                    <CartAction label="Add to chart +" data={data} />
                </div>
            </div>
            <article className="main-padding">
                <div
                    className="overflow-y-scroll flex flex-col gap-3 text-neutral-400"
                    style={{ scrollbarWidth: "none" }}
                >
                    <GameAbout game={data} />
                    <GameDetail game={data} />
                </div>
            </article>
        </section>
    );
};

export default MediumScreen;
