import CSection from "../common/CSection";
import GamesGrid from "./GamesGrid";
import SortDropDown from "./SortDropDown";

interface GamesGaleryProps {
    filters?: string;
}

const GamesGalery = ({ filters }: GamesGaleryProps) => {
    return (
        <CSection customClass="flex-1 !pt-[80px] sm:!pt-[100px] !h-auto flex flex-col gap-9">
            <h1 className="!text-6xl">{filters}</h1>
            <SortDropDown />
            <GamesGrid />
        </CSection>
    );
};

export default GamesGalery;
