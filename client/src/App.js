import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing, Error, Register } from './pages'
import {
  SharedLayout,
  Stats,
  AllJobs,
  AddJob,
  Profile,
} from './pages/Dashboard'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Stats />} />
            <Route path='all-jobs' element={<AllJobs />}></Route>
            <Route path='add-job' element={<AddJob />}></Route>
            <Route path='profile' element={<Profile />}></Route>
          </Route>
          <Route path='/register' element={<Register />} />
          <Route path='/landing' element={<Landing />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
