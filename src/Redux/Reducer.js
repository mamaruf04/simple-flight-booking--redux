import { BOOK, DELETE } from "./ActionType";

const initialValue = [];

const bookingReducer = (state = initialValue, action) => {
    switch (action.type) {
        case BOOK:
            return[
                // ...state,
            ]

        case DELETE:
            return[
                // ...state,
            ]
    
        default:
            return state;
    }
}

export default bookingReducer;