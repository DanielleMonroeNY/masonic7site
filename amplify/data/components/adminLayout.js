import React, {Fragment, Component} from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import '../stylesheets/App.css';
import '../stylesheets/index.css';

import { 
    Container,
    Div,
    H1,
    Row,
    Image, 
    Button
} from "react-bootstrap";
//import masonicLogo from '/images/masonicLogo.jpg';

import TopNavFragment from "./components/topNav";
import BottomNavFragment from "./components/bottomNav";

//FIXME: NEEDS LOGIN AREA AND AUTHENTIFICATION
class AdminLoginComponent extends Component{
  state = {post: null};

  componentDidMount(){
    axios.get("https://main.d3okqfz7es8olg.amplifyapp.com")
    .then((response)=>
    this.setState({
        post: response.data})
    );
  }

  //FIXME: Rend

}