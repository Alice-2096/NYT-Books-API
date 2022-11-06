import express from 'express';
const app = express();
import home from './routes/home.js';

app.set('view engine', 'pug');
app.get('/', home);

app.listen(3000, () => console.log('server is up and running on port 3000'));
