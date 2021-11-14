// Задача: Реализовать метод insert для всех объектов (в прототипе).
// Пример использования:

// container.insert(«beforestart», h1, «Hello»); //вставит h1 в container
// obj.insert(«beforestart», h1, «Hello»); //выдаст ошибку в консоль

// Метод должен:
//  1. должен быть описан в прототипе Object
//  2. проверять является ли объект, на котором вызывается метод - элементом DOM
//  3. метод принимает 3 аргумента: куда вставлять, какой элемент и что вставить внутрь

// Можно использовать методы before, after (и тд) innerText, createElement

// Нельзя использовать insertAdjacent и Google


let obj={};
let container = document.getElementById("container");

Object.prototype.insert = function (howToInsert, tagName, text) {
if(this.nodeType == 1){
newElement = document.createElement(tagName);
newElement.innerHTML = text;


this[howToInsert](newElement);
}
else{
console.log("это не DOM-элемент")
}
}
container.insert("append", "h1", "Hello");
