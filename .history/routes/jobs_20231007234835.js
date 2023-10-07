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

// updating particular job

router.patch('/:id' ,(req,res) =>{

    const {id} = req.params;

    const job = jobs.find((newJob) => newJob.id ===id); // which job is being updated

    const { title, org_id, description, posted_date, end_date, job_type, stipend, questions, No_of_openings } = req.body;

    if(title) job.title = title;
    if(org_id) job.org_id = org_id;
    if(description) job.description = description;
    if(posted_date) job.posted_date = posted_date;
    if(end_date) job.end_date = end_date;
    if( job_type) job.job_type = job_type;
    if( stipend) job.stipend = stipend;
    if(questions) job.questions = questions;
    if(No_of_openings) job.No_of_openings = No_of_openings;

    res.send(`job with ${id} is updated and its title is ${job.title} and org_id is ${job.org_id}`)

})



export default router;


