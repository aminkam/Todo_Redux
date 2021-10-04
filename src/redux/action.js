import { ADD, COMPLETE, DELETE, EDIT } from "./actionType"



export const add = (id) => {
    return {
        type :ADD,
        life : id
    }
}

export const del =(id) => {
    return {
        type :DELETE,
        life : id
    }
}

export const edit = (id, editTask) => {
    return {
        type : EDIT,
        life : {id,editTask}
    }
}

export const complete = (id) => {
    return {
        type:COMPLETE,
        life:id
    }
}