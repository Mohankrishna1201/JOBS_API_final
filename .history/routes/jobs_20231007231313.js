import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();


let jobs=[
    
]



// all routes are here starting with /jobs
router.get('/', (req,res) =>{
    res.send(jobs);
});
// adding job
//newJob is job pushed into our data base
router.post('/',(req,res) =>{

    const newJob = req.body;

    
    jobs.push( {...newJob, id:uuidv4() });
   res.send( newJob)

})


export default router;


