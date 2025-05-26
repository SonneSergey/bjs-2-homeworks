// Класс печатного издания 
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100; // состояние книги по умолчанию 100
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}

// Подклассы для типов книг
class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

// Класс библиотеки
class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		return this.books.find(book => book[type] === value) || null;
	}

	giveBookByName(bookName) {
		const index = this.books.findIndex(book => book.name === bookName);
		if (index !== -1) {
			return this.books.splice(index, 1)[0];
		}
		return null;
	}
}

// Используем свои книги
let myLibrary = new Library("Домашняя библиотека");

let book1 = new NovelBook("Эрих Мария Ремарк", "Три товарища", 1936, 480);
myLibrary.addBook(book1);

let book2 = new NovelBook("Оскар Уайльд", "Портрет Дориана Грея", 1890, 352);
myLibrary.addBook(book2);

let book3 = new NovelBook("Фёдор Достоевский", "Преступление и наказание", 1866, 671);
myLibrary.addBook(book3);

console.log(myLibrary.findBookBy("releaseDate", 1936));

const myBook = myLibrary.giveBookByName("Три товарища");
console.log(myBook);

myBook.state = 10;
console.log(myBook.state);

myBook.fix();
console.log(myBook.state);

myLibrary.addBook(myBook);

myBook.fix(); // 22.5
myBook.fix(); // 33.75

myLibrary.addBook(myBook);

console.log(myLibrary.books);