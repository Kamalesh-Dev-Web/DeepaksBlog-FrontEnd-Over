/* eslint-disable import/no-anonymous-default-export */
export default (state = { currentId: 0 }, action) => {
  switch (action.type) {
    case "SET_ID":
      console.log(action.payload);
      return { ...state, currentId: action.payload };
    default:
      return state;
  }
};
