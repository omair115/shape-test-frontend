import { AnyAction } from "redux";
import { ISurveyFormReducerState, authReducerInitialState } from "./formReducerData";
import { SET_SURVEY_FORM } from "../../types";

const authReducer = (
  state: ISurveyFormReducerState = authReducerInitialState,
  action: AnyAction
) => {
  switch (action.type) {
    case SET_SURVEY_FORM:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
