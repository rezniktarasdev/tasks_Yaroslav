// Задача
// Создать функцию конструктор для создания тэгов
// Функция конструктор принимает два аргумента: имя тега и тип
// (двойной/double тэг или одинарный/single).
// В прототип функции конструктора вынести метод display, который
// принимает контент и вернет разметку
// с контентом обернутый в тэг.
// можете усложнить добавлением атрибутов


function CreateNewTag(tag, typeTag) {
  this.tag = tag;
  this.typeTag = typeTag;
  this.display = function (content) {
    if (typeTag === "double") {
      return `< ${this.tag}>${content} < /${this.tag}>`;
    }
    if (typeTag === "single") {
      return `< ${this.tag} value ="${content}">`;
    }
  };
}

let h1Elem = new CreateNewTag("h1", "single");
document.write(h1Elem.display("Hello"));
