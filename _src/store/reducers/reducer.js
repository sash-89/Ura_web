const initialState = {
  menu: ['asdas'],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case SET_HOME_CONTENT.SUCCESS:
    //   return {
    //     ...state,
    //     homeContent: payload.data.home,
    //   };

    default:
      return state;
  }
};

export default reducer;
