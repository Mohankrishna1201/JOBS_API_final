import express from 'express';
import { v4 as uuidv4 } from 'uuid';

import {  getAllJobs, createJob, deleteJob, updateJob, getJob} from '../containers/jobs.js'

const router = express.Router();


let jobs=[
    
]



// all routes are here starting with /jobs


router.get('/', getAllJobs );

// adding job
//newJob is job pushed into our data base



router.post('/',createJob);

// accessing particular job with id

router.get( '/:id' , getJob);


// deleting particular job
// we know that in filter if we pass false value it will delete that particular id related job


router.delete('/:id' , deleteJob);

// updating particular job



router.patch('/:id' , updateJob);



export default router;


