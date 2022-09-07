import express from 'express';
import db from './src/config/db.js';
import { getTask } from './src/controllers/task.controllers.js';

const app = express();

app.get('/api/users', (req, res) => res.json([{
    name: 'Edwin'
}]));

app.get('/', getTask);

app.listen(process.env.PORT || 3000);
console.log('server up');

//data base connection
db.connect()
.then(() => {
    console.log('se conecto la data base');
}).catch((err) => {
    console.log('error', err);
});