import express from 'express';
import { v4 as uuidv4 } from 'uuid';

import {  getAllJobs, createJob, deleteJob, updateJob, getJob } from '../containers/jobs.js'

const router = express.Router();





// all routes are here starting with /jobs

router.get('/', getAllJobs );

// adding job

router.post('/',createJob);

// accessing particular job with id

router.get( '/:id' , getJob);


// deleting particular job

router.delete('/:id' , deleteJob);

// updating particular job

router.patch('/:id' , updateJob);



export default router;


