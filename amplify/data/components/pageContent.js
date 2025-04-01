import React, {Fragment} from "react";
import '../App.css';
import { 
    Container,
    Row
} from "react-bootstrap";

//import page elements
import Header from "../header";
import TopNavFragment from "./topNav";
import AboutUsFragment from "./about";
import PreviousEventsFragment from "./previousEvents";
import UpcomingEventsFragment from "./upcomingEvents";
import BotomNavFragment from "./bottomNav";

//import logoDiv from TopNavFragment;
//import { render } from "@testing-library/react";

function Page(){
    return (
        <div className="PageContent">
            {Header},
            {TopNavFragment},
            {AboutUsFragment},
            {BotomNavFragment}
            
        </div>
        
    )
}

export default Page;