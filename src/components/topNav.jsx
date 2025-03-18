import React, {Fragment, Component} from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import '../stylesheets/App.css';
import '../stylesheets/index.css';

import { 
    Container,
    Div,
    H1,
    Nav, 
    Navbar, 
    NavbarBrand, 
    NavDropdown,
    Image, 
    Button
} from "react-bootstrap";
import masonicLogo from '/images/masonicLogo.jpg';

const logoImg = new Image();
logoImg.src = masonicLogo;


class TopNavComponent extends Component{
  state = {post: null};

  componentDidMount(){
    axios.get("https://main.d3okqfz7es8olg.amplifyapp.com")
        .then((response)=>
        this.setState({
            post: response.data})
        );
      }
  
      render(){
        return(
        <Fragment>
      <Div id="navContainer">
        <Container fluid ="sm">
        <Navbar className="navbar navbar-expand-sm sticky-top justify-content-evenly">
          <NavbarBrand className="navbar-brand">
            <Nav.Link href="index.html">
              <Image className="img-fluid thumbnail" src={masonicLogo} alt="masonic logo" width="100" height="200"/> 
            </Nav.Link> 
          </NavbarBrand>
          <NavbarBrand className="navbar-brand">
            <H1 className="h1">Masonic Lodge St. John #7</H1>
          </NavbarBrand>
          <NavDropdown className="dropdown">
            <Button className="btn dropdown-toggle ml-auto" type="button" data-toggle="dropdown" data-bs-target="#nav1">
              <span className="navbar-toggler-icon my-toggler"></span>
            </Button>
            <Navbar className="navbar-collapse collapse">
              <Nav className="dropdown-menu">
                <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey="#navContainer">Home</Nav.Link></Nav.Item>
                <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey="#sloganSection">About Us</Nav.Link></Nav.Item>
                <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey="#previousEvents">Previous Events</Nav.Link></Nav.Item>
                <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey="#upcomingEvents">Upcoming Events</Nav.Link></Nav.Item>
                <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey="#bottomNav">Connect With Us</Nav.Link></Nav.Item>
              </Nav>
            </Navbar>
          </NavDropdown>
        </Navbar>
      </Container>
      </Div>
    </Fragment>
    );
  }
}

export default TopNavComponent;