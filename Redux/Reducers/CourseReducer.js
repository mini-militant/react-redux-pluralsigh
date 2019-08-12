export default function courseReducer(state=[],action){
    switch(actio.type){
      case "CREATE_COURSE": 
        return [...state,{...action.course}]
      default:
        return state;
    }
}