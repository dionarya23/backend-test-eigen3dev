const MemberService = require('../services/member.service');

class MemberController {
  constructor() {
    this.memberService = new MemberService();
    this.getAllMembers = this.getAllMembers.bind(this); 
  }

  async getAllMembers(req, res) {
    const result = await this.memberService.getAllMembers();
    return res.status(result.status).json(result)
  }
}

module.exports = MemberController;