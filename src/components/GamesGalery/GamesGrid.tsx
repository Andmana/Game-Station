import { ReactNode } from "react";
import { dummyGames } from "../../utils/dummy";
import GridItem from "./GridItem";

const GamesGrid = () => {
    return (
        <div
            className="w-full grid gap-6"
            style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            }}
        >
            {dummyGames.map((item) => (
                <GridItem key={item.id} game={item} />
                // <article
                //     className="min-w-[320px] rounded-3xl"
                //     style={{ overflow: "visible" }}
                // >
                //     <div className="relative rounded-3xl  w-full h-[380px] bg-[#171717] ">
                //         <img
                //             src={item.background_image}
                //             className="w-full h-[250px] object-center object-cover rounded-t-3xl"
                //         />
                //         <div className="h-[130px] p-4 flex flex-col gap-3">
                //             <div className="w-full flex  justify-between items-center">
                //                 <div className="flex gap-2 ">
                //                     {item.platforms?.map((item, index) => {
                //                         if (!(item.slug in platformIcons))
                //                             return;
                //                         return (
                //                             <img
                //                                 key={index}
                //                                 src={platformIcons[item.slug]}
                //                                 className="h-5 w-5 object-cover bg-no-repeat bg-center bg-cover"
                //                                 alt={item.name}
                //                             />
                //                         );
                //                     })}
                //                 </div>
                //                 <span>+ Chart</span>
                //             </div>
                //             <div className="flex-1 flex items-center">
                //                 <h2>{item.name}</h2>
                //             </div>
                //         </div>
                //         <motion.div className=" flex flex-col gap-2 p-4">
                //             <GameDetailCard label="Genres">
                //                 <span>
                //                     {item.genres
                //                         ?.slice(0, 3)
                //                         .map((genre) => genre.name)
                //                         .join(", ")}
                //                 </span>
                //             </GameDetailCard>

                //             <span className="w-full h-0.5 bg-neutral-400"></span>

                //             <GameDetailCard label="Tags">
                //                 <span className="truncate max-w-[30ch]">
                //                     {item.tags
                //                         ?.slice(0, 3)
                //                         .map((tags) => tags.name)
                //                         .join(", ")}
                //                 </span>
                //             </GameDetailCard>

                //             <span className="w-full h-0.5 bg-neutral-400"></span>

                //             <GameDetailCard label="Rating">
                //                 <span className="max-w-[40ch]">
                //                     {item.contentRating?.name}
                //                 </span>
                //             </GameDetailCard>
                //         </motion.div>
                //     </div>
                // </article>
            ))}
        </div>
    );
};

// const GameDetailCard = ({
//     label,
//     children,
// }: {
//     label: string;
//     children: ReactNode;
// }) => {
//     return (
//         <div className="flex justify-between">
//             <span>{label} :</span>
//             {children}
//         </div>
//     );
// };

export default GamesGrid;
