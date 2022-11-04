import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FormControl,DropdownButton,ButtonGroup,Dropdown,Badge ,alignRight} from "react-bootstrap";
const Searchitem = () => {
  return (
    <div className="card pe-3 ps-3">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Shopping Cart</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form style={{width:500}} className="d-flex text-center">
              <Form.Control
                type="search"
                placeholder="Search a Products"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <div className="mb-2">
        
            <nav>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant=" success">
                        <Badge></Badge>
                    </Dropdown.Toggle>
                </Dropdown>
            </nav>
          <DropdownButton
            as="ButtonGroup"
          
            id="dropdown-button-drop"
            drop='direction'
            variant="secondary"
            title= "Drop" 
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
  
      </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Searchitem;
