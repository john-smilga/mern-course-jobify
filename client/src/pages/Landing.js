import { Link } from 'react-router-dom'
import main from '../assets/images/main-1.svg'
import { Navigate } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import Wrapper from '../wrappers/LandingPage'

import Logo from '../components/Logo'
function Home() {
  const { user } = useAppContext()
  return (
    <>
      {user && <Navigate to='/' />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          <div className='info'>
            <h1>
              job
              <span> tracking </span>
              app
            </h1>

            <p>
              I'm baby viral enamel pin chartreuse cliche retro af selfies
              kinfolk photo booth plaid jianbing actually squid 3 wolf moon
              lumbersexual. Hell of humblebrag gluten-free lo-fi man braid
              leggings.
            </p>

            <Link to='/register' className='btn btn-hero'>
              Login / Register
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
    </>
  )
}

export default Home
