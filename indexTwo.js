

class Book {
  constructor(title) {
    this.title = title

  }
}

class Author {
  constructor(name) {
    this.name = name
    this.books = []
  }

  addBook(book) {
    book.author = this
    this.books.push(book)
  }
}

const book1 = new Book("The Lighting Thief")

const author1 = new Author("Rick")
author1.addBook(book1)
console.log(book1.author)
// console.log(author1.books)
