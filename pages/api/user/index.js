import nextConnect from 'next-connect';
const models = require('../../../models/index');
import middleware from '../../../middleware/auth';

const handler = nextConnect()
  // Middleware
  .use(middleware)
  // Get method
  .get(async (req, res) => {
    const {
      query: { nextPage },
      method,
      body,
    } = req;

    const users = await models.users.findAndCountAll();

    res.statusCode = 200;
    res.json({
      status: 'success',
      data: users.rows,
      total: users.count,
    });
  })
  // Post method
  .post(async (req, res) => {
    const { body } = req;

    const { username, email, password } = body;

    const newUser = await models.users.create({
      username,
      email,
      password,
      status: 1,
    });
    return res.status(200).json({
      status: 'success',
      message: 'done',
      data: newUser,
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
