import axios from "axios";

export const TOGGLE_ACTION = "TOGGLE_ACTION";
export const FETCH_DOCTORS = "FETCH_DOCTORS";
export const FETCH_DOCTOR = "FETCH_DOCTOR";
export const TELL_TWILIO = "TELL_TWILIO";

const HOST = "http://localhost:8080";

export function toggleAction(open) {
  return {
    type: TOGGLE_ACTION,
    payload: open
  };
}

export function fetchDoctors(info) {
  const response = axios.post(`${HOST}/doctors`, info);

  return {
    type: FETCH_DOCTORS,
    payload: response
  };
}

export function fetchDoctor(provider_id) {
  const response = axios.get(`${HOST}/doctors/${provider_id}`);
  console.log(response);

  return {
    type: FETCH_DOCTOR,
    payload: response
  };
}

export function itemsIsLoading(bool) {
  return {
    type: "ITEMS_LOADING",
    isLoading: bool
  };
}
export function twilioSuccess(bool) {
  return {
    type: "TWILIO_SUCCESS",
    isSuccess: bool
  };
}

export function tellTwilio(medium) {
  return dispatch => {
    switch (medium.medium) {
      case "sms":
        let request = axios({
          method: "POST",
          url: `${HOST}/api/send`,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          data: {
            recipient: medium.recipient,
            message: medium.message
          }
        });
        console.log(medium.recipient, medium.message, "in action");
        // console.log (request.data, 'is req')
        // const toSend = axios.post(`${HOST}/api/send`, {recipient, message});
        request
          .then(res => {
            dispatch(twilioSuccess(true));
            console.log(res, "is going to twilio");
            return {
              type: TELL_TWILIO,
              payload: res
            };
          })
          .catch(err => {
            dispatch(twilioSuccess(false));
            console.log(err);
          });

        break;

      // case web:
      // break;

      // case email:
      // break;

      // case call:
      // break;

      default:
        break;
    }
  };
}
