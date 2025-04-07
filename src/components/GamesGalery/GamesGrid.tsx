import { IGame } from "../../types/IGame";
import GridItem from "./GridItem";

interface GamesGridPops {
    games: IGame[];
    isReleased?: boolean;
}

const GamesGrid = ({ games, isReleased = true }: GamesGridPops) => {
    return (
        <div
            className="w-full grid gap-6"
            style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            }}
        >
            {isReleased}
            {games.map((item) => (
                <GridItem key={item.id} game={item} />
            ))}
        </div>
    );
};

export default GamesGrid;
