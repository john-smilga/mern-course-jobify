import express from 'express'
const router = express.Router()

import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
} from '../controllers/jobsController.js'

router.route('/').post(createJob).get(getAllJobs)
// remember about :id
router.route('/stats').get(showStats)
router.route('/:id').delete(deleteJob).patch(updateJob)

export default router
