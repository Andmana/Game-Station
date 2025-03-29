import { Dispatch, SetStateAction } from "react";

interface CarouselDots {
    currentIdx: number;
    itemsCount: number;
    setCurrentIdx: Dispatch<SetStateAction<number>>;
}

const CarouselDots = ({
    currentIdx,
    itemsCount,
    setCurrentIdx,
}: CarouselDots) => {
    return (
        <div className="mt-1 flex w-full justify-center gap-2">
            {Array.from({ length: itemsCount }, (_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-3 w-3 rounded-full transition-colors ${
                        idx === currentIdx ? "bg-neutral-50" : "bg-neutral-500"
                    }`}
                />
            ))}
        </div>
    );
};

export default CarouselDots;
