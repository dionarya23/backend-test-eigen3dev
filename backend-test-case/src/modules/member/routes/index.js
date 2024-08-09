const MemberController = require('../controllers/member.controller');

module.exports = (app) => {
  const memberController = new MemberController()

  /**
 * @swagger
 * /member:
 *   get:
 *     description: Get all members
 *     responses:
 *       200:
 *         description: Success
 */
  app.get('/v1/member', memberController.getAllMembers);
};