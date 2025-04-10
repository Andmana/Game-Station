import { MouseEvent, useContext, useState } from "react";
import { IGame } from "../../types/IGame";
import { motion } from "framer-motion";
import { platformIcons } from "../../utils/platformIcons";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";

import iconCheck from "../../assets/images/icon-check.svg";

const GridItem = ({
    game,
    isReleased,
}: {
    game: IGame;
    isReleased?: boolean;
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const { addItemToCart, cartItems } = useContext(CartContext);

    const handleCartButton = (event: MouseEvent) => {
        event.preventDefault();
        addItemToCart(game);
    };

    return (
        <Link to={`/game/${game.id}`}>
            <motion.article
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                style={{ overflowY: isHovered ? "visible" : "hidden" }}
                initial={false}
                className="relative w-full h-[340px] rounded-2xl"
            >
                <motion.div
                    className="w-full h-auto top-0 left-0 rounded-2xl bg-[#171717]"
                    animate={{
                        zIndex: isHovered ? 1 : 0,
                        position: isHovered ? "absolute" : "static",
                    }}
                    initial={false}
                >
                    <img
                        src={game.background_image}
                        alt="Game"
                        className="w-full h-[215px] object-center object-cover rounded-t-2xl"
                    />
                    <div className="p-4 h-[125px] flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 ">
                                {game.platforms?.map((item, index) => {
                                    if (!(item.slug in platformIcons)) return;
                                    return (
                                        <img
                                            key={index}
                                            src={platformIcons[item.slug]}
                                            className="h-5 w-5 object-cover bg-no-repeat bg-center bg-cover"
                                            alt={item.name}
                                        />
                                    );
                                })}
                            </div>
                            {isReleased && (
                                <div className="font-semibold h-8 flex items-stretch  pointer-events-none">
                                    <span className="bg-white text-black  border-1 border-white p-1">
                                        $ {game.price}
                                    </span>
                                    <button
                                        className="border-1 p-1 pointer-events-auto"
                                        onClick={handleCartButton}
                                    >
                                        {cartItems.some(
                                            (item) => item.id === game.id
                                        ) ? (
                                            <img
                                                src={iconCheck}
                                                alt="Item added"
                                                className="w-full h-full px-3.5"
                                            />
                                        ) : (
                                            "+ Cart"
                                        )}
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="h-full flex items-center">
                            <h2 className="text-2xl">{game.name}</h2>
                        </div>
                    </div>
                    <div className="px-4 pb-8 flex flex-col gap-2">
                        {game.contentRating && (
                            <>
                                <ItemDetail
                                    label="Rating"
                                    values={game.contentRating?.name}
                                />
                                <span className="w-full h-0.5 mt-0.5 bg-neutral-50"></span>
                            </>
                        )}

                        {game.genres && game.genres?.length > 0 && (
                            <>
                                <ItemDetail
                                    label="Genre"
                                    values={game.genres
                                        ?.map((genre) => genre.name)
                                        .join(", ")}
                                />
                                <span className="w-full h-0.5 mt-0.5 bg-neutral-50"></span>
                            </>
                        )}

                        {game.tags && game.tags.length > 0 && (
                            <ItemDetail
                                label="Tags"
                                values={game.tags
                                    ?.slice(0, 10)
                                    .map((tag) => tag.name)
                                    .join(", ")}
                            />
                        )}
                    </div>
                </motion.div>
            </motion.article>
        </Link>
    );
};

const ItemDetail = ({ label, values }: { label: string; values?: string }) => {
    return (
        <div className="flex gap-2">
            <span className="flex-1/5">{label}</span>:
            <span className="flex-4/5 text-right">{values}</span>
        </div>
    );
};

export default GridItem;
