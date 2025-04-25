import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
Container
function Header() {
  return (
    <div>
      <Navbar className="bg-info">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{textDecoration:'none',color:'rgb(50, 250, 227)'}}>
            <i class="fa-solid fa-circle-play fa-flip me-2 fs-3"></i>
            Media-Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
