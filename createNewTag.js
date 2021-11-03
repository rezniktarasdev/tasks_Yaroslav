// Задача
// Создать функцию конструктор для создания тэгов
// Функция конструктор принимает два аргумента: имя тега и тип
// (двойной/double тэг или одинарный/single).
// В прототип функции конструктора вынести метод display, который
// принимает контент и вернет разметку
// с контентом обернутый в тэг.
// можете усложнить добавлением атрибутов


function CreateNewTag(tag, typeTag, attrName, attrProp) {
  this.tag = tag;
  this.typeTag = typeTag;
  this.attrName = attrName;
  this.attrProp = attrProp;
}

CreateNewTag.prototype.display = function (content) {
  if (this.typeTag === "double") {
    return `< ${this.tag} ${this.attrName}="${this.attrProp}"> ${content} < /${this.tag}>`;
  }
  if (this.typeTag === "single") {
    return `< ${this.tag} value ="${content}" ${this.attrName}="${this.attrProp}">`;
  }
};

let h1Elem = new CreateNewTag("h1", "double", "class", "title");
document.write(h1Elem.display("Hello"));

console.log(h1Elem);
