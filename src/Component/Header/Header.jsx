import React from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { Navigate, useNavigate } from 'react-router'

function Header() {

    const navigate = useNavigate()

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand onClick={()=> navigate('/')} style={{cursor: "pointer"}}><img src="logo.png" alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex search_form">
                            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                            <Button className='btn-light'><BsSearch /></Button>
                        </Form>
                    </Navbar.Collapse>
                    <Button variant="light" style={{margin: "0 20px"}}>Login</Button>
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="#">Become a Seller</Nav.Link>
                        <NavDropdown title="More" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#">Notification</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                24*7 Customer Care
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                Advertise
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                Download App
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={()=> navigate('/cart')}><FaShoppingCart style={{margin: "0 8px"}} />Cart</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
