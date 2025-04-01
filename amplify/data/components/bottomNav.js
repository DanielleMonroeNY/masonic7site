import React, {Component, Fragment} from "react";
import axios from "axios";
//import '../stylesheets/App.css';
import '../stylesheets/index.css';
import {facebook, instagram} from '../images';
import{
    Container,
    Div,
    Row,
    Col,
    H2,
    Nav
} from "react-bootstrap";

class BottomNavComponent extends Component{
  state = {botNav: null};

  //add componentDidMount function here
  componentDidMount(){
    axios.get("https://main.d3okqfz7es8olg.amplifyapp.com")
    .then((response)=> this.setState({post: response.data})
  );
  }

//FIXME: Place this section of code into the class BottomNav
render(){
  return (
    <Fragment>
      <Div id="bottomNav">
        <Container fluid="sm">
          <Div id="bottomNavTitle">
            <Row className="row">
              <H2>
                Connect With Us!
              </H2>
            </Row>
          </Div>
          <Div id="connectInfo">
            <Row className="row row-cols-2">
              <Col className="col-sm-8" >
                <p>For membership, event, or collaboration information, please email:
                  <Nav.Link id="emailLink" href="mailto:MasonicStJohn7@gmail.com">MasonicStJohn7@gmail.com</Nav.Link>
                </p>
              </Col>
              <Col className="col-sm-4 justify-content-start" id="socials">
                <Row className="row">
                  <Col className="col-sm-6" id="fbSocial">
                    <Nav.Link href="index.html">
                      <img className="img-fluid" src={facebook} class="img-thumbnail" alt="masonic logo" width="50" height="50"/> 
                    </Nav.Link>   
                  </Col>
                  <Col className="col-sm-6" id="igSocial">
                    <Nav.Link href="#topNav">
                      <img className="img-fluid" src={instagram} class="img-thumbnail" alt="masonic logo" width="50" height="50"/> 
                    </Nav.Link> 
                  </Col>
                </Row>
              </Col>
            </Row>
          </Div>
          <Div class="d-flex justify-content-end" id="backToTopBottom">
            <Nav.Link href="#logoDiv">Back To Top</Nav.Link>
          </Div>
        </Container>
      </Div>
    </Fragment>
  );
 }
}

export default BottomNavComponent;
