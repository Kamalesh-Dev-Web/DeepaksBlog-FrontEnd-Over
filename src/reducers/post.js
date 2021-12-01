// reducer is a function which  accepts the state and payload as args

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { posts: [] }, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return { ...state, posts: action.payload.data };
    //   return action.payload;
    case "CREATE":
      return state;
    case "FETCH_POST":
      return { ...state, post: action.payload.post };
    case "CREATE_POST":
      console.log(action.payload);
      return { ...state, posts: [...state.posts, action.payload] };
    case "UPDATE_POST":
      console.log(action.payload);
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case "DELETE_POST": {
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    }

    case "COMMENT": {
      console.log(action.payload);
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id === action.payload._id) {
            return action.payload;
          }
          return post;
        }),
      };
    }
    default:
      return state;
  }
};
// can export reducers as deafult or anonymous
