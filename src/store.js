import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import jobReducer from "./Reducers/jobReducer";
import candidateReducer from "./Reducers/candidateReducer";
import assessmentReducer from "./Reducers/assessmentReducer";

const rootReducer = combineReducers({
  jobs: jobReducer,
  candidates: candidateReducer,
  assessments: assessmentReducer,
});

const initialState = {};
const middleware = [thunk];

const Store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
