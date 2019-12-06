import React, { useState } from 'react'
import axios from 'axios'
import { Form, Button } from 'semantic-ui-react'

export default function Login(props) {
  const [credentials, setCredentials] = useState({ username: '', password: '' })

  const handleChange = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios
      .post('http://localhost:5000/api/login', credentials)
      .then(response => {
        localStorage.setItem('token', response.data.payload)
        props.history.push('/protected')
      })
      .catch(error => console.log(error.response))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={credentials.username}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={credentials.password}
          onChange={handleChange}
        />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
