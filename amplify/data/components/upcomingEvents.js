import React, {Fragment, Component} from "react";
import axios from "axios";

import '../stylesheets/App.css';
import '../stylesheets/index.css';
import {
    Button,
    Alert,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
} from "react-bootstrap";
import CardContainer from "./cardComponent";

const GetCardData = () => {
    
}

//FIXME: add array to hold card data from db
//use GetCardData to populate each db entry in new function
//export UpcomingEventsFragment

function UpcomingEventsFragment() {
    //FIXME: use GetCardData to work with fragment

}

class UpcomingEventsComponent extends Component{
    state = {post: null};

    componentDidMount(){
        axios.get("https://main.d3okqfz7es8olg.amplifyapp.com")
            .then((response)=>
            this.setState({
                post: response.data})
            ); 
        }

        render(){
            return UpcomingEventsFragment;
        }
}

export default UpcomingEventsComponent;