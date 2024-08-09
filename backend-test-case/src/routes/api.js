const memberRoute = require('../modules/member/routes/index');
const bookRoute = require('../modules/book/routes/index');

module.exports = (app) => {
  memberRoute(app)
  bookRoute(app)
};