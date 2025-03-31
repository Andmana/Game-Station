function generateRandomPrice(): string {
    const randomPrice = (Math.random() * (200 - 1) + 1).toFixed(2);
    return `$${randomPrice}`;
}

export default generateRandomPrice;
