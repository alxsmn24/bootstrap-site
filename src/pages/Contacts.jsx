import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

export default function Contacts() {
  return (
    <Container style={{width:'25%'}}>
      <h1 className='text-center'>Contact Us</h1>
      <Form>
        <Form.Group controlid='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email'/>
          <Form.Text>
            We'll never share your email with anyone else
          </Form.Text>
        </Form.Group>

        <Form.Group contorlid='formBasicPassword'>
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as='textarea' rows='3'/>
        </Form.Group>

        <Form.Group contorlid='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out'/>
        </Form.Group>

        <Button variant='primary' type='submit'>Submit</Button>
      </Form>
    </Container>
  )
}