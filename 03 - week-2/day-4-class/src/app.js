import express from 'express'
import { routes } from './routes/router.js';

const app = express();

// middleware to handle json format
app.use(express.json())

app.use('/', routes)

app.get("/",(_,res) => {
    res.send("Hello World");
})

app.listen(3000, () => {
    console.log("El servidor esta arriba en el puerto 3000")
});