import nextConnect from 'next-connect';
import middleware from '../../../middleware/auth';
const models = require('../../../models/index');

const handler = nextConnect()
  // Get method
  .get(async (req, res) => {
    const {
      query: { nextPage },
      method,
      body,
    } = req;

    const cards = await models.cards.findAndCountAll({
      offset: nextPage ? +nextPage : 0,
      limit: 5,
    });

    res.statusCode = 200;
    res.json({
      status: 'success',
      data: cards.rows,
      total: cards.count,
      nextPage: +nextPage + 5,
    });
  });

export default handler;
