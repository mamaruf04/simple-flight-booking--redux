import { BOOK, DELETE } from "./ActionType";

const initialValue = [];

const bookingReducer = (state = initialValue, action) => {
    switch (action.type) {
        case BOOK:
            return[
            ...state,
                action.payload
        ]
        case DELETE:
            const remaining = state.filter(remain => remain.id !== action.payload)
            return remaining
            
        default:
            return state;
    }
}
console.log(initialValue);

export default bookingReducer;