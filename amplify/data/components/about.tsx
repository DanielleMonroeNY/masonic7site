import React, {Component, Fragment} from "react";
import axios from "axios";
import '../stylesheets/index.css';
//import * as bootstrap from "react-bootstrap";
import Container from "../../../node_modules/react-bootstrap/Container";
import Row from "../../../node_modules/react-bootstrap/Row";
import Image from "../../../node_modules/react-bootstrap/Image";

//import { render } from "@testing-library/react";

//const backToTopLinkRef = document.getElementById("logoDiv");

class AboutUsComponent extends Component{
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
        <Container id="sloganSection">
          <Container className="container-fluid justify-content-center">
            <Row className="row" id="sloganSectDiv">
              <h2 className="h2" id="sloganTitle">Follow Reason</h2>
            </Row>
            <Row className="row" id="sloganText">
              <h4 className="h4">We are a fraterity that values both its brotherhood and community.</h4>
            </Row>
            <Row>
              <Container className="d-flex justify-content-end" id="backToTop">
                <a href="#logoDiv">Back To Top</a>
              </Container>
            </Row>
          </Container>
      </Container>
    );
  }
}

export default AboutUsComponent;