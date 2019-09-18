require('dotenv').config({ path: '/.env' });
// console.log(process.env)
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRoute from './modules/user';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// inject an error handling middleware
app.use((e, req, res, next) => {
    return res.status(500).json(
        {
            route: req.originalUrl,
            error: { stack: e.stack }
        }
    );
});

app.use('/api', userRoute);

app.listen(3000, () => {
    console.log('server on port 3000');
});
