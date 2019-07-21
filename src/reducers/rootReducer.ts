import {combineReducers} from "redux";
import {coordinatesReducer} from "./coordinatesReducer";

export const rootReducer = combineReducers({
    coordinates: coordinatesReducer,
});

export type AppState = ReturnType<typeof rootReducer>