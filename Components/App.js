import React from 'react'
import {Route} from 'react-router-dom'
import HomePage from './Home/HomePage'
import AboutPage from './About/AboutPage'
import Header from './Common/Header'
function App(){
  return(
    <div className="container-fluid">
      <Header/>
      <Route exact path='/' component = {HomePage}/>
      <Route path='/about' component = {AboutPage}/>
    </div>
  )
}

export default App