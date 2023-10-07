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
   res.send(`a new job added to our database and its title is  ${newJob.title}`)

})

// accessing particular job with id

router.get( '/:id' ,(req,res) =>{

    const {id} = req.params;

    const foundJob = jobs.find((newJob) => newJob.id ===id);

    res.send(foundJob);
});

// deleting particular job
// we know that in filter if we pass false value it will delete that particular id related job

router.delete('/:id' ,(req,res) =>{

    const {id} = req.params;

    const foundJob = jobs.find((newJob) => newJob.id ===id); // for knowing whhich job we are deleting

    jobs = jobs.filter ((newJob) => newJob.id !== id );

    res.send (`the job with ${id} is deleted and its title is ${foundJob.title}`);


})



export default router;


