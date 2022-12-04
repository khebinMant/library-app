import { types } from "../types/types"


 
const initialState = []

export const libraryReducer = (state=initialState, action) => {
    
    switch (action.type) {

        case types.createBook:
            return [
                ...state,
                action.payload
            ]

        case types.updateBook:
            let tempU = [...state]
            tempU[action.payload.bookIndex] = action.payload.book
            return[
                ...tempU
            ]

        case types.deleteBook:
            let tempD = [...state]
            tempD.splice(action.payload,1)
            return [
                ...tempD
            ]
    
        default:
            return state;
    }
}
