
const cartItems = [
    { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
    { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
    { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
];

const subTotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity
}, 0)
console.log("Subtotal:", subTotal); // Output: Subtotal: 2550

const players = [
    { name: "Jamal Bhuyan", score: 88 },
    { name: "Shekh Morsalin", score: 81 },
    { name: "Rakib Hossain", score: 95 },
    { name: "Topu Barman", score: 91 },
    { name: "Sohel Rana", score: 72 },
];

const highestScorer = players.reduce((topPlayer, currentPlayer) => {
    if (topPlayer.score > currentPlayer.score) {
        return topPlayer;
    }
    return currentPlayer;
}, players[0]);

console.log("Highest Scorer:", highestScorer); 
