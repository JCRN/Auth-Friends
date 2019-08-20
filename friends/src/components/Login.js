import React, { useState } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'

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
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          placeholder="Enter username"
          value={credentials.username}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Enter Password"
          value={credentials.password}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}
