const request = require('supertest');
const app = require('../server'); // Import the app

jest.mock('../modules/member/services/member.service');

const MemberService = require('../modules/member/services/member.service');

describe('Members API', () => {
  
  beforeEach(() => {
    MemberService.mockClear();
  });

  it('should return a list of all members', async () => {
    const mockMembers = [
      { id: 1, code: 'M001', name: 'Angga', penalty_end_date: null },
      { id: 2, code: 'M002', name: 'Ferry', penalty_end_date: null }
    ];

    const memberService = new MemberService();

    memberService.getAllMembers.mockResolvedValue({
      status: 200,
      message: 'success',
      data: mockMembers
    });

    const res = await request(app).get('/api/v1/member').send();
    console.trace('res', res);

    expect(res.status).toEqual(200);
    expect(res.data).toEqual(mockMembers);
    expect(memberService.getAllMembers).toHaveBeenCalledTimes(1);
  });

  // it('should handle errors when retrieving members', async () => {
  //   const memberService = new MemberService();

  //   memberService.getAllMembers.mockRejectedValue(new Error('Database error'));

  //   const res = await request(app).get('/api/v1/member').send();

  //   expect(res.statusCode).toEqual(500);
  //   expect(res.body.error).toBe('Failed to retrieve members');
  //   expect(memberService.getAllMembers).toHaveBeenCalledTimes(1);
  // });

});
