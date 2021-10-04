import { ADD, COMPLETE, DELETE, EDIT } from "./actionType"




const defaultTask = {
    tasks : [
        {
            name:'Amin Kammoun',
            isDone:false,
            id:Math.random(),
        }
    ]
}


const taskReducer = (state=defaultTask, action) => {
  if (action.type === ADD) {
      return { ...state,tasks: [...state.tasks, action.life]}

  }else if (action.type === DELETE) {
      return {...state,tasks:state.tasks.filter((el)=> el.id !== action.life)}

  }else if (action.type === EDIT) {
      return {
          ...state,tasks: state.tasks.map((el)=> el.id === action.life.id ? {...el, name:action.life.editTask}: el)
      }

  }else if (action.type === COMPLETE) {
      return {
          ...state,tasks: state.tasks.map((el)=> el.id === action.life ? {...el, isDone:!el.isDone}:el)
      };
      } else {
          return state;
      }
}

export default taskReducer