const MemberService = require('../services/member.service');

class MemberController {
  constructor() {
    this.memberService = new MemberService();
    this.getAllMembers = this.getAllMembers.bind(this); 
  }

  async getAllMembers(req, res) {
    const response = await this.memberService.getAllMembers();
    return res.status(200).json(response)
  }
}

module.exports = MemberController;