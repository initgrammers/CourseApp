import { user } from "../Actions/actionsType";

const initialState = {
  user: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case user.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default reducer;
