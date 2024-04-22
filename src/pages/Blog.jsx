import React from 'react'
import { Container, Col, Row, ListGroup, Card } from 'react-bootstrap'

export default function Blog() {
  return (
    <Container>
      <Row>
        <Col md='9'>
          <div className='d-flex m-5'>
            <img width={200} height={150} className='mr-3' src='https://mystiqora.com/wp-content/uploads/2023/08/Anime_bolshoj_palets_vverh_10.jpg' />
            <div>
              <h5>Blog post</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Amet voluptatibus, dolorem molestias deserunt nesciunt eaque 
                dicta numquam quaerat perspiciatis quia laboriosam sint 
                voluptatem! Voluptatibus sapiente rem harum et quam quae.</p>
            </div>
          </div>
          <div className='d-flex m-5'>
            <img width={200} height={150} className='mr-3' src='https://mystiqora.com/wp-content/uploads/2023/08/Anime_bolshoj_palets_vverh_10.jpg' />
            <div>
              <h5>Blog post</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Amet voluptatibus, dolorem molestias deserunt nesciunt eaque 
                dicta numquam quaerat perspiciatis quia laboriosam sint 
                voluptatem! Voluptatibus sapiente rem harum et quam quae.</p>
            </div>
          </div>
          <div className='d-flex m-5'>
            <img width={200} height={150} className='mr-3' src='https://mystiqora.com/wp-content/uploads/2023/08/Anime_bolshoj_palets_vverh_10.jpg' />
            <div>
              <h5>Blog post</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Amet voluptatibus, dolorem molestias deserunt nesciunt eaque 
                dicta numquam quaerat perspiciatis quia laboriosam sint 
                voluptatem! Voluptatibus sapiente rem harum et quam quae.</p>
            </div>
          </div>
          <div className='d-flex m-5'>
            <img width={200} height={150} className='mr-3' src='https://mystiqora.com/wp-content/uploads/2023/08/Anime_bolshoj_palets_vverh_10.jpg' />
            <div>
              <h5>Blog post</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Amet voluptatibus, dolorem molestias deserunt nesciunt eaque 
                dicta numquam quaerat perspiciatis quia laboriosam sint 
                voluptatem! Voluptatibus sapiente rem harum et quam quae.</p>
            </div>
          </div>
        </Col>

        <Col md='3'>
          <h5 className='text-center mt-5'>Categories</h5>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>Html/Css</ListGroup.Item>
              <ListGroup.Item>JavaScript</ListGroup.Item>
              <ListGroup.Item>Python</ListGroup.Item>
              <ListGroup.Item>Java</ListGroup.Item>
              <ListGroup.Item>C++</ListGroup.Item>
            </ListGroup>
          </Card>

          <Card className='mt-3'>
            <Card.Body>
              <Card.Title>Side widget</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, aspernatur. Odio, odit?
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
