const initialState = {
  state: "",
};

export const inventoryReducer = (state = initialState, { type, rest }) => {
  switch (type) {
    case "":
      return { ...state };

    default:
      return { ...state };
  }
};
