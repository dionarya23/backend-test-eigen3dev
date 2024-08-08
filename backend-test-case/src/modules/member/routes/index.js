const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');

/**
 * @swagger
 * /member:
 *   get:
 *     description: Get all members
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/member', memberController.getAllMembers);

module.exports = router;