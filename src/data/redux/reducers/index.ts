import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// Reducers
import formReducer from "./form/formReducer";

const rootReducer = combineReducers({
    form: persistReducer({ key: "form", storage }, formReducer),
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
