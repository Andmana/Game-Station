import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div className="flex-1 flex flex-col ">
            <section className="h-screen flex items-center justify-around w-full">
                <div>
                    <h1>Game Station</h1>
                    <p>
                        This isn't a real online game shop. You can't buy any
                        games here. Enjoy!
                    </p>
                    <div>
                        <a href="github.com/andmana">Repo</a>
                        <a href="github.com/andmana">API</a>
                    </div>
                </div>
                <div id="quick-navigation">
                    <ul>
                        <li>
                            <Link to="/shop">Go to Shop</Link>
                        </li>
                        <li>
                            <Link to="/shop">Go to Shop</Link>
                        </li>
                        <li>
                            <Link to="/shop">Go to Shop</Link>
                        </li>
                        <li>
                            <Link to="/shop">Go to Shop</Link>
                        </li>
                        <li>
                            <Link to="/shop">Go to Shop</Link>
                        </li>
                    </ul>
                </div>
            </section>
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
