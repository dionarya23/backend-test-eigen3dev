const BookController = require('../controllers/book.controller');

module.exports = (app) => {
  const bookController = new BookController()

  /**
 * @swagger
 * /book:
 *   get:
 *     description: Get all available books
 *     responses:
 *       200:
 *         description: Success
 * 
 * /book/borrow:
 *   post:
 *     description: Borrow a book
 *     parameters:
 *       - in: body
 *         name: borrow
 *         description: Borrow book
 *         schema:
 *           type: object
 *           required:
 *             - memberId
 *             - bookId
 *           properties:
 *             memberId:
 *               type: string
 *             bookId:
 *               type: string
 *     responses:
 *       200:
 *         description: Success
 * 
 * /book/return:
 *   post:
 *     description: Return a book
 *     parameters:
 *       - in: body
 *         name: return
 *         description: Return book
 *         schema:
 *           type: object
 *           required:
 *             - memberId
 *             - bookId
 *           properties:
 *             memberId:
 *               type: string
 *             bookId:
 *               type: string
 *     responses:
 *       200:
 *         description: Success
 */
  app.get('/v1/book', bookController.getAllBooks);
  app.get('/v1/book/borrow', bookController.borrowBook);
  app.get('/v1/book.return', bookController.returnBook);
};