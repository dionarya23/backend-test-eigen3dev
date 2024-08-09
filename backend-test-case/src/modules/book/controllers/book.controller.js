const BookService = require('../services/book.service');

class BookController {
  constructor() {
    this.bookService = new BookService();
    this.getAllBooks = this.getAllBooks.bind(this); 
    this.borrowBook = this.borrowBook.bind(this);
    this.returnBook = this.returnBook.bind(this);
  }

 async getAllBooks(req, res) {
  const result = await this.bookService.getAllBooks()
  res.status(result.status).json(result);
 }
 
 async borrowBook(req, res) {
  const { member_id, book_id } = req.body;
  const result = await this.bookService.borrowBook({ memberId: member_id, bookId: book_id });
  res.status(result.status).json(result);
 }
 
 async returnBook(req, res) {
  const { member_id, book_id } = req.body
  const result = await this.bookService.returnBook({
    memberId: member_id,
    bookId: book_id
  });
  res.status(result.status).json(result);
 }
}

module.exports = BookController;