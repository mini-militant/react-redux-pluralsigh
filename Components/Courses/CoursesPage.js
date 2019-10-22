import React from 'react'
import {connect} from 'react-redux'
import * as CourseActions from '../../Redux/Actions/CourseActions'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'

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
    const courseName={ ...this.state.course, title:event.target.value };
    //the above code creates a copy of course object with an updated title.
    //with object spread, values on the right override those on the left.
    this.setState({
      course:courseName
    });
   
   }

  handleSubmit=(event)=>{
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  } 

  render(){
    console.log(this.props)
    return(
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        
        <input type="text" 
        onChange={this.handleChange}
        value={this.state.course.title}
        />

        <input type="submit" value="Save"/>
        {this.props.coursesR.map(course=>(
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    )
  }
}

CoursesPage.propTypes={
  coursesR : PropTypes.array.isRequired,
  actions : PropTypes.object.isRequired
}

//this function determines what state is passed to our component via props.
function mapStateToProps(state, ownProps){
  console.log('mao state to props',state)
  return{
    coursesR:state.coursesRoot   //be specific.request only the data that your component needs.
  }
}

//this function lets us declare what actions to pass to our component on props.
function mapDispatchToProps(dispatch){
  return{
    //if you dont call dispatch, nothing will happen.Redux get notifies for actions by dispatch.
    actions : bindActionCreators(CourseActions,dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps )( CoursesPage )
//connect returns a fuction.That function then calls our component .
//mapDispatchToProps in connect determines what actions are available on props in our component.