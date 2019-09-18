import express from 'express';
import { UserController } from './user.controller';
import jwt from 'jsonwebtoken';



const router = express.Router();

router.get('/', UserController.getAll);
router.post('/login', (req, res) => {
    const token = jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60 * 60), foo: 'bar' }, 'secretkey');
    res.send(token);
});

router.get('/us', (req, res) => {
    // console.log(req.headers.authorization)
    const token = req.headers.authorization.split(' ');
    // console.log(token[1])
    res.send(jwt.verify(token[1], 'secretkey'));
});

export default router;
