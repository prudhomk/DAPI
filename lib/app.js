import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import path from 'path';
import cors from 'cors';

const app = express();
const __dirname = path.resolve();

app.use(cors({
  origin: true,
  credentials: true,
}));

app.use(express.json());

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
