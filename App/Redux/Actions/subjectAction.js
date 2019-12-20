import { subject } from "./actionsType";
export const setSelectedSubject = _user => {
  return {
    type: subject.SELECTED_SUBJECT,
    payload: _subject
  };
};

export default {
  setSelectedSubject
};
