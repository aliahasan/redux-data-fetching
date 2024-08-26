// import { applyMiddleware, createStore } from "redux";
// import todoReducer from "./services/reducers/todosReducer";
// import { thunk } from "redux-thunk";

// const store = createStore(todoReducer, applyMiddleware(thunk));
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./features/posts/postSlice";
const store = configureStore({
  reducer: {
    posts: postSlice,
  },
});

export default store;
