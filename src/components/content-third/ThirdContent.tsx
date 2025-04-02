// import { motion } from "framer-motion";
// import CSection from "../common/CSection";
// import GameList from "./GameList";
// import Carousel from "../carousel";
// import CarouselItems from "./CarouselItems";
// import MediaQuery from "react-responsive";

// const ThirdContent = () => {
//     return (
//         <CSection customClass="main-padding flex flex-col lg:flex-row justify-between items-stretch">
//             <motion.div
//                 whileInView={{ translateX: 0, opacity: 1 }}
//                 initial={{ translateX: "-100%", opacity: 0 }}
//                 transition={{ ease: "linear", duration: 0.6, delay: 0.4 }}
//                 className="relative lg:bg-[#F87171] lg:flex-2/12 flex items-center justify-center "
//             >
//                 <h1 className="text-center lg:!text-6xl transform text-vertical">
//                     TOP BY GENRE
//                 </h1>
//             </motion.div>

//             <MediaQuery minWidth={1024}>
//                 <div className="flex-10/12 flex justify-around items-center main-padding text-xs  ">
//                     <GameList />
//                     <GameList />
//                     <GameList />
//                 </div>
//             </MediaQuery>

//             <MediaQuery maxWidth={1023}>
//                 <div className="flex-10/12 lg:flex-10/12 flex justify-center items-center">
//                     <Carousel CarouselItems={CarouselItems} itemsCount={3} />
//                 </div>
//             </MediaQuery>
//         </CSection>
//     );
// };

const ThirdContent = () => <></>;

export default ThirdContent;
