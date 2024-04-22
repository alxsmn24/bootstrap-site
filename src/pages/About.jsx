import React from 'react'
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'

export default function About() {
  return (
    <Container>
      <Tab.Container id='ledt-tabs-example' defaultActiveKey='first'>
        <Row>
          <Col sm={3}>
            <Nav variant='pills' className='flex-column mt-2'>
              <Nav.Item>
                <Nav.Link eventKey='first'>Design</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='second'>Team</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='third'>Programming</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='fourth'>Frameworks</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='fifth'>Libraries</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey='first'>
                <img src='https://ux-journal.ru/wp-content/uploads/2020/05/Screenshot-2020-05-29-at-01.49.16-1600x1090.png' width='75%'/>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, 
                  praesentium aliquid quasi recusandae necessitatibus, vel magnam qui, 
                  quaerat debitis optio minus impedit omnis vitae ratione!
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey='second'>
                <img src='https://www.acim.com.br/admin/public/uploads/9c96c2c3072805dba12aaf49524317b1.jpg' width='75%'/>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, 
                  praesentium aliquid quasi recusandae necessitatibus, vel magnam qui, 
                  quaerat debitis optio minus impedit omnis vitae ratione!
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey='third'>
                <img src='https://seibertconsulting.com/wp-content/uploads/2019/01/shopify_consultant_programmer.jpg' width='75%'/>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, 
                  praesentium aliquid quasi recusandae necessitatibus, vel magnam qui, 
                  quaerat debitis optio minus impedit omnis vitae ratione!
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey='fourth'>
                <img src='https://i0.wp.com/codelatte.org/wp-content/uploads/2018/09/js-framework.jpg?fit=1920%2C1080&ssl=1' width='75%'/>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, 
                  praesentium aliquid quasi recusandae necessitatibus, vel magnam qui, 
                  quaerat debitis optio minus impedit omnis vitae ratione!
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey='fifth'>
                <img src='https://cdn-ec-static.garagemca.org/storage/image/4/4/4414/large_file-b2f0d7ac-485c-4f9e-b218-956ff09f3de3.jpg' width='75%'/>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, 
                  praesentium aliquid quasi recusandae necessitatibus, vel magnam qui, 
                  quaerat debitis optio minus impedit omnis vitae ratione!
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  )
}
