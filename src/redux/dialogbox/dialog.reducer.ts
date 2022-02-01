import { dialogBoxTypes } from "./dialogbox.types";

interface dialogState {
  Open: boolean;
  Question: String;
  fn: any;
}

const INITIAL_STATE: dialogState = {
  Open: false,
  Question: "",
  fn: null,
};

export const dialogBoxReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case dialogBoxTypes.TOGGLE_DIALOG_BOX:
      return {
        ...state,
        Open: !state.Open,
        Question: action.payload.Question,
        fn: action.payload.fn,
      };
    default:
      return state;
  }
};
