// const players = [
//     { name: "Jamal Bhuyan", score: 88 },
//     { name: "Shekh Morsalin", score: 81 },
//     { name: "Rakib Hossain", score: 95 },
//     { name: "Topu Barman", score: 91 },
//     { name: "Sohel Rana", score: 72 },
// ];

// const lowersScorer = players.reduce((lowPlayer, currentPlayer) => {
//     console.log(lowPlayer, currentPlayer);
//     if(lowPlayer.score <currentPlayer.score){
//         return lowPlayer;
//     }
//     return currentPlayer;
// },players[0]);

// console.log("Lowest Scorer:", lowersScorer);
const cart = [
  { name: "Laptop", price: 75000, quantity: 1 },
  { name: "Mouse", price: 1000, quantity: 2 },
  { name: "Keyboard", price: 2500, quantity: 1 },
  { name: "Monitor", price: 12000, quantity: 2 }
];

const totalPrice = cart.reduce((subTotal, product)=>{
    return subTotal + product.price * product.quantity;
},0)

console.log(totalPrice)