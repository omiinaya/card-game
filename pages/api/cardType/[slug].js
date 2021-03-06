import nextConnect from 'next-connect';
import middleware from '../../../middleware/auth';
const models = require('../../../models/index');

const handler = nextConnect()
  // Middleware
  .use(middleware)
  // Get method
  .get(async (req, res) => {
    const cardTypes = await models.cardTypes.findOne();
    res.statusCode = 200;
    return res.json({ status: 'success', data: cardTypes });
  })
  // Post method
  .post(async (req, res) => {
    const { body } = req;
    const {
      typeName,
    } = body;
    const newCardType = await models.cardTypes.create({
      typeName,
      status: 1
    });
    return res.status(200).json({
      status: 'success',
      message: 'done',
      data: newCardType,
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
