import { Link } from "react-router-dom";
import { IGame } from "../../types/IGame";
import { formatStringToReadableDate } from "../../utils/formatDate";

const NavSearchItem = ({ game }: { game: IGame }) => {
    return (
        <Link to={`/game/${game.id}`}>
            <li className="flex gap-4 items-center">
                <img
                    src={game.background_image}
                    className="w-[60px] md:w-[140px] h-[80px] md:h-[100px] object-cover object-center rounded-xl"
                />
                <p className="flex flex-col gap-2">
                    <span className=" md:text-xl font-semibold">
                        {game.name}
                    </span>
                    {game.released && (
                        <span className="text-xs md:text-lg">
                            {formatStringToReadableDate(game.released)}
                        </span>
                    )}
                </p>
            </li>
        </Link>
    );
};

export default NavSearchItem;
