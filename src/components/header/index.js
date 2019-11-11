import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    FormGroup,
    Form,
    Input,
    Button, Container
} from 'reactstrap';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">MJ</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Pages
              </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Blog 1
                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Blog 2
                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Blog 3
                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="#">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input type="text" name="search" id="search" placeholder="Search..." />
                    </FormGroup>
                </Form>
                <Button color="primary" href="#"><FaFacebookF /></Button>
                <Button color="info" href="#"><FaTwitter /></Button>
                <Button color="danger" href="#"><FaInstagram /></Button>
            </Navbar>
        </Container>
    );
}

export default Header;