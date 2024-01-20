// app.ts
import express from 'express';
import bodyParser from 'body-parser';
import { getNumbers } from './controllers/apiController';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/getNumbers', getNumbers);

export default app;
