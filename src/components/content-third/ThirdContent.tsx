import CSection from "../common/CSection";
import GameList from "./GameList";

const ThirdContent = () => {
    return (
        <CSection customClass="main-padding flex flex-col lg:flex-row justify-around items-stretch">
            <div className=" flex-2/12 lg:bg-[#F87171] flex items-center justify-center">
                <h1 className="text-center lg:!text-6xl transform text-vertical">
                    TOP BY GENRE
                </h1>
            </div>
            <div className="flex-10/12 flex justify-around items-center main-padding text-xs  ">
                <GameList />
                <GameList />
                <GameList />
            </div>
        </CSection>
    );
};

export default ThirdContent;
