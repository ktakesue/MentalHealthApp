import { FETCH_DOCTOR } from "../actions/index";

const initialState = {
  activeDoctor: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DOCTOR:
      //   const doctor = action.payload.data;
      //   const newState = [...state];
      //   newState[doctor.id] = doctor;
      //   return newState;
      //   return {
      //     ...state,
      //     [action.payload.data.id]: action.payload.data
      //   };
      return { ...state, activeDoctor: { ...state.activeDoctor } };
  }
  return state;
}
