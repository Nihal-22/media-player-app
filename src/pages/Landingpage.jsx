import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landingpage() {
  const navigateByUrl=useNavigate()
  return (
    <div>
      <Row className='mt-5 d-flex align-item-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
        <h1>Welcom to Media-Player</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, itaque! Impedit libero veritatis, quos rerum autem soluta exercitationem recusandae itaque quod. Consectetur voluptatibus amet ab dolore quia eos. Adipisci, necessitatibus?
        Corporis saepe iure odit amet. Numquam, cupiditate modi autem magni possimus voluptatem, esse, facere molestiae expedita eos quam quia aliquid. Architecto voluptates minus cum ad maiores ullam a voluptatum distinctio!</p>
        <Button onClick={()=>navigateByUrl('/home')}>Get Started</Button>
        </Col>
        <Col lg={5}>
        <img src="https://i.pinimg.com/originals/88/4a/40/884a408310b28171aa1018f77dee2602.gif" alt="" style={{marginLeft:"100px",marginTop:"10px"}}/>
        </Col>
        <Col></Col>
      </Row>
    <div className='container mb-5 mt-5 d-flex flex-column align-items-center justify-content-center w-100'>
      <h5 className='text-warning' style={{fontSize:'40px'}}>Features</h5>
      <div className='cards mb-5 mt-5 d-flex align=items-center justify-content-between w-100'>
      <Card style={{ width: '18rem' }} className='bg-info'>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPucerNA_LJTRWNZP8ScWNCZEr0i6lfBUFlQoIMXNj0Sa673zv4BKCbgIM0DPfXB1G4S0&usqp=CAU" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className='bg-info'>
      <Card.Img variant="top" src="https://cdn.dribbble.com/userupload/22650609/file/original-f91dabdbae62c4ee0bc788f94ed18b77.gif" />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className='bg-info'>
      <Card.Img variant="top" style={{height:"290px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkSW7UMlsympme5UolbTAcArn7TnWkxPdadH7uENPSfzuGDbJKp0vKtJxEbqa7nNztpsQ&usqp=CAU" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
      </div>
    </div>
    <div className='container border rounded p-4 border-light mt-5 d-flex justify-content-center align-items-center'>
      <div className="col-lg-5">
        <h4 className='text-warning'>Simple,Powerful & Fast</h4>
        <h6 className='mb-5 mt-4'><span className='text-warning'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odit sapiente est modi magni dolorem iusto praesentium, possimus quisquam ratione in saepe ab autem quod expedita sunt nostrum dicta dolores.</h6>
        <h6 className='mb-5 mt-4'><span className='text-warning'>Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odit sapiente est modi magni dolorem iusto praesentium, possimus quisquam ratione in saepe ab autem quod expedita sunt nostrum dicta dolores.</h6>
        <h6 className='mb-5 mt-4'><span className='text-warning'>Managing Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odit sapiente est modi magni dolorem iusto praesentium, possimus quisquam ratione in saepe ab autem quod expedita sunt nostrum dicta dolores.</h6>
      </div>
      <div className="col-lg-5 ms-5">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/MbJ72KO5khs?si=oELxYJjUIMxqrzsH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
      </div>
    </div>
    </div>
  )
}

export default Landingpage
