const array = [
    {
        "name": "rob",
        "age": 29,
        "eyes": "blue",
    },
    {
        "name": "mayra",
        "age": 28,
        "eyes": "brown",
    }
];

// console.log(array[0].name)

// function displayNames(arrayNum){
//     let name = [arrayNum].name;
//     console.log(name);
// }

// array.forEach(displayNames(0))


const names = array.map(item => item.name)
console.log(names)