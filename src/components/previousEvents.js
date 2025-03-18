import React, {Component, Fragment} from "react";
import axios from "axios";
//import '../stylesheets/App.css';
import '../stylesheets/index.css';
import{
    Container,
    Card,
    Row,
    H2
} from "react-bootstrap";


class PostPreviousEventsComponent extends Component{
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
            {this.state.post && (
                <Container className="container-fluid justify-content-center" id="previousEvents">
                <Row className="row">
                  <H2 className="h2">Previous Events</H2>
                </Row>
                <Row className="row" id="carouselRow">
                  
                </Row>
                </Container>
            )}
        </Fragment>
        );
    }
}



//FIXME: Bring in carousel/previous events info from db
//FIXME: Create an array to hold previous events SHOULD BE ALLOWED TO DO IN ONE LINE
const PETitleContainer = () => (
    <Container className="container-fluid justify-content-center" id="previousEvents">
      <Row className="row">
        <h2 className="h2">Previous Events</h2>
      </Row>
      <Row className="row" id="carouselRow">
        
      </Row>
      </Container>
    
);
export default PostPreviousEventsComponent;