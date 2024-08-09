const MemberService = require('../services/member.service');

class MemberController {
  constructor() {
    this.memberService = new MemberService();
  }

  async getAllMembers(req, res) {
    const response = await this.memberService.getAllMembers();
    return res.status(200).json(response)
  }
}

module.exports = MemberController;