import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import Router from './routes.js';
import cors from 'cors';

const app = express();
const port = 4000;
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect('mongodb+srv://divyyanshupandey:Vx6Ibd0UUIZoa5uL@cluster0.qdt5iwu.mongodb.net/PartnersAPI?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => app.listen(port))
  .then(() => console.log('Connected to the database and server is running'))
  .catch((err) => console.log(err));

app.use('/api/partners', Router);