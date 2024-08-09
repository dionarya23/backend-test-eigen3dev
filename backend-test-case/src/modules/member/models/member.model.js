const { TABLE_NAME } = require('../../../definitions/index');
const DBCommonService = require('../../common/services/db.common.service');

class MemberModel {
  constructor() {
    this.tableName = TABLE_NAME.MEMBER;
    this.borrowingTableName = TABLE_NAME.BORROWING;
    this.db = new DBCommonService();
  }

  async getAllMembers() {
    const query = `
      SELECT 
        m.*, 
        COUNT(b.id) AS borrowed_books_count
        FROM ${this.tableName} m
        LEFT JOIN ${this.borrowingTableName} b ON m.id = b.member_id AND b.returned_at IS NULL
        GROUP BY m.id
    `;

    const result = await this.db.query(query);
    return result;
  }
}

module.exports = MemberModel;