const dummy = [
    { id: 0, name: "bag" },
    { id: 1, name: "shirt" },
    { id: 2, name: "shoe" },
];
const Shop = () => {
    return (
        <div>
            <ul>
                {dummy.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Shop;
