import GameList from "./GameList";
import { CarouselData } from "./ThirdContent";

interface CarouselItemsProps {
    carouselData: unknown;
}

const CarouselItems = ({ carouselData }: CarouselItemsProps) => {
    const data = carouselData as CarouselData[];
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
