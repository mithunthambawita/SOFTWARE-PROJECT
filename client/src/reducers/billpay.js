import { GET_HISTORY, HISTORY_ERROR, CLEAR_HISTORY } from '../actions/types';

const initialState = {
  billpay: [],
  billpays: [],
  loading: true,
  error: {},
};

export default function billpay(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_HISTORY:
      return {
        ...state,
        billpay: payload,
        loading: false,
      };

    case HISTORY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_HISTORY:
      return {
      ...state,
      billpay: null,
      loading: false
      };
    default:
        return state;
  }
}
