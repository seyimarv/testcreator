import { userActionTypes } from "./user.types";
import { userType } from "../../types/Types";


export const setCurrentUser =( user: null | userType) => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})