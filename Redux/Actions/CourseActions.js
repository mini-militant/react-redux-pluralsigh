export function createCourse(course){
  return{
    type:"CREATE_COURSE",
    course:course
  }
}

//the object is an action so the function is called action creator.