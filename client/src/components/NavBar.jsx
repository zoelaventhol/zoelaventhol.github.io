import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Nav.Link as={Link} to='/about'>About</Nav.Link>
          <Nav.Link as={Link} to='/portfolio'>Portfolio</Nav.Link>
          <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
        </Navbar>
    </div>
  )
}
