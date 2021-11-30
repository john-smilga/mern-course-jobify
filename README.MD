# Jobify

#### Track Your Job Search

Project in Action - [Jobify](https://www.jobify.live/)

#### Support

Find the App Useful? [You can always buy me a coffee](https://www.buymeacoffee.com/johnsmilga)

#### Run The App Locally

```sh
npm run install-dependencies
```

- rename .env.temp to .env
- setup values for - MONGO_URL, JWT_SECRET, JWT_LIFETIME

```sh
npm start
```

- visit url http://localhost:3000/

#### Setup React App

- create <b>client</b> folder
- open terminal

```sh
cd client
```

```sh
npx create-react-app .
```

```sh
npm start
```

- set editor/browser side by side
- copy/paste assets from complete project

#### Spring Cleaning

- in src remove
- App.css
- App.test.js
- logo.svg
- reportWebVitals.js
- setupTests.js
- fix App.js and index.js

#### Title and Favicon

- change title in public/index.html
- replace favicon.ico in public
- resource [Generate Favicons](https://favicon.io/)

#### Normalize.css and Global Styles

- CSS in JS (styled-components)
- saves times on the setup
- less lines of css
- speeds up the development
- normalize.css
- small CSS file that provides cross-browser consistency in the default styling of HTML elements.
- [normalize docs](https://necolas.github.io/normalize.css/)

```sh
npm install normalize.css
```

- import 'normalize.css' in index.js
- SET BEFORE 'index.css'
- replace contents of index.css
- if any questions about normalize or specific styles
- Coding Addict - [Default Starter Video](https://youtu.be/UDdyGNlQK5w)
- Repo - [Default Starter Repo](https://github.com/john-smilga/default-starter)

#### Landing Page

- zoom level 175%
- markdown preview extension
- get something on the screen
- react router and styled components right after
- create pages directory in the source
- for now Landing.js
- create component (snippets extension)
- setup basic return

```js
<h4>Landing Page<h4>
```

- import logo.svg and main.svg
- import Landing in App.js and render

#### Styled Components

- CSS in JS
- Styled Components
- have logic and styles in component
- no name collisions
- apply javascript logic
- [Styled Components Docs](https://styled-components.com/)
- [Styled Components Course](https://www.udemy.com/course/styled-components-tutorial-and-project-course/?referralCode=9DABB172FCB2625B663F)

```sh
npm install styled-components
```

```js
import styled from 'styled-components'

const El = styled.el`
  // styles go here
`
```

- no name collisions, since unique class
- vscode-styled-components extension
- colors and bugs
- style entire react component

```js
const Wrapper = styled.el``

const Component = () => {
  return (
    <Wrapper>
      <h1> Component</h1>
    </Wrapper>
  )
}
```

- only responsible for styling
- wrappers folder in assets

#### Logo and Images

- logo built in Figma
- [Cool Images](https://undraw.co/)

#### Logo

- create <b>components</b> folder in source
- create Logo.js
- move import and image logic
- export as default
- utilize index.js

#### React Router

- Version 6
- [React Router Docs](https://reactrouter.com/docs/en/v6)

```sh
npm install history@5 react-router-dom@6
```

- import four components

```js
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
```

- Connect to browser's URL with BrowserRouter
- Routes instead of Switch

```js

<BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Dashboard</div>} />
      <Route path="/register" element={<div>Register</div>} />
      <Route path="/landing" element={<Landing />} />
      <Route path="*" element={<div>Error</div>}>
    </Routes>
</BrowserRouter>

```

```js
<nav>
  <Link to='/'>Dashboard</Link>
  <Link to='/register'>Register</Link>
  <Link to='/landing'>Home</Link>
</nav>
```

- go to Landing.js

```js
import { Link } from 'react-router-dom'

return (
  <Link to='/register' className='btn btn-hero'>
    Login / Register
  </Link>
)
```

#### Setup Pages

- create Error, Register, Dashboard pages
- basic return
- create index.js
- import all the pages
- export one by one
- basically the same, as in components
- import App.js
- add to element={}
- remove temp navbar

#### Error Page

```js
import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

return (
  <Wrapper className='full-page'>
    <div>
      <img src={img} alt='not found' />
      <h3>text</h3>
      <p>text</p>
      <Link to='/'>back home</Link>
    </div>
  </Wrapper>
)
```

#### Auto Imports

- use while developing
- only sparingly while recording
- better picture
- messes with flow
- just my preference
- still use them, just not all the time

#### Register Page - Setup

- show preview in Browser and themes

```js
import { useState, useEffect } from 'react'
import { Logo } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
// global context and useNavigate later

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}
// if possible prefer local state
// global state

function Register() {
  const [values, setValues] = useState(initialState)

  // global context and useNavigate later

  const handleChange = (e) => {
    console.log(e.target)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>

        {/* name field */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>

          <input
            type='text'
            value={values.name}
            name='name'
            onChange={handleChange}
            className='form-input'
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </Wrapper>
  )
}
```

#### FormRow Component

- create FormRow.js in <b>components</b>
- setup import/export
- setup one for email and password
- hint "type,name,value"

```js
const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>

      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className='form-input'
      />
    </div>
  )
}

export default FormRow
```

#### Alert Component

- right away setup as component
- create Alert.js in <b>components</b>

```js
const Alert = () => {
  return <div className='alert alert-danger'>alert goes here</div>
}

export default Alert
```

- setup import/export
- alert-danger or alert-success
- eventually setup in global context
- showAlert in initialState (true || false)
- right after h3 login

```js
values.showAlert && <Alert />
```

#### Toggle Member

```js
const toggleMember = () => {
  setValues({ ...values, isMember: !values.isMember })
}

return (
  <Wrapper>
    {/* control h3 */}

    <h3>{values.isMember ? 'Login' : 'Register'}</h3>

    {/* toggle name */}

    {!values.isMember && (
      <FormRow
        type='text'
        name='name'
        value={values.name}
        handleChange={handleChange}
      />
    )}

    {/* right after submit btn */}
    {/* toggle button */}

    <p>
      {values.isMember ? 'Not a member yet?' : 'Already a member?'}

      <button type='button' onClick={toggleMember} className='member-btn'>
        {values.isMember ? 'Register' : 'Login'}
      </button>
    </p>
  </Wrapper>
)
```

#### Global Context

- in src create <b>context</b> directory
- actions.js
- reducer.js
- appContext.js

```js
import React, { useState, useReducer, useContext } from 'react'

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
}
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState)

  return (
    <AppContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
```

- index.js

```js
import { AppProvider } from './context/appContext'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
```

- Register.js

```js
import { useAppContext } from '../context/appContext'

const { isLoading, showAlert } = useAppContext()
```

- switch to global showAlert

#### useReducer

- [React Tutorial](https://youtu.be/iZhV0bILFb0)
- useReducer vs Redux
- multiple reducers vs one

#### Wire Up Reducer

```js
reducer.js

const reducer = (state, action) => {
  throw new Error(`no such action :${action.type}`)
}
export default reducer
```

```js
appContext.js

import reducer from './reducer'

const [state, dispatch] = useReducer(reducer, initialState)
```

#### Display Alert

```js
actions.js

export const DISPLAY_ALERT = 'SHOW_ALERT'
```

- setup imports (reducer and appContext)

```js
appContext.js

const displayAlert() =>{
  dispatch({type:DISPLAY_ALERT})
}

```

```js
reducer.js

if (action.type === DISPLAY_ALERT) {
  return {
    ...state,
    showAlert: true,
    alertType: 'danger',
    alertText: 'Please provide all values!',
  }
}
```

```js
Alert.js in Components

import { useAppContext } from '../context/appContext'

const Alert = () => {
  const { alertType, alertText } = useAppContext()
  return <div className={`alert alert-${alertType}`}>{alertText}</div>
}
```

#### Display Alert

- [JS Nuggets - Dynamic Object Keys](https://youtu.be/_qxCYtWm0tw)

```js
appContext.js

const handleChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value })
}
```

- get displayAlert function

```js
appContext.js

const onSubmit = (e) => {
  e.preventDefault()
  const { name, email, password, isMember } = values
  if (!email || !password || (!isMember && !name)) {
    displayAlert()
    return
  }
  console.log(values)
}
```

#### Clear Alert

- technically optional

```js
actions.js

export const CLEAR_ALERT = 'CLEAR_ALERT'
```

- setup imports (reducer and appContext)

```js
reducer.js

if (action.type === CLEAR_ALERT) {
  return {
    ...state,
    showAlert: false,
    alertType: '',
    alertText: '',
  }
}
```

```js
appContext.js

const displayAlert = () => {
  dispatch({
    type: DISPLAY_ALERT,
  })
  clearAlert()
}

const clearAlert = () => {
  setTimeout(() => {
    dispatch({
      type: CLEAR_ALERT,
    })
  }, 3000)
}
```

#### Setup Server

- stop the dev server in client
- cd ..
- start setting up our server
- setup package.json

```sh
npm init -y
```

- create server.js
- console.log('server running...')

```sh
node server
```

#### ES6 vs CommonJS

```js
CommonJS

const express = require('express')
const app = express()
```

```js
ES6

import express from 'express'
const app = express()
```

- file extension .mjs

```js
package.json

"type":"module"
```

#### Nodemon and Basic Express Server

```sh
npm install nodemon --save-dev
```

```js
package.json

"start":"nodemon server"

```

```sh
npm install express
```

```js
import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('Welcome!')
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is listening on port ${port}...`))
```

# Jobify

#### Track Your Job Search

Project in Action - [Jobify](https://www.jobify.live/)

#### Support

Find the App Useful? [You can always buy me a coffee](https://www.buymeacoffee.com/johnsmilga)

#### Run The App Locally

```sh
npm run install-dependencies
```

- rename .env.temp to .env
- setup values for - MONGO_URL, JWT_SECRET, JWT_LIFETIME

```sh
npm start
```

- visit url http://localhost:3000/

#### Setup React App

- create <b>client</b> folder
- open terminal

```sh
cd client
```

```sh
npx create-react-app .
```

```sh
npm start
```

- set editor/browser side by side
- copy/paste assets from complete project

#### Spring Cleaning

- in src remove
- App.css
- App.test.js
- logo.svg
- reportWebVitals.js
- setupTests.js
- fix App.js and index.js

#### Title and Favicon

- change title in public/index.html
- replace favicon.ico in public
- resource [Generate Favicons](https://favicon.io/)

#### Normalize.css and Global Styles

- CSS in JS (styled-components)
- saves times on the setup
- less lines of css
- speeds up the development
- normalize.css
- small CSS file that provides cross-browser consistency in the default styling of HTML elements.
- [normalize docs](https://necolas.github.io/normalize.css/)

```sh
npm install normalize.css
```

- import 'normalize.css' in index.js
- SET BEFORE 'index.css'
- replace contents of index.css
- if any questions about normalize or specific styles
- Coding Addict - [Default Starter Video](https://youtu.be/UDdyGNlQK5w)
- Repo - [Default Starter Repo](https://github.com/john-smilga/default-starter)

#### Landing Page

- zoom level 175%
- markdown preview extension
- get something on the screen
- react router and styled components right after
- create pages directory in the source
- for now Landing.js
- create component (snippets extension)
- setup basic return

```js
<h4>Landing Page<h4>
```

- import logo.svg and main.svg
- import Landing in App.js and render

#### Styled Components

- CSS in JS
- Styled Components
- have logic and styles in component
- no name collisions
- apply javascript logic
- [Styled Components Docs](https://styled-components.com/)
- [Styled Components Course](https://www.udemy.com/course/styled-components-tutorial-and-project-course/?referralCode=9DABB172FCB2625B663F)

```sh
npm install styled-components
```

```js
import styled from 'styled-components'

const El = styled.el`
  // styles go here
`
```

- no name collisions, since unique class
- vscode-styled-components extension
- colors and bugs
- style entire react component

```js
const Wrapper = styled.el``

const Component = () => {
  return (
    <Wrapper>
      <h1> Component</h1>
    </Wrapper>
  )
}
```

- only responsible for styling
- wrappers folder in assets

#### Logo and Images

- logo built in Figma
- [Cool Images](https://undraw.co/)

#### Logo

- create <b>components</b> folder in source
- create Logo.js
- move import and image logic
- export as default
- utilize index.js

#### React Router

- Version 6
- [React Router Docs](https://reactrouter.com/docs/en/v6)

```sh
npm install history@5 react-router-dom@6
```

- import four components

```js
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
```

- Connect to browser's URL with BrowserRouter
- Routes instead of Switch

```js

<BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Dashboard</div>} />
      <Route path="/register" element={<div>Register</div>} />
      <Route path="/landing" element={<Landing />} />
      <Route path="*" element={<div>Error</div>}>
    </Routes>
</BrowserRouter>

```

```js
<nav>
  <Link to='/'>Dashboard</Link>
  <Link to='/register'>Register</Link>
  <Link to='/landing'>Home</Link>
</nav>
```

- go to Landing.js

```js
import { Link } from 'react-router-dom'

return (
  <Link to='/register' className='btn btn-hero'>
    Login / Register
  </Link>
)
```

#### Setup Pages

- create Error, Register, Dashboard pages
- basic return
- create index.js
- import all the pages
- export one by one
- basically the same, as in components
- import App.js
- add to element={}
- remove temp navbar

#### Error Page

```js
import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

return (
  <Wrapper className='full-page'>
    <div>
      <img src={img} alt='not found' />
      <h3>text</h3>
      <p>text</p>
      <Link to='/'>back home</Link>
    </div>
  </Wrapper>
)
```

#### Auto Imports

- use while developing
- only sparingly while recording
- better picture
- messes with flow
- just my preference
- still use them, just not all the time

#### Register Page - Setup

- show preview in Browser and themes

```js
import { useState, useEffect } from 'react'
import { Logo } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
// global context and useNavigate later

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}
// if possible prefer local state
// global state

function Register() {
  const [values, setValues] = useState(initialState)

  // global context and useNavigate later

  const handleChange = (e) => {
    console.log(e.target)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>

        {/* name field */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>

          <input
            type='text'
            value={values.name}
            name='name'
            onChange={handleChange}
            className='form-input'
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </Wrapper>
  )
}
```

#### FormRow Component

- create FormRow.js in <b>components</b>
- setup import/export
- setup one for email and password
- hint "type,name,value"

```js
const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>

      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className='form-input'
      />
    </div>
  )
}

export default FormRow
```

#### Alert Component

- right away setup as component
- create Alert.js in <b>components</b>

```js
const Alert = () => {
  return <div className='alert alert-danger'>alert goes here</div>
}

export default Alert
```

- setup import/export
- alert-danger or alert-success
- eventually setup in global context
- showAlert in initialState (true || false)
- right after h3 login

```js
values.showAlert && <Alert />
```

#### Toggle Member

```js
const toggleMember = () => {
  setValues({ ...values, isMember: !values.isMember })
}

return (
  <Wrapper>
    {/* control h3 */}

    <h3>{values.isMember ? 'Login' : 'Register'}</h3>

    {/* toggle name */}

    {!values.isMember && (
      <FormRow
        type='text'
        name='name'
        value={values.name}
        handleChange={handleChange}
      />
    )}

    {/* right after submit btn */}
    {/* toggle button */}

    <p>
      {values.isMember ? 'Not a member yet?' : 'Already a member?'}

      <button type='button' onClick={toggleMember} className='member-btn'>
        {values.isMember ? 'Register' : 'Login'}
      </button>
    </p>
  </Wrapper>
)
```

#### Global Context

- in src create <b>context</b> directory
- actions.js
- reducer.js
- appContext.js

```js
import React, { useState, useReducer, useContext } from 'react'

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
}
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState)

  return (
    <AppContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
```

- index.js

```js
import { AppProvider } from './context/appContext'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
```

- Register.js

```js
import { useAppContext } from '../context/appContext'

const { isLoading, showAlert } = useAppContext()
```

- switch to global showAlert

#### useReducer

- [React Tutorial](https://youtu.be/iZhV0bILFb0)
- useReducer vs Redux
- multiple reducers vs one

#### Wire Up Reducer

```js
reducer.js

const reducer = (state, action) => {
  throw new Error(`no such action :${action.type}`)
}
export default reducer
```

```js
appContext.js

import reducer from './reducer'

const [state, dispatch] = useReducer(reducer, initialState)
```

#### Display Alert

```js
actions.js

export const DISPLAY_ALERT = 'SHOW_ALERT'
```

- setup imports (reducer and appContext)

```js
appContext.js

const displayAlert() =>{
  dispatch({type:DISPLAY_ALERT})
}

```

```js
reducer.js

if (action.type === DISPLAY_ALERT) {
  return {
    ...state,
    showAlert: true,
    alertType: 'danger',
    alertText: 'Please provide all values!',
  }
}
```

```js
Alert.js in Components

import { useAppContext } from '../context/appContext'

const Alert = () => {
  const { alertType, alertText } = useAppContext()
  return <div className={`alert alert-${alertType}`}>{alertText}</div>
}
```

#### Display Alert

- [JS Nuggets - Dynamic Object Keys](https://youtu.be/_qxCYtWm0tw)

```js
appContext.js

const handleChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value })
}
```

- get displayAlert function

```js
appContext.js

const onSubmit = (e) => {
  e.preventDefault()
  const { name, email, password, isMember } = values
  if (!email || !password || (!isMember && !name)) {
    displayAlert()
    return
  }
  console.log(values)
}
```

#### Clear Alert

- technically optional

```js
actions.js

export const CLEAR_ALERT = 'CLEAR_ALERT'
```

- setup imports (reducer and appContext)

```js
reducer.js

if (action.type === CLEAR_ALERT) {
  return {
    ...state,
    showAlert: false,
    alertType: '',
    alertText: '',
  }
}
```

```js
appContext.js

const displayAlert = () => {
  dispatch({
    type: DISPLAY_ALERT,
  })
  clearAlert()
}

const clearAlert = () => {
  setTimeout(() => {
    dispatch({
      type: CLEAR_ALERT,
    })
  }, 3000)
}
```

#### Setup Server

- stop the dev server in client
- cd ..
- start setting up our server
- setup package.json

```sh
npm init -y
```

- create server.js
- console.log('server running...')

```sh
node server
```

#### ES6 vs CommonJS

```js
CommonJS

const express = require('express')
const app = express()
```

```js
ES6

import express from 'express'
const app = express()
```

- file extension .mjs

```js
package.json

"type":"module"
```

#### Nodemon and Basic Express Server

```sh
npm install nodemon --save-dev
```

```js
package.json

"start":"nodemon server"

```

```sh
npm install express
```

```js
import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('Welcome!')
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is listening on port ${port}...`))
```

#### Not Found Middleware

- in the root create <b>middleware</b> folder
- not-found.js
- setup function
- return 404 with message 'Route does not exist'
- import in server.js
- make sure to use .js extension
- place after home route

#### Error Middleware

- in the middleware create error-handler.js
- setup function
- accept 4 parameters, first one error
- log error
- return 500
- json({msg:'there was an error'})
- import in the server.js
- make sure to use .js extension
- place it last
- eventually handle Mongoose Errors, just like in the node-express
- showcase with async errors

#### ENV Variables

```sh
npm install dotenv
```

- import dotenv from 'dotenv'
- dotenv.config()

- create .env
- PORT=4000
- .gitignore
- /node_modules
- .env

#### Connect to MongoDB

- switched back to PORT=5000
- remove Error from '/'

- existing MongoDB Atlas Account

```sh
npm install mongoose
```

- create <b>db</b> folder
- create connect.js
- setup connectDB(url)
- in server.js create start() function
- get connection string
- setup as MONGO_URL in .env
- provide credentials and DB Name

#### Auth Controller and Route Structure

- create <b>controllers</b>
- authController.js
- create async functions

```js
export { register, login, updateUser }
```

- return res.send('function name')
- create <b>routes</b> folder
- authRoutes.js
- setup express router
- import functions from authController.js

```js
router.route('/register').post(register)
router.route('/login').post(login)
router.route('/updateUser').patch(updateUser)

export default router
```

- import authRouter in server.js

```js
app.use('/api/v1/auth', authRouter)
```

#### Jobs Controller and Route Structure

- jobsController.js
- create async functions

```js
export { createJob, deleteJob, getAllJobs, updateJob, showStats }
```

- return res.send('function name')

- jobsRoutes.js
- setup express router
- import functions from jobsController.js

```js
router.route('/').post(createJob).get(getAllJobs)
// place before :id
router.route('/stats').get(showStats)
router.route('/:id').delete(deleteJob).patch(updateJob)

export default router
```

- in server.js jobsRouter

```js
app.use('/api/v1/jobs', jobsRouter)
```

#### Postman

- URL global var
- JOBIFY Collection
- auth and jobs folders
- setup routes

#### User Model

- <b>models</b> folder
- User.js
- setup schema
- name, email, password, lastName, location
- all {type:String}

#### Validate Email

```js
validate:{
  validator:(field)=> {return 2 > 1},
  message:'Please provide valid email'
  }
```

- [Validator Package](https://www.npmjs.com/package/validator)

```sh
npm install validator
```

- import in User.js
- validator.isEmail

#### Register User - Initial Setup

- authController
- import User model
- setup temporary try/catch
- await User.create(req.body)
- if success 201 with json({user}) (temp)
- if error 500 with json({msg:'there was an error'})

#### Pass Error to Error Handler

- next(error)

#### Express-Async-Errors Package

- remove try/catch
- [Express-Async-Errors](https://www.npmjs.com/package/express-async-errors)

```sh
npm install express-async-errors

```

- in server.js
- import 'express-async-errors'

- use throw Error('error') instead of next(error)

#### Http Status Codes

- constants for status codes
- personal preference
- provides consistency
- less bugs
- easier to read/manage

- [Http Status Codes](https://www.npmjs.com/package/http-status-codes)

```sh
npm install http-status-codes
```

- import/setup in authController and error-handler
- setup defaultError

#### Custom Errors

#### Refactor Errors

- create errors folder
- create custom-api, bad-request, not-found, index.js files
- add proper imports
- setup index.js just like in the front-end
- import {BadRequestError} in authController
- gotcha "errors/index.js"

#### Hash Passwords

- one way street, only compare hashed values
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs)

```sh
npm install bcryptjs
```

- User Model
- import bcrypt from 'bcryptjs'
- await genSalt(10)
- await hash(password , salt)
- await compare(requestPassword , currentPassword)
- [mongoose middleware](https://mongoosejs.com/docs/middleware.html)
- UserSchema.pre('save',async function(){"this" points back to UserSchema})

#### Mongoose - Custom Instance Methods

[Custom Instance Methods](https://mongoosejs.com/docs/guide.html#methods)

- UserSchema.methods.createJWT = function(){console.log(this)}
- register controller
- right after User.create()
- invoke user.createJWT()

#### JWT

- token
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

```sh
npm install jsonwebtoken
```

- User Model
- import jwt from 'jsonwebtoken'
- jwt.sign(payload,secret,options)
- createJWT

```js
return jwt.sign({ userId: this._id }, 'jwtSecret', { expiresIn: '1d' })
```

```js
return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
  expiresIn: process.env.JWT_LIFETIME,
})
```

#### JWT_SECRET and JWT_LIFETIME

- [Keys Generator](https://www.allkeysgenerator.com/)
- RESTART SERVER!!!!

#### Complete Register

- password : {select:false}
- complete response

#### Concurrently

- front-end and backend (server)
- run separate terminals
- [concurrently](https://www.npmjs.com/package/concurrently)

```sh
npm install concurrently --save-dev

```

- package.json

```js
// --kill-others switch, all commands are killed if one dies
// --prefix client - folder
// cd client && npm start
// escape quotes

"scripts": {
    "server": "nodemon server --ignore client",
    "client": "npm start --prefix client",
    "start": "concurrently --kill-others-on-fail \"npm run server\" \" npm run client\""
  },
```

#### Cors Error

[Cors Error](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

- two fixes (cors package and proxy)

#### Cors Package

[cors package](https://www.npmjs.com/package/cors)

```sh
npm install cors
```

```js
import cors from 'cors'

app.use(cors())
```

#### Proxy

- access from anywhere
- don't want to use full url

[cra proxy](https://create-react-app.dev/docs/proxying-api-requests-in-development/)

```js
"proxy":"http://localhost:5000"
```

- my preference to remove trailing slash /
- restart app

#### Register User - Setup

```js
appContext.js

const initialState = {
  user: null,
  token: null,
  userLocation: '',
}
```

- actions.js REGISTER_USER_BEGIN,SUCCESS,ERROR
- import reducer,appContext

```js
appContext.js
const registerUser = async (currentUser) => {
  console.log(currentUser)
}
```

- import in Register.js

```js
Register.js

const currentUser = { name, email, password }
if (isMember) {
  console.log('already a member')
} else {
  registerUser(currentUser)
}

return (
  <button type='submit' className='btn btn-block' disabled={isLoading}>
    submit
  </button>
)
```

#### Axios

- [axios docs](https://axios-http.com/docs/intro)
- stop app
- cd client

```sh
npm install axios
```

- cd ..
- restart app

#### Register User - Complete

```js
appContext.js

import axios from 'axios'

const registerUser = async (currentUser) => {
  dispatch({ type: REGISTER_USER_BEGIN })
  try {
    const response = await axios.post('/api/v1/auth/register', currentUser)
    console.log(response)
    const { user, token, location } = response.data
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: {
        user,
        token,
        location,
      },
    })

    // will add later
    // addUserToLocalStorage({
    //   user,
    //   token,
    //   location,
    // })
  } catch (error) {
    console.log(error.response)
    dispatch({
      type: REGISTER_USER_ERROR,
      payload: { msg: error.response.data.msg },
    })
  }
  clearAlert()
}
```

```js
reducer.js
if (action.type === REGISTER_USER_BEGIN) {
  return { ...state, isLoading: true }
}
if (action.type === REGISTER_USER_SUCCESS) {
  return {
    ...state,
    user: action.payload.user,
    token: action.payload.token,
    userLocation: action.payload.location,
    jobLocation: action.payload.location,
    isLoading: false,
    showAlert: true,
    alertType: 'success',
    alertText: 'User Created! Redirecting...',
  }
}
if (action.type === REGISTER_USER_ERROR) {
  return {
    ...state,
    isLoading: false,
    showAlert: true,
    alertType: 'danger',
    alertText: action.payload.msg,
  }
}
```

#### Navigate To Dashboard

```js
Register.js
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const { user } = useAppContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [user, navigate])
}
```

#### Local Storage

```js
appContext.js
const addUserToLocalStorage = ({ user, token, location }) => {
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('token', token)
  localStorage.setItem('location', location)
}

const removeUserFromLocalStorage = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  localStorage.removeItem('location')
}

const registerUser = async (currentUser) => {
  // in try block
  addUserToLocalStorage({
    user,
    token,
    location,
  })
}

// set as default
const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const userLocation = localStorage.getItem('location')

const initialState = {
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || '',
  jobLocation: userLocation || '',
}
```

#### Morgan Package

- http logger middleware for node.js
- [morgan docs](https://www.npmjs.com/package/morgan)

```sh
npm install morgan
```

```js
import morgan from 'morgan'

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}
```

#### UnauthenticatedError

- unauthenticated.js in errors
- import/export

```js
import { StatusCodes } from 'http-status-codes'
import CustomAPIError from './custom-api.js'

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}
```

#### Compare Password

```js
User.js in models

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password)
  return isMatch
}
```

```js
authController.js
const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequestError('Please provide all values')
  }
  const user = await User.findOne({ email }).select('+password')

  if (!user) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  const token = user.createJWT()
  user.password = undefined
  res.status(StatusCodes.OK).json({ user, token, location: user.location })
}
```

- test in Postman

#### Login User - Setup

- actions.js LOGIN_USER_BEGIN,SUCCESS,ERROR
- import reducer,appContext

```js
appContext.js
const loginUser = async (currentUser) => {
  console.log(currentUser)
}
```

- import in Register.js

```js
Register.js

if (isMember) {
  loginUser(currentUser)
} else {
  registerUser(currentUser)
}
```

#### Login User - Complete

```js
appContext.js
const loginUser = async (currentUser) => {
  dispatch({ type: LOGIN_USER_BEGIN })
  try {
    const { data } = await axios.post('/api/v1/auth/login', currentUser)
    const { user, token, location } = data

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: { user, token, location },
    })

    addUserToLocalStorage({ user, token, location })
  } catch (error) {
    dispatch({
      type: LOGIN_USER_ERROR,
      payload: { msg: error.response.data.msg },
    })
  }
  clearAlert()
}
```

```js
reducer.js

if (action.type === LOGIN_USER_BEGIN) {
  return {
    ...state,
    isLoading: true,
  }
}
if (action.type === LOGIN_USER_SUCCESS) {
  return {
    ...state,
    isLoading: false,
    user: action.payload.user,
    token: action.payload.token,
    userLocation: action.payload.location,
    jobLocation: action.payload.location,
    showAlert: true,
    alertType: 'success',
    alertText: 'Login Successful! Redirecting...',
  }
}
if (action.type === LOGIN_USER_ERROR) {
  return {
    ...state,
    isLoading: false,
    showAlert: true,
    alertType: 'danger',
    alertText: action.payload.msg,
  }
}
```

#### Refactor

```js
actions.js
export const SETUP_USER_BEGIN = 'SETUP_USER_BEGIN'
export const SETUP_USER_SUCCESS = 'SETUP_USER_SUCCESS'
export const SETUP_USER_ERROR = 'SETUP_USER_ERROR'
```

```js
appContext.js

const setupUser = async ({ currentUser, endPoint, alertText }) => {
  dispatch({ type: SETUP_USER_BEGIN })
  try {
    const { data } = await axios.post(`/api/v1/auth/${endPoint}`, currentUser)

    const { user, token, location } = data
    dispatch({
      type: SETUP_USER_SUCCESS,
      payload: { user, token, location, alertText },
    })
    addUserToLocalStorage({ user, token, location })
  } catch (error) {
    dispatch({
      type: SETUP_USER_ERROR,
      payload: { msg: error.response.data.msg },
    })
  }
  clearAlert()
}
```

```js
reducer.js
if (action.type === SETUP_USER_BEGIN) {
  return { ...state, isLoading: true }
}
if (action.type === SETUP_USER_SUCCESS) {
  return {
    ...state,
    isLoading: false,
    token: action.payload.token,
    user: action.payload.user,
    userLocation: action.payload.location,
    jobLocation: action.payload.location,
    showAlert: true,
    alertType: 'success',
    alertText: action.payload.alertText,
  }
}
if (action.type === SETUP_USER_ERROR) {
  return {
    ...state,
    isLoading: false,
    showAlert: true,
    alertType: 'danger',
    alertText: action.payload.msg,
  }
}
```

- import/export

```js
Register.js

const onSubmit = (e) => {
  e.preventDefault()
  const { name, email, password, isMember } = values
  if (!email || !password || (!isMember && !name)) {
    displayAlert()
    return
  }
  const currentUser = { name, email, password }
  if (isMember) {
    setupUser({
      currentUser,
      endPoint: 'login',
      alertText: 'Login Successful! Redirecting...',
    })
  } else {
    setupUser({
      currentUser,
      endPoint: 'register',
      alertText: 'User Created! Redirecting...',
    })
  }
}
```

#### Nested Pages in React Router 6

#### Dashboard pages

- delete Dashboard.js
- fix imports/exports
- replace in home route

```js
<Route path='/' element={<div>dashboard</div>} />
```

- create <b>dashboard</b> directory in pages
- create AddJob,AllJobs,Profile,Stats,SharedLayout, index.js
- setup basic returns

```js
return <h1>Add Job Page</h1>
```

- export all with index.js (just like components)
- import all pages in App.js

#### Nested Structure

```js
App.js

<Route path='/' >
  <Route path="stats" element={<Stats />} />
  <Route path='all-jobs' element={<AllJobs />}></Route>
  <Route path='add-job' element={<AddJob />}></Route>
  <Route path='profile' element={<Profile />}></Route>
</Route>
```

#### Shared Layout

```js
App.js

<Route path='/' element={<SharedLayout/>} >
```

```js
SharedLayout.js

import { Outlet, Link } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout'

const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to='all-jobs'>all jobs</Link>
        <Link to='add-job'>all jobs</Link>
      </nav>
      <Outlet />
    </Wrapper>
  )
}

export default SharedLayout
```

```js
App.js

<Route index element={<Stats/>} >
```

#### Protected Route

- create ProtectedRoute.js in pages
- import/export
- wrap SharedLayout in App.js

```js
<Route
  path='/'
  element={
    <ProtectedRoute>
      <SharedLayout />
    </ProtectedRoute>
  }
/>
```

```js
ProtectedRoute.js

import { Navigate } from 'react-router-dom'
import { useAppContext } from '../context/appContext'

const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext()
  if (!user) {
    return <Navigate to='/landing' />
  }
  return children
}
```

#### Navbar, SmallSidebar, BigSidebar

- create Navbar, SmallSidebar, BigSidebar in components
- import Wrappers from assets/wrappers
- simple return
- import/export

```js
SharedLayout.js

import { Outlet } from 'react-router-dom'
import { Navbar, SmallSidebar, BigSidebar } from '../../components'
import Wrapper from '../../assets/wrappers/SharedLayout'

const SharedLayout = () => {
  const { user } = useAppContext()
  return (
    <>
      <Wrapper>
        <main className='dashboard'>
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  )
}

export default SharedLayout
```

#### React Icons

[React Icons](https://react-icons.github.io/react-icons/)

```sh
npm install react-icons
```

```js
Navbar.js

import Wrapper from '../assets/wrappers/Navbar'
import {FaHome} from 'react-icons/fa'
const Navbar = () => {
  return (
    <Wrapper>
      <h4>navbar</h4>
      <FaHome>
    </Wrapper>
  )
}

export default Navbar

```

#### Navbar Setup

```js
Navbar.js

import { useState } from 'react'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import Logo from './Logo'
import Wrapper from '../assets/wrappers/Navbar'
const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <button
          className='toggle-btn'
          onClick={() => console.log('toggle sidebar')}
        >
          <FaAlignLeft />
        </button>

        <div>
          <Logo />
          <h3 className='logo-text'>dashboard</h3>
        </div>

        <div className='btn-container'>
          <button className='btn' onClick={() => console.log('show logout')}>
            <FaUserCircle />
            john
            <FaCaretDown />
          </button>
          <div className='dropdown show-dropdown'>
            <button
              onClick={() => console.log('logout user')}
              className='dropdown-btn'
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
```

#### Toggle Sidebar

```js
actions.js

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
```

- import/export

```js
appContext.js

const initialState = {
  showSidebar: false,
}

const toggleSidebar = () => {
  dispatch({ type: TOGGLE_SIDEBAR })
}
```

```js
reducer.js

if (action.type === TOGGLE_SIDEBAR) {
  return { ...state, showSidebar: !state.showSidebar }
}
```

```js
Navbar.js

const { toggleSidebar } = useAppContext()

return (
  <button className='toggle-btn' onClick={toggleSidebar}>
    <FaAlignLeft />
  </button>
)
```

#### Toggle Dropdown

```js
Navbar.js

const [showLogout, setShowLogout] = useState(false)

<div className='btn-container'>
  <button className='btn' onClick={() => setShowLogout(!showLogout)}>
    <FaUserCircle />
      {user.name}
    <FaCaretDown />
  </button>
  <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
    <button onClick={() => logoutUser()} className='dropdown-btn'>
      logout
    </button>
  </div>
</div>

```
