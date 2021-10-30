// Задача: написать функцию для копирования объекта

let person = {
  sizes: {
    height: 182,
    width: 50
  },
  name: "Vasya",
  age: 33
};

function getCloneDeep(obj) {
  let cloneObj = {};
  for (let key in obj) {
    if (typeof obj[key] !== "object" && obj[key] !== null) {
      cloneObj[key] = obj[key];
    } else {
      cloneObj[key] = getCloneDeep(obj[key]);
    }
  }
  return cloneObj;
}


let result = getCloneDeep(person)

console.log(result);
result.sizes.width = 456;

console.log(person);
