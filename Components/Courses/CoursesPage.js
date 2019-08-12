import React from 'react'

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


  render(){
    return(
      <form>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        
        <input type="text" 
        onChange={this.handleChange}
        value={this.state.course.title}
        />

        <input type="submit" value="Save"/>
      </form>
    )
  }
}
export default CoursesPage