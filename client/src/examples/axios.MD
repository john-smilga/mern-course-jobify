#### Bearer Token in Create JOB

```js
const createJob = async () => {
  dispatch({ type: CREATE_JOB_BEGIN })
  try {
    const { position, company, location, jobType, status, token } = state

    await axios.post(
      '/jobs',
      { company, position, location, jobType, status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    dispatch({
      type: CREATE_JOB_SUCCESS,
    })
    dispatch({ type: CLEAR_VALUES })
  } catch (error) {
    console.log(error.response)
    if (error.response.status === 401) {
      // need to remove all values
      logoutUser()
      return
    }
    dispatch({
      type: CREATE_JOB_ERROR,
    })
    // console.log(error.response)
  }
  clearAlert()
}
```

#### Global Setup - authorization header added to all requests

```js
axios.defaults.headers.common['Authorization'] = `Bearer ${state.token}`
```

#### Auth Fetch - add headers to instance

```js
const authFetch = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
```
