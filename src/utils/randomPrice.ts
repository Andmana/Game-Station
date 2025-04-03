function generateRandomPrice(): number {
    const randomPrice = Math.random() * (200 - 1) + 1;
    return parseFloat(randomPrice.toFixed(2)); // Convert the result back to a number
}

export default generateRandomPrice;
