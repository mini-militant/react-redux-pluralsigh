import React from 'react'
import {Route} from 'react-router-dom'
import HomePage from './Home/HomePage'
import AboutPage from './About/AboutPage'

function App(){
  return(
    <div className="container-fluid">
      <Route exact path='/' component = {HomePage}/>
      <Route path='/about' component = {AboutPage}/>
    </div>
  )
}

export default App