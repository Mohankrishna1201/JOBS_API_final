import express from 'express';

const router = express.Router();


const users ={

    firstName :"Mohan",
    lastName :"Kattamuri",
    age :25

}



// all routes are here starting with /users
router.get('/', (req,res) =>{
    res.send(users);
});

export default router;


