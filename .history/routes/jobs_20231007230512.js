import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();


let jobs=[
    
]



// all routes are here starting with /jobs
router.get('/', (req,res) =>{
    res.send(jobs);
});



export default router;


