import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import smsRouter from './routes/sms.route';

const app = express();
const port = config.port;

// Используем middleware для разбора JSON
app.use(bodyParser.json());
// Или app.use(express.json());

app.use('/sms', smsRouter);

app.get('/', (req, res) => {
    res.send('SMS microservice is running!');
});

app.listen(port, () => {
    console.log(`SMS microservice running on port ${port}`);
});
