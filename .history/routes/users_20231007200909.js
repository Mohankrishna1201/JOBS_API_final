import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();


const users =[
{
    firstName :"Mohan",
    lastName :"Kattamuri",
    age :19
},

{
    firstName :"siva",
    lastName :"Kattamuri",
    age :22
},


    

]



// all routes are here starting with /users
router.get('/', (req,res) =>{
    res.send(users);
});

router.post('/',(req,res) =>{

    const newUser = req.body;

    
    users.push( {...newUser, id:uuidv4() });
   res.send(`a new user added and his name is ${newUser.firstName}`)

})

export default router;


