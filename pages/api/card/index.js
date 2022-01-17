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
      cardDEF,
      cardMonster,
      typeImage
    } = body;
    const newCard = await models.cards.create({
      cardName,
      cardRarity,
      cardImage,
      cardDesc,
      cardType,
      cardATK,
      cardDEF,
      cardMonster,
      typeImage,
      status: 1,
    });
    return res.status(200).json({
      status: 'success',
      message: 'done',
      data: newCard,
    });
  })

export default handler;
