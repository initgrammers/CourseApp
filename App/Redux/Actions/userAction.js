import { user } from "./actionsType";
export const setUser = _user => {
  return {
    type: user.SET_USER,
    payload: _user
  };
};

export default {
  setUser
};
