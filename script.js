//1
class Book {
  constructor(
    id,
    author,
    title,
    year,
    pages,
    numberShelf = null,
    userId = null
  ) {
    (this.id = id),
      (this.author = author),
      (this.title = title),
      (this.year = year),
      (this.pages = pages),
      (this.numberShelf = numberShelf),
      (this.userId = userId);
  }
  isVacant() {
    return Number.isInteger(this.numberShelf) && this.userId === null;
  }
  getRent(userId) {
    if (this.isVacant()) {
      this.numberShelf = null;
      this.userId = userId;
      return `Користувач з ID ${this.userId} бере книгу "${this.title}"`;
    } else
      return `Книга "${this.title}" видана користувачу з ID ${this.userId}.`;
  }
}

class User {
  constructor(id, firstName, lastName, address) {
    (this.id = id),
      (this.firstName = firstName),
      (this.lastName = lastName),
      (this.address = address);
  }
}
const book1 = new Book(1, "Тарас Шевченко", "Кобзар", 1840, 432, 7);
const book2 = new Book(2, "Іван Франко", "Захар Беркут", 1883, 350, 4);
const book3 = new Book(3, "Леся Українка", "Лісова пісня", 1911, 210, 5);

const user1 = new User(32, "Іван", "Петренко", "Київ, вул. Лесі Українки, 15");
const user2 = new User(45, "Оксана", "Коваленко", "Львів, вул. Шевченка, 10");

console.log(book1.isVacant());
console.log(book1.getRent(user1.id));

console.log(book1.isVacant());
console.log(book1.getRent(user2.id));

console.log(book2.isVacant());
console.log(book2.getRent(user2.id));

console.log(book3.isVacant());
console.log(book3.getRent(user1.id));

//2
class Animal {
  hunting() {
    console.log("Зараз дожену здобич!");
  }
  growl() {
    console.log("Грррррррр!");
  }
}
class Tiger extends Animal {
  hunting() {
    console.log("Тигр з'їсть тебе!");
  }
}
class Wolf extends Animal {}

const tiger = new Tiger();
const wolf = new Wolf();

tiger.hunting();
tiger.growl();

wolf.hunting();
wolf.growl();
