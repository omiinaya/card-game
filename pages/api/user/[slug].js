import nextConnect from 'next-connect';
const models = require('../../../models/index');

const handler = nextConnect()
  .get(async (req, res) => {
    const {
      query: { id, name },
    } = req;
    const { slug } = req.query;
    const userId = slug;
    const user = await models.users.findOne({
      where: {
        id: userId,
      }
    });
    res.statusCode = 200;
    return res.json({ status: 'success', data: user });
  })
  .post(async (req, res) => {})
  .put(async (req, res) => {})
  .patch(async (req, res) => {});

export default handler;
