import nextConnect from 'next-connect';
const models = require('../../../models/index');

const handler = nextConnect()
  // Get method
  .get(async (req, res) => {
    const {
      query: { nextPage },
      method,
      body,
    } = req;

    const cardRarity = await models.cardRarities.findAndCountAll({
      offset: nextPage ? +nextPage : 0,
    });

    res.statusCode = 200;
    res.json({
      status: 'success',
      data: cardRarity.rows,
      total: cardRarity.count,
      nextPage: +nextPage + 5,
    });
  })

  // Post method
  .post(async (req, res) => {
    const { body } = req;
    const {
      typeName,
    } = body;
    const newCard = await models.cardRarities.create({
      typeName,
      status: 1,
    });
    return res.status(200).json({
      status: 'success',
      message: 'done',
      data: newCard,
    });
  })

export default handler;
