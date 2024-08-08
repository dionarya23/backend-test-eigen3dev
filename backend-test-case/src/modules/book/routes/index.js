const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

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
router.get('/book/', bookController.getAllBooks);
router.post('/book/borrow', bookController.borrowBook);
router.post('/book/return', bookController.returnBook);

module.exports = router;
