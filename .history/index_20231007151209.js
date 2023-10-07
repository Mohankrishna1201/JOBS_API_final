import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT =5000;
import usersRoutes from './routes/users.js';

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req,res) =>{
    res.send('Hello from home page')
})

 


app.listen(PORT, () => console.log(`server is running on ${PORT}`))