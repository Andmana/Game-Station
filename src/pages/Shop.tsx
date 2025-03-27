import { Link } from "react-router-dom";

const dummy = [
    { id: 0, name: "bag" },
    { id: 1, name: "shirt" },
    { id: 2, name: "shoe" },
];
const Shop = () => {
    return (
        <div className="container flex flex-col">
            <div>
                <Link to="/">Back</Link>
                <h1>HAHAHAHAH</h1>
            </div>
            <ul>
                {dummy.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Shop;
