import { useState, useEffect } from 'react'
import { FormRow, Alert, Logo } from '../components'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterPage'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}
function Register() {
  const [values, setValues] = useState(initialState)

  const { isLoading, showAlert, displayAlert, registerUser, loginUser, user } =
    useAppContext()
  const navigate = useNavigate()

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }
    // create user
    const currentUser = { name, email, password }

    if (isMember) {
      loginUser(currentUser)
    } else {
      registerUser(currentUser)
    }
  }
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [user, navigate])
  return (
    <>
      <Wrapper className='page full-page'>
        <form className='form' onSubmit={onSubmit}>
          <Logo />
          <h3>{values.isMember ? 'Login' : 'Register'}</h3>
          {/* alert */}
          {showAlert && <Alert />}
          {/* name field */}
          {!values.isMember && (
            <FormRow
              type='text'
              name='name'
              value={values.name}
              handleChange={handleChange}
            />
          )}

          {/* single form row */}
          <FormRow
            type='email'
            name='email'
            value={values.email}
            handleChange={handleChange}
          />
          {/* end of single form row */}
          {/* single form row */}
          <FormRow
            type='password'
            name='password'
            value={values.password}
            handleChange={handleChange}
          />
          {/* end of single form row */}
          <button type='submit' className='btn btn-block' disabled={isLoading}>
            {isLoading ? 'Please wait...' : 'Submit'}
          </button>
          <p>
            {values.isMember ? 'Not a member yet?' : 'Already a member?'}

            <button type='button' onClick={toggleMember} className='member-btn'>
              {values.isMember ? 'Register' : 'Login'}
            </button>
          </p>
        </form>
      </Wrapper>
    </>
  )
}

export default Register
