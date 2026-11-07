import express, { Request, Response } from 'express';
import cors from 'cors';
import apiRoutes from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/v1/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'ControlLabs API operando correctamente',
    timestamp: new Date().toISOString()
  });
});

app.use('/api/v1', apiRoutes);

export default app;
