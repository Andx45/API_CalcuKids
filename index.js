import express from 'express'
import userRoutes from './routes/userRoutes.js'
import historyRoutes from './routes/historyRoutes.js'

const app = express();
app.use(express.json());

const port = 3000;

app.get('/', (req, res) =>{
    res.send("Hello world")
});

app.use('/api', userRoutes)
app.use('/api', historyRoutes)

app.listen(port, () =>{
    console.log(`app listening on port ${port}`);
});