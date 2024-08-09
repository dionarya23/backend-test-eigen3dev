const BookModel = require('../models/book.model');
const MemberModel = require('../models/member.model');
const DBHelper = require('../../common/helpers/db.common.helper');

class BookService {
  constructor() {
    this.bookModel = new BookModel();
    this.memberModel = new MemberModel();
  }

  async getAllBooks() {
    const result = await this.bookModel.getAllBooks();
    DBHelper.throwResultErrorCode(result);

    return {
      status: 200,
      message: 'success',
      data: result.rows
    };
  }
  
  async borrowBook({
    memberId,
    bookId
  }) {
    const memberResult = await this.memberModel.getMemberById(memberId);
    const bookResult = await this.bookModel.getBookById(bookId);

    const borrowedBooksResult = await this.bookModel.getBorrowedBookByMemberId(memberId);
    DBHelper.checkEmpty(memberResult)
    DBHelper.checkEmpty(bookResult)
    DBHelper.throwResultErrorCode(borrowedBooksResult)

    const member = memberResult.rows[0];
    const book = bookResult.rows[0];
    const borrowedBooksCount = parseInt(borrowedBooksResult.rows[0].count, 10);
    if (member.penalty_end_date && new Date(member.penalty_end_date) > new Date()) {
      return {
        status: 403,
        message: 'Member is currently penalized'
      }
    }

    if (borrowedBooksCount >= 2) {
        return {
          status: 403,
          message:  'Member cannot borrow more than 2 books'
        }
    }

    if (book.stock <= 0) {
        return {
          status: 403,
          message: 'Book is out of stock'
        }
    }

    await this.bookModel.createBorrowing({memberId, bookId});
    await this.bookModel.updatedBook(bookId)

    return {
      status: 201,
      message: 'Book borrowed successfully'
    }
  }

  async returnBook({ memberId, bookId }) {
    const resultBorrowed = await this.bookModel.getBorrowedBookByMemberIdAndBookId({memberId, bookId});
    DBHelper.checkEmpty(resultBorrowed);

    const borrowing = borrowingResult.rows[0];
    const borrowDate = new Date(borrowing.borrowed_at);
    const returnDate = new Date();
    const diffDays = Math.ceil((returnDate - borrowDate) / (1000 * 60 * 60 * 24));
    await this.bookModel.borrowingTableName({ returnDate, borrowingId: borrowing.id });
    await this.bookModel.updatedBook(bookId);

    if (diffDays > 7) {
        const penaltyEndDate = new Date(returnDate.getTime() + (3 * 24 * 60 * 60 * 1000));
        await this.memberModel.updatePenalty({
          penaltyEndDate,
          memberId
        })
    }

    return {
      status: 200,
      message: 'Book returned successfully'
    }
  }
}

module.exports = BookService;