import GameList from "./GameList";

const arrayBlank = ["", "", ""];

const CarouselItems = () => {
    return (
        <>
            {arrayBlank.map((_, index) => (
                <GameList key={index} isCarousel={true} />
            ))}
        </>
    );
};

export default CarouselItems;
