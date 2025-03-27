import { Link } from "react-router-dom";
import backgroundVideo from "../assets/videos/background-video.mp4";

const HomepageSection1 = () => {
    return (
        <section className="h-screen w-full relative flex items-stretch justify-center ">
            <div className="h-full w-[125%] absolute top-0 left-0 z-0 transform translate-x-[-20%]">
                <video
                    className="absoulute w-full h-full object-top object-cover"
                    src={backgroundVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
            </div>

            <div className="flex-1 main-padding flex flex-wrap justify-between md:justify-center items-center z-10">
                <div>
                    <div className="bg-[#2424247a] p-5 rounded-2xl text-center mb-7">
                        <h1 className="text-4xl font-black mb-4">
                            GAME STATION
                        </h1>
                        <p className="max-w-[400px] w-auto">
                            This isn't a real online game shop. You can't buy
                            any games here. <br></br> <br></br>
                            Enjoy!
                        </p>
                    </div>
                    <div className="flex justify-around bg-[#2424247a] py-1 rounded-2xl text-center">
                        <a
                            className="flex justify-center px-7 py-2 bg-[#00000075] rounded-xl"
                            href="github.com/andmana"
                        >
                            Repo
                        </a>
                        <a
                            className="flex justify-center px-7 py-2 bg-[#00000075] rounded-xl"
                            href="github.com/andmana"
                        >
                            API
                        </a>
                    </div>
                </div>
                <div
                    id="quick-navigation"
                    className="bg-[#2424247a] p-5 rounded-2xl"
                >
                    <h1 className="text-2xl font-bold mb-3.5 ">
                        Quick Navigation
                    </h1>

                    <ul className="self-start flex flex-col gap-2.5 justify-center">
                        <li>
                            <Link
                                className="flex justify-center py-1.5 bg-[#00000075] rounded-xl"
                                to="/shop"
                            >
                                Go to Shop
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="flex justify-center py-1.5 bg-[#00000075] rounded-xl"
                                to="/shop"
                            >
                                Go to Shop
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="flex justify-center py-1.5 bg-[#00000075] rounded-xl"
                                to="/shop"
                            >
                                Go to Shop
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="flex justify-center py-1.5 bg-[#00000075] rounded-xl"
                                to="/shop"
                            >
                                Go to Shop
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="flex justify-center py-1.5 bg-[#00000075] rounded-xl"
                                to="/shop"
                            >
                                Go to Shop
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const Homepage = () => {
    return (
        <div className="flex-1 flex flex-col ">
            <HomepageSection1 />
            <section className="h-screen flex justify-center items-center relative">
                <div>
                    <h2 className="text-4xl absolute top-5 self-center transform -translate-x-1/2">
                        Up coming
                    </h2>
                </div>
                <div className="w-8/12 h-8/12 bg-amber-400 absolute "></div>
                <div className="w-8/12 h-8/12 absolute opacity-70"></div>
            </section>
            <section className="h-screen flex justify-stretch items-stretch relative w-full">
                <div className="flex-1/6">
                    <h2 className="text-4xl transform -rotate-90">Best Sale</h2>
                </div>
                <div className="flex-5/6 flex justify-around">
                    <div>
                        <h3>Adventure</h3>
                        <ol>
                            <li>gwadawdwa</li>
                            <li>gwadawdwa</li>
                            <li>gwadawdwa</li>
                            <li>gwadawdwa</li>
                            <li>gwadawdwa</li>
                        </ol>
                    </div>
                    <div>
                        <h3>RPG</h3>
                        <ol>
                            <li>gwadawdwa</li>
                            <li>gwadawdwa</li>
                            <li>gwadawdwa</li>
                            <li>gwadawdwa</li>
                            <li>gwadawdwa</li>
                        </ol>
                    </div>
                    <div>
                        <h3>Action</h3>
                        <ol>
                            <li>gwadawdwa</li>
                            <li>gwadawdwa</li>
                            <li>gwadawdwa</li>
                            <li>gwadawdwa</li>
                            <li>gwadawdwa</li>
                        </ol>
                    </div>
                    <div>
                        <h3>Sport</h3>
                        <ol>
                            <li>gwadawdwa</li>
                            <li>gwadawdwa</li>
                            <li>gwadawdwa</li>
                            <li>gwadawdwa</li>
                            <li>gwadawdwa</li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homepage;
