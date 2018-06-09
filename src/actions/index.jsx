import axios from "axios";

export const TOGGLE_ACTION = "TOGGLE_ACTION";
export const FETCH_DOCTORS = "FETCH_DOCTORS";

const HOST = "http://localhost:8080";

export function toggleAction(open) {
  return {
    type: TOGGLE_ACTION,
    payload: open
  };
}

export function fetchDoctors(info) {

  const response = axios.post(`${HOST}/doctors/result`, info);

  return {
    type: FETCH_DOCTORS,
    payload: response
  };
}
