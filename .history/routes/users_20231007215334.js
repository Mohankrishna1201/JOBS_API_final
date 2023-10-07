import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();


let users =[
    
]



// all routes are here starting with /users
router.get('/', (req,res) =>{
    res.send(users);
});
// adding user
router.post('/',(req,res) =>{

    const newUser = req.body;

    
    users.push( {...newUser, id:uuidv4() });
   res.send(`a new user added to database and his name is ${newUser.firstName}`)

})
//accesing user by id
// to get id asked in url use params
// to find user

router.get('/:id', (req,res) =>{

    const { id } = req.params;

   const foundUser =  users.find((newUser) => newUser.id ===id);

   res.send(foundUser);

})

// deleting an user

router.delete('/:id',(req,res) =>{

    const {id} = req.params;

    const foundUser =  users.find((newUser) => newUser.id ===id);

    users = users.filter((newUser) => newUser.id !== id)

    res.send(`user with ${id} and first name ${newUser.firstName} is deleted from database`)

});



export default router;


