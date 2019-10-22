import {combineReducers} from 'redux';
import coursesIn from './CourseReducer'

const rootReducer = combineReducers({
  coursesRoot:coursesIn
});

export default rootReducer;