import upcomingGames from "../carousel/dummy";
import GameListItem from "./GameListItem";

const GameList = () => {
    return (
        <div>
            <h2 className="mb-4">GENRE</h2>
            <ul className="flex flex-col gap-4 justify-start ">
                {upcomingGames.map((item, index) => (
                    <GameListItem
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        index={index}
                    />
                ))}
            </ul>
        </div>
    );
};

export default GameList;
