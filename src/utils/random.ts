export function getRandomNumber() {
    const min = 1;
    const max = 854222;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
