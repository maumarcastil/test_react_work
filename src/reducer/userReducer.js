const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        data: action.payload,
      };
    case "LOGOUT_REQUEST":
      return {
        data: action.payload,
      };
    case "LOGIN_SESION":
      return {
        ...state,
        sesion: action.payload,
      };
    case "LOGOUT_SESION":
      return {
        ...state,
        sesion: action.payload,
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
