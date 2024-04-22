import React from 'react'
import CarouselBox from '../components/CarouselBox'
import { Container, CardGroup, Card, Button } from 'react-bootstrap'

export default function Home() {
  return (
    <div>
      <CarouselBox />
      <Container>
        <h2 className='text-center m-4'>Our team</h2>
        <CardGroup className='m-4'>
          <Card className='mx-4' border='info'>
            <Card.Img variant='top' src='https://adogslife.ru/wp-content/uploads/2023/10/sa-4.jpg' />
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, voluptate.</Card.Text>
              <Button variant='primary'>About team</Button>
            </Card.Body>
          </Card>
          <Card className='mx-4' border='info'>
            <Card.Img variant='top' src='https://мичуринск-наукоград.рф/sites/default/files/64a069de4035c9ec5e4d7e6ad08b2bab.jpg' />
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, voluptate.</Card.Text>
              <Button variant='primary'>About team</Button>
            </Card.Body>
          </Card>
          <Card className='mx-4' border='info'>
            <Card.Img variant='top' src='https://a.d-cd.net/NyAAAgAOGeA-1920.jpg' />
            <Card.Body>
              <Card.Title>Developers</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, voluptate.</Card.Text>
              <Button variant='primary'>About team</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  )
}
