const BookController = require('../controllers/book.controller');

module.exports = (app) => {
  const bookController = new BookController()

  /**
 * @swagger
 * tags:
 *   name: Books
 *   description: API to manage books in the library
 */

  /**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - code
 *         - title
 *         - author
 *         - stock
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the book
 *         code:
 *           type: string
 *           description: The book code
 *         title:
 *           type: string
 *           description: The title of the book
 *         author:
 *           type: string
 *           description: The author of the book
 *         stock:
 *           type: integer
 *           description: The number of copies available
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: The date the book was added
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: The date the book was last updated
 */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Returns a list of all available books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
  app.get('/v1/book', bookController.getAllBooks);

  /**
 * @swagger
 * /books/borrow:
 *   post:
 *     summary: Borrow a book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - member_id
 *               - book_id
 *             properties:
 *               member_id:
 *                 type: integer
 *                 description: The ID of the member
 *               book_id:
 *                 type: integer
 *                 description: The ID of the book
 *     responses:
 *       200:
 *         description: The book was successfully borrowed
 *       403:
 *         description: Forbidden, cannot borrow more books or book is out of stock
 *       404:
 *         description: The specified book or member was not found
 */
  app.get('/v1/book/borrow', bookController.borrowBook);

/**
 * @swagger
 * /books/return:
 *   post:
 *     summary: Return a book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - member_id
 *               - book_id
 *             properties:
 *               member_id:
 *                 type: integer
 *                 description: The ID of the member
 *               book_id:
 *                 type: integer
 *                 description: The ID of the book
 *     responses:
 *       200:
 *         description: The book was successfully returned
 *       404:
 *         description: The specified book or member was not found
 */

  app.get('/v1/book/return', bookController.returnBook);
};