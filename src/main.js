import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './stylesheets/index.css'
import App from './App.jsx'


import {
  React,
  ReactDOM,
  createContainer
 } from "react"
//import createRoot from "react-dom/client"

import "./stylesheets/App.css"
import "./stylesheets/index.css"

//Import components of homepage
import Header from "./components/header"
import TopNavFragment from "./components/topNav"
import AboutUsFragment from "./components/about"
import PreviousEventsFragment from "./components/previousEvents"
import UpcomingEventsFragment from "./components/upcomingEvents"
import BottomNavFragment from "./components/bottomNav"
//import { createRoot } from "react-dom/client"

//functions to make js exports to jsx components
//const headerContainer = createContainer(Header)
//const topNavContainer = createContainer(TopNavFragment)
//const aboutUsContainer = createContainer(AboutUsFragment)
//const previousEventsContainer = createContainer(PreviousEventsFragment)
//const upComingEventsContainer = createContainer(UpcomingEventsFragment)
//const bottomNavContainer = createContainer(BottomNavFragment)


//consts for each section of the page
const headerContainer = document.getElementById('headerContainer')
const topNavContainer = document.getElementById('navSection')
const aboutUsContainer = document.getElementById('sloganSection')
const prevsiousEventsContainer = document.getElementById('previousEventsSection')
const upcomingEventsContainer = document.getElementById('upcomingEventsSection')
const bottomNavContainer = document.getElementById('bottomNavSection')

renter

//Create react Component to be rendered
const headerRoot = createRoot(headerContainer)
const topNavRoot = createRoot(topNavContainer)
const aboutUsRoot = createRoot(aboutUsContainer)
const previousEventsRoot = createContainer(prevsiousEventsContainer)
const upcomingEventsRoot = createContainer(upcomingEventsContainer)
const bottomNavRoot = createContainer(bottomNavContainer)


ReactDOM.createRoot(
  
)