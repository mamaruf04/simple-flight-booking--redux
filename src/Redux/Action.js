import { BOOK, DELETE } from "./ActionType"

export const addBooking = (value) =>{
    return{
        type: BOOK,
        payload: value
    }
}
export const deleteBooking = (id) =>{
    return{
        type: DELETE,
        payload: id
    }
}

