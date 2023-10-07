import express from 'express';

const router = express.Router();

// all routes are here starting with /users
router.get('/', (req,res) =>{
    res.send('hellooo');
});

export default router;


