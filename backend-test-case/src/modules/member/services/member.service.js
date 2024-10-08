const MemberModel = require('../models/member.model');
const DBHelper = require('../../common/helpers/db.common.helper');

class MemberService {
  constructor() {
    this.memberModel = new MemberModel();
  }

  async getAllMembers() {
    const result = await this.memberModel.getAllMembers();
    DBHelper.throwResultErrorCode(result);

    return {
      status: 200,
      message: 'success',
      data: result.rows
    };
  }
}

module.exports = MemberService;