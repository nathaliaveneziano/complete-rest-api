import * as express from 'express';
import * as http from 'http';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';

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
const MONGO_URL = `mongodb+srv://${user}:${pass}@cluster0.8u7ji4l.mongodb.net/?retryWrites=true&w=majority`;

// Conexão com MongoDB
mongoose.Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));
