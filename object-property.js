const students = [
   {id: 21, name:'omar sunny'},
   {id: 31, name: 'Manna'},
   {id: 21, name: 'Omar Sunny'},
   {id: 41, name: 'Moyuri'},
   {id: 71, name: 'Deepjol'},
];

// let arrayInput = [];

// for(let i = 0; i<students.length; i++){
//     let element = students[i].name;
//     arrayInput.push(element);
// }
// console.log(arrayInput);


const studentName =students.map(s => s.name);

const ids =students.map(s => s.id);

const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);
console.log(studentName);
console.log(ids);
console.log(bigger);
console.log(biggerOne);