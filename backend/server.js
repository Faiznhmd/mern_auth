import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middlewares/errorMiddlewares.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//This is allow us to send the data
app.use(cookieParser());
app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.use(errorHandler);

//production codes
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

app.listen(PORT, () => console.log(`Server is started at ${PORT}`));
