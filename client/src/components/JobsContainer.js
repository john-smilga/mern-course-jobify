import { useAppContext } from '../context/appContext'
import { useEffect } from 'react'
import Loading from './Loading'
import Job from './Job'
import PageBtnContainer from './PageBtnContainer'
import Wrapper from '../wrappers/JobsContainer'
const JobsContainer = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    search,
    searchStatus,
    searchType,
    sort,
    totalJobs,
    numOfPages,
  } = useAppContext()
  useEffect(() => {
    getJobs()
  }, [page, search, searchStatus, searchType, sort])
  if (isLoading) {
    return <Loading center />
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <h5>
        showing {totalJobs} job{jobs.length > 1 && 's'}
      </h5>
      <div className='jobs'>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  )
}

export default JobsContainer
