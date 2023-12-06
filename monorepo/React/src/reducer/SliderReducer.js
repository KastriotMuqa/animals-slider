const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SLIDER":
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      };
    case "CLEAR_SLIDER":
      return {
        ...state,
        data: {
          currentStep: 1,
        },
      };

    default:
      return state;
  }
};

export { reducer };
