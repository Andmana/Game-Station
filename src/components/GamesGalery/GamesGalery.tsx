import CSection from "../common/CSection";
import SortDropDown from "./SortDropDown";

type GamesGaleryProps = {
    header: string;
    queryParams: Record<string, string>;
    hasSort: boolean;
    handleSortOrderChange: (order: string) => void;
};

const GamesGalery = ({
    header,
    queryParams,
    hasSort,
    handleSortOrderChange,
}: GamesGaleryProps) => {
    return (
        <CSection customClass="flex-1 !pt-[80px] sm:!pt-[100px] !h-auto flex flex-col gap-9">
            <h1 className="!text-6xl">{header}</h1>
            {hasSort && (
                <SortDropDown
                    currentSort={queryParams.ordering}
                    handleSortOrderChange={handleSortOrderChange}
                />
            )}
        </CSection>
    );
};
export default GamesGalery;
