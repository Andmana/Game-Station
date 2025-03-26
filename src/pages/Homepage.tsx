import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div className="flex-1 flex items-center justify-center">
            <Link to="/shop">Go to Shop</Link>
        </div>
    );
};

export default Homepage;
