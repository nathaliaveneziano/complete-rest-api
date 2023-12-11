import * as express from 'express';
import * as http from 'http';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import * as cors from 'cors';
import * as dotenv from 'dotenv';

// Criando app e prepanado para uso
const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

// Criando servidor
server.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});

// Configuração do ENV
dotenv.config();
const user = process.env.USERNAME;
const pass = process.env.PASSWORD;
