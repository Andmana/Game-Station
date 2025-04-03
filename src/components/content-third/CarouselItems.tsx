import { IGame } from "../../types/IGame";
import GameList from "./GameList";

const CarouselItems = ({ carouselData }: { carouselData: unknown }) => {
    const data = carouselData as { name: string; games: IGame[] }[];
    return (
        <>
            {data.map((item, index) => (
                <GameList
                    key={index}
                    isCarousel={true}
                    genre={item.name}
                    games={item.games}
                />
            ))}
        </>
    );
};

export default CarouselItems;
