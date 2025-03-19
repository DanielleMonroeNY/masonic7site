import React, {Component, Fragment} from "react";
import axios from "axios";
import '../stylesheets/index.css';
//import * as bootstrap from "react-bootstrap";
import { 
    Container,
    Div,
    H2,
    H4,
    Row
} from "react-bootstrap";

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
      <Fragment>
        <Div id="sloganSection">
          <Container className="container-fluid justify-content-center">
            <Row className="row" id="sloganSectDiv">
              <H2 className="h2" id="sloganTitle">Follow Reason</H2>
            </Row>
            <Row className="row" id="sloganText">
              <H4 className="h4">We are a fraterity that values both its brotherhood and community.</H4>
            </Row>
            <Row>
              <Div className="d-flex justify-content-end" id="backToTop">
                <a href="#logoDiv">Back To Top</a>
              </Div>
            </Row>
          </Container>
      </Div>
    </Fragment>
    );
  }
}

export default AboutUsComponent;