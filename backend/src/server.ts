import express, { Application, Request, Response, NextFunction } from 'express';
import initialize from './middleware/app';
import dotenv from 'dotenv';

dotenv.config();
const app: Application = express();
const port: number = parseInt(process.env.PORT as string) || 3000;
initialize(app);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});