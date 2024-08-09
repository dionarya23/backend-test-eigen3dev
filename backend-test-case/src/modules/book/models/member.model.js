const { TABLE_NAME } = require('../../../definitions/index');
const DBCommonService = require('../../common/services/db.common.service');

class MemberModel {
  constructor() {
    this.tableName = TABLE_NAME.MEMBER;
    this.db = new DBCommonService();
  }

  async getMemberById(memberId) {
    const params = [memberId];
    const query = `
      SELECT * FROM ${this.tableName} WHERE id = $1
    `;

    const result = await this.db.query(query, params);
    return result;
  }

  async updatePenalty({
      penaltyEndDate,
      memberId
  }) {
    const params = [penaltyEndDate, memberId];
    const query = `UPDATE ${this.tableName} SET penalty_end_date = $1 WHERE id = $2`;
    const result = await this.db.query(query, params);
    return result;
  }
}

module.exports = MemberModel;