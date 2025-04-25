import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div>
<footer className='bg-danger mt-4' style={{height:"160px",width:"1533px"}}>
  <Row>
    <Col><h1 className='text-warning'>Media-player</h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ratione cum culpa ea quam, deserunt reprehenderit veniam, debitis quas et labore dolore facere? Aspernatur accusamus beatae vel quod accusantium veniam.</Col>
    <Col style={{marginLeft:"60px"}}><h2 className='text-warning'>Follow us on</h2> <br />youtube <br />twitter <br />instagram</Col>
    <Col>Enter your comments <br />
    <input type="text" placeholder='comment' style={{width:"200px"}} className='form-control'/> <br />
    <Button variant="outline-success rounded text-dark"className='form-control' style={{width:"100px",marginLeft:"20px"}}>Send</Button>
    </Col>
  </Row>
  <Row>
    <Col></Col>
    <Col style={{marginLeft:"60px"}}></Col>
    <Col></Col>
  </Row>
</footer>
    </div>
  )
}

export default Footer
