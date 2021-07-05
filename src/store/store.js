import { createStore, combineReducers } from "redux";

import { modalReducer } from "../reducers/modalReducer";

const reducers = combineReducers({
  modal: modalReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
