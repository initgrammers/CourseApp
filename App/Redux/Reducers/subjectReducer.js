import { subject } from "../Actions/actionsType";

const initialState = {
  selectedSubject: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case subject.SELECTED_SUBJECT:
      return { ...state, selectedSubject: action.payload };
    default:
      return state;
  }
};

export default reducer;
