import models from '../../models/index';
import nextConnect from 'next-connect';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const KEY = process.env.JWT_KEY;

const handler = nextConnect()
  .get((req, res) => { })
  .post(async (req, res) => {
    /* Get Post Data */
    const { username, password } = req.body;
    /* Any how email or password is blank */
    if (!username || !password) {
      return res.status(400).json({
        status: 'error',
        error: 'Request missing username or password',
      });
    }
    /* Check user in database */
    let user = await models.users.findOne({
      where: { username: username },
      attributes: ['id', 'email', 'username', 'password'],
      limit: 1,
    });

    console.log(user)
    /* Check if exists */
    if (!user) {
      return res.status(400).json({
        status: 'error',
        error: 'User Not Found'
      });
    }
    /* Define variables */
    const dataUser = user.toJSON();
    const userId = dataUser.id,
      userName = dataUser.username,
      userPassword = dataUser.password;
    /* Check and compare password */
    bcrypt.compare(password, userPassword).then(isMatch => {
      console.log(password)
      console.log(userPassword)
      if (isMatch) {
        /* User matched */
        /* Create JWT Payload */
        const payload = {
          id: userId,
          username: userName,
        };
        /* Sign token */
        jwt.sign(
          payload,
          KEY,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.status(200).json({
              success: true,
              token: 'Bearer ' + token,
            });
          },
        );
      } else {
        res.status(400).json({
          status: 'error',
          error: 'Password incorrect'
        });
      }
    });
  });
export default handler;
