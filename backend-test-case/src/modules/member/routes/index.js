const MemberController = require('../controllers/member.controller');

module.exports = (app) => {
  const memberController = new MemberController()

/**
 * @swagger
 * tags:
 *   name: Members
 *   description: API to manage members in the library
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Member:
 *       type: object
 *       required:
 *         - code
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the member
 *         code:
 *           type: string
 *           description: The member code
 *         name:
 *           type: string
 *           description: The name of the member
 *         penalty_end_date:
 *           type: string
 *           format: date
 *           description: The end date of any penalty
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: The date the member was added
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: The date the member was last updated
 */

/**
 * @swagger
 * /members:
 *   get:
 *     summary: Returns a list of all members
 *     tags: [Members]
 *     responses:
 *       200:
 *         description: The list of the members
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Member'
 */

  app.get('/v1/member', memberController.getAllMembers);
};