import * as types from'./ActionTypes'

export function createCourse(courseName){
  return{
    type:types.CREATE_COURSE,
    course:courseName
  }
}

//the object is an action so the function is called action creator.