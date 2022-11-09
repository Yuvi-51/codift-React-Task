const initialState = {
  data: [],
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE":
      const data = action.payload;
      console.log(data);
      return {
        ...state,
        data: [...state.data, data],
      };
  
    default:
      return state;
  }
};

export default appReducer;
