import express from 'express';
const app = express();
import router from './routes/route.js';
import cors from 'cors';
import dbConnection from './database/db.js';
import upload from './utilies/upload.js';

const host = '127.0.0.1';
const port = 8000;

app.use(cors());

app.use('/',upload.single('file'), router);

app.get('/', (req, res)=>{
    res.send('hllo');
});

dbConnection();
app.listen(port, ()=>{
    console.log(`server running at http://${host}:${port}`)
});
