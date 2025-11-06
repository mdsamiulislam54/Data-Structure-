
const course1 = {name: "course1"}
const course2 = {name: "course2"}

const map = new Map();

map.set(course1, {courseId:1});
map.set(course2, {courseId: 2})


console.log([...map.values()]);


const arr = Array.from({length:5});

console.log(arr);