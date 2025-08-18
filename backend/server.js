import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8888;

// Example schema
const TestSchema = new mongoose.Schema({ name: String });
const Test = mongoose.model('Test', TestSchema);

app.get('/', (req, res) => res.send('Server is running!'));

app.get('/test', async (req, res) => {
  const data = await Test.find();
  res.json(data);
});

app.listen(PORT, () => console.log(`Express running → On PORT : ${PORT}`));
