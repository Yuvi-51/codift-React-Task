const initailState = {
    data: [],
  };
  const Reducer = (state = initailState, action) => {
    switch (action.type) {
      case "SAVE":
        const data = action.payload;
        console.log(data);
        return {
          ...state,
          data: [...state.data, data],
       };
       default: return state;
    }};

    export default Reducer;

  