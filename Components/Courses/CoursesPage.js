import React from 'react'
import {connect} from 'react-redux'
import * as CourseActions from '../../Redux/Actions/CourseActions'
import PropTypes from 'prop-types'

class CoursesPage extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      course:{
        title:""
      }
    };    
  }

  handleChange=(event)=>{    
    const course={ ...this.state.course, title:event.target.value };
    //the above code creates a copy of course object with an updated title.
    //with object spread, values on the right override those on the left.
    this.setState({
      course:course
    });
   }

  handleSubmit=(event)=>{
    event.preventDefault();
    this.props.createCourse(this.state.course);
  } 

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        
        <input type="text" 
        onChange={this.handleChange}
        value={this.state.course.title}
        />

        <input type="submit" value="Save"/>
        {this.props.courses.map(course=>(
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    )
  }
}

CoursesPage.propTypes={
  courses : PropTypes.array.isRequired,
  createCourse : PropTypes.func.isRequired
}

//this function determines what state is passed to our component via props.
function mapStateToProps(state, ownProps){
  return{
    courses:state.courses   //be specific.request only the data that your component needs.
  }
}

//this function lets us declare what actions to pass to our component on props.
function mapDispatchToProps(dispatch){
  return{
    //if you dont call dispatch, nothing will happen.Redux get notifies for actions by dispatch.
    createCourse : course => dispatch(CourseActions.createCourse(course))
  }
}

export default connect(mapStateToProps, mapDispatchToProps )( CoursesPage )
//connect returns a fuction.That function then calls our component .
//mapDispatchToProps in connect determines what actions are available on props in our component.