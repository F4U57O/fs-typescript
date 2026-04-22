import express from 'express';
import { calculateBmi } from './bmiCalculator.ts';
import { calculateExercises } from './exerciseCalculator.ts';
const app = express();
app.use(express.json());

app.get('/ping', (_req, res) => {
  res.send('pong');
});
app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});
app.get('/bmi', (_req, res) => {
  const height = Number(_req.query.height);
  const weight = Number(_req.query.weight);

  if (!height || !weight || isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    return res.status(400).json({error: "malformatted parameters"});
  }
  const bmi = calculateBmi(height, weight);
  
  return res.json({
    weight,
    height,
    bmi
  });
});
app.post('/exercises', (_req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment    
  const { daily_exercises, target } = _req.body;

  if (!daily_exercises || target === undefined) {
    return res.status(400).json({ error: 'parameters missing'});
  }
  
  if (!Array.isArray(daily_exercises) || daily_exercises.some((hours) => isNaN(Number(hours)))) {
    return res.status(400).json({ error: 'malformatted parameters'});
  }
  if (isNaN(Number(target))) {
    return res.status(400).json({ error: 'malformatted parameters'});
  }

  const result = calculateExercises(Number(target), daily_exercises as number[]);
  return res.json(result);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});