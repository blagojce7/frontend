import React from 'react'
import {Link} from 'react-router-dom'
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from 'reactstrap'

export const Heading = () => {
    return (
        <Navbar color="dark" dark>
            <Container>
                <NavbarBrand href="/">My Course</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link to="/addCourse" className="btn btn-primary">Add Course</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}
