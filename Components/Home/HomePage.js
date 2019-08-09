import React from 'react'
import {Link} from 'react-router-dom'

const HomePage=()=>(
  <div classname="jumbotron">
    <h1>Application Administration</h1>
    <p>React,Redux and React router for ultra-responsive web apps.</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn More
    </Link>
  </div>
)

export default HomePage;