// const request = require('supertest');
// const app = require('../server'); // Import the app

// jest.mock('../modules/book/services/book.service');

// const BookService = require('../modules/book/services/book.service');

// describe('Books API', () => {
  
//   beforeEach(() => {
//     BookService.mockClear();
//   });

//   it('should return a list of all available books', async () => {
//     const mockBooks = [
//       { id: 1, title: 'Harry Potter', author: 'J.K. Rowling', stock: 1 },
//       { id: 2, title: 'A Study in Scarlet', author: 'Arthur Conan Doyle', stock: 1 }
//     ];

//     BookService.prototype.getAllBooks.mockResolvedValue(mockBooks);

//     const res = await request(app).get('/api/v1/book').send();

//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toEqual(mockBooks);
//     expect(BookService.prototype.getAllBooks).toHaveBeenCalledTimes(1);
//   });

//   it('should borrow a book', async () => {
//     const mockResponse = { message: 'Book borrowed successfully' };

//     BookService.prototype.createBorrowing.mockResolvedValue(mockResponse);

//     const res = await request(app)
//       .post('/api/v1/book/borrow')
//       .send({
//         memberId: 1,
//         bookId: 1
//       });

//     expect(res.statusCode).toEqual(200);
//     expect(res.body.message).toBe('Book borrowed successfully');
//     expect(BookService.prototype.createBorrowing).toHaveBeenCalledWith({ memberId: 1, bookId: 1 });
//   });

//   it('should return a book', async () => {
//     const mockResponse = { message: 'Book returned successfully' };

//     BookService.prototype.updateBorrowingBook.mockResolvedValue(mockResponse);

//     const res = await request(app)
//       .post('/api/v1/book/return')
//       .send({
//         memberId: 1,
//         bookId: 1
//       });

//     expect(res.statusCode).toEqual(200);
//     expect(res.body.message).toBe('Book returned successfully');
//     expect(BookService.prototype.updateBorrowingBook).toHaveBeenCalledWith({
//       returnDate: expect.any(String),
//       borrowingId: expect.any(Number),
//     });
//   });
// });
