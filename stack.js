// stateless & stateful

// function is stateless 
// object is stateful 

// let counts = 0;
// const counter = (count) => {

//     return counts += count
// }

// const counter = ()=>{
//     let counts = 0;
//     const counters = (count)=>{
//         return counts+=count
//     }

//     return counters
// }

// object stack
// const counter = {
//     count: 0,
//     push(count) {
//         return this.count +=count
//     }
// }

// const counter = {
//     count: [],

//     push(num) {
//         this.count.push(num)

//     },

//     pop() {
//         if (this.isEmpty()) {
//             console.log("Stack is empty! Cannot pop.");
//             return undefined;
//         }
//         this.count.pop()
//     },

//     peek() {
//         return this.count[this.count.length -1]
//     },

//     isEmpty() {
//         this.count.length === 0;
//     }
// }

// use class
class Counter {
    constructor(){
        this.count=[]
    }

    push(value){
        this.count.push(value)
    }
    pop(){
        if(this.count.length === 0){
            return undefined
        }
       return this.count.pop()
    }
    peek(){
       return this.count[this.count.length -1];
    }
}

const counter1 = new Counter();
const counter2 = new Counter()
counter1.push(2)
counter1.push(3)
counter1.push(4)
counter1.push(40)
console.log(counter1.peek())
console.log(counter1.pop())

console.log(counter1.peek())

counter2.push(20)
counter2.push(30)
counter2.push(40)
counter2.push(400)

console.log(counter2.peek())
console.log(counter2.pop())

console.log(counter2.peek())