const getRandomNumber = () => Math.floor(Math.random() * 11);
const getRandomColor = () => `hsl(${Math.random() * 360}, 85%, 75%)`;

export {
    getRandomNumber,
    getRandomColor
}
