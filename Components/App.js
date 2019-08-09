import React from 'react'
import {Route,Switch} from 'react-router-dom'
import HomePage from './Home/HomePage'
import AboutPage from './About/AboutPage'
import Header from './Common/Header'
import PageNotFound from './PageNotFound'
import CoursesPage from './Courses/CoursesPage'
function App(){ 
  return(
    <div className="container-fluid">
      <Header/>
      <Switch >  //switch allows us to declare that only one route should match.
      <Route exact path='/' component = {HomePage}/>
      <Route path='/about' component = {AboutPage}/>
      <Route path='/courses' component={CoursesPage}/>
      <Route component={PageNotFound}/>
      </Switch>
{/* Switch in routes acts as a switch in js. notice that there is no path for PageNotFound file as when none of the routes match, this page will execute.*/}

    </div>
  )
}

export default App