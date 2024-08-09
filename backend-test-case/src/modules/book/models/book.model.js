const { TABLE_NAME } = require('../../../definitions/index');
const DBCommonService = require('../../common/services/db.common.service');

class BookModel {
  constructor() {
    this.tableName = TABLE_NAME.BOOK;
    this.borrowingTableName = TABLE_NAME.BORROWING;
    this.db = new DBCommonService();
  }

  async getAllBooks() {
    const query = `
      SELECT * FROM ${this.tableName} 
      WHERE id NOT IN (SELECT book_id FROM ${this.borrowingTableName} WHERE returned_at IS NULL)
    `;
    const result = this.db.queryWithThrows(query);
    return result;
  }

  async getBookById(bookId) {
    const params = [bookId];
    const query = `
      SELECT * FROM ${this.tableName} WHERE id = $1
    `;

    const result = this.db.queryWithThrows(query, params);
    return result;
  }

  async getBorrowedBookByMemberId(memberId) {
    const params = [memberId];
    const query = `
      SELECT COUNT(*) FROM ${this.borrowingTableName} WHERE member_id = $1 AND returned_at IS NULL
    `;
    const result = this.db.queryWithThrows(query, params);
    return result;
  }

  async getBorrowedBookByMemberIdAndBookId({memberId, bookId}) {
    const params = [memberId, bookId];
    const query = `
      SELECT * FROM  ${this.borrowingTableName} WHERE member_id = $1 AND book_id = $2 AND returned_at IS NULL
    `;
    const result = this.db.queryWithThrows(query, params);
    return result;
  }

  async createBorrowing({
    memberId,
    bookId
  }) {
    const params = [memberId, bookId];
    const query = `
      INSERT INTO ${this.borrowingTableName} (member_id, book_id) VALUES ($1, $2)
    `;

    const result = this.db.queryWithThrows(query, params);
    return result;
  }

  async updatedBook(bookId) {
    const params = [bookId];
    const query = `
      UPDATE  ${this.tableName} SET stock = stock - 1 WHERE id = $1
    `;

    const result = this.db.queryWithThrows(query, params);
    return result;
  }

  async updateBorrowingBook({
    returnDate,
    borrowingId
  }) {
    const params = [returnDate, borrowingId];
    const query = `
      UPDATE ${this.borrowingTableName} SET returned_at = $1 WHERE id = $2'
    `;

    const result = this.db.queryWithThrows(query, params);
    return result;
  }
}

module.exports = BookModel;