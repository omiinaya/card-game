import nextConnect from 'next-connect';
import middleware from '../../../middleware/auth';
const models = require('../../../models/index');

const handler = nextConnect()
  // Middleware
  .use(middleware)
  // Get method
  .get(async (req, res) => {
    const { slug } = req.query;
    const cards = await models.cards.findOne({
      where: {
        slug: slug,
      },
      order: [
        // Will escape title and validate DESC against a list of valid direction parameters
        ['createdAt', 'ASC'],
      ],
    });
    res.statusCode = 200;
    return res.json({ status: 'success', data: cards });
  })
  // Post method
  .post(async (req, res) => {
    const { body } = req;
    const {
      cardName,
      cardRarity,
      cardImage,
      cardDesc,
      cardType,
      cardATK,
      cardDEF
    } = body;
    const newCard = await models.cards.create({
      cardName,
      cardRarity,
      cardImage,
      cardDesc,
      cardType,
      cardATK,
      cardDEF,
      status: 1
    });
    return res.status(200).json({
      status: 'success',
      message: 'done',
      data: newCard,
    });
  })
  // Put method
  .put(async (req, res) => {
    res.end('method - put');
  })
  // Patch method
  .patch(async (req, res) => {
    throw new Error('Throws me around! Error can be caught and handled.');
  });

export default handler;
