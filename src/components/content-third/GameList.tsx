import upcomingGames from "../carousel/dummy";
import CLink from "../common/CLink";

const GameList = () => {
    return (
        <div>
            <h2 className="mb-4">GENRE</h2>
            <ul className="flex flex-col gap-4 justify-start ">
                {upcomingGames.map((item) => (
                    <CLink key={item.id} to="/shop">
                        <div className="flex w-full gap-4">
                            <div
                                className="w-[70px] h-[80px] rounded-xl bg-center bg-cover"
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                }}
                            ></div>
                            <div className="flex-1 self-stretch flex flex-col justify-center gap-2.5">
                                <span>{item.title}</span>
                                <span>{item.releaseDate}</span>
                            </div>
                        </div>
                    </CLink>
                ))}
            </ul>
        </div>
    );
};

export default GameList;
