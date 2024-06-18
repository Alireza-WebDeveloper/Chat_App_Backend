import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import hpp from 'hpp';
import bodyParser from 'body-parser';
import ErrorHandler from './Middlewares/ErrorHandler/index.js';

dotenv.config({ path: './config.env' });

const app = express();

// !! Middlewares Globals
app.use(cookieParser());
app.use(express.static(`${process.cwd()}/public`));
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true, trim: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// !! Middleware Routes
app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'completed',
  });
});

app.use(ErrorHandler);

// Helmet Security HTTP headers, Data Sanitization against NoSQL query injection, Data sanitization against XSS
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
// app.use(helmet()); این خط کد فعال شه باعث که apollo server بالا نیاد

export default app;
