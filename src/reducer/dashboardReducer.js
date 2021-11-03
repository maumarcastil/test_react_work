const initialState = {
  menuOption: "Welcome",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MENU_OPTION":
      return {
        ...state,
        menuOption: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
