import { userActionTypes } from "./user.types";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { userType } from "../../types/Types";

interface userState {
    currentUser: null | userType,
    isLoading?: boolean
}

const INITIAL_STATE: userState = {
    currentUser: null,
}
export const userReducer = (state = INITIAL_STATE, action: any) => {

    switch(action.type) {
        case userActionTypes.SET_CURRENT_USER:
        return {
            ...state,
            currentUser: action.payload
        }
        default:
            return state
    }

}