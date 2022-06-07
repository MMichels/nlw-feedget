import express from 'express'
import cors from 'cors';
import { routes } from './routes';

const app = express();
app.use(cors())
app.use(express.json());
app.use(routes);

const apiPort = Number(process.env.PORT) || 3333


app.listen(apiPort, '0.0.0.0', () => {
    console.log("HTTP server running on: %d", apiPort)
})