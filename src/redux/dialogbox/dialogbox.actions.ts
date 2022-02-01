import { dialogBoxTypes } from "./dialogbox.types";

export const toggleDialogBox = (dialogObject: any) => ({
    type: dialogBoxTypes.TOGGLE_DIALOG_BOX,
    payload: dialogObject
})