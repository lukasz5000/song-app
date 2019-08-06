import {combineReducers} from "redux";
import {albumsReducer} from "./albumsReducer";

export const rootReducer = combineReducers({
    albums: albumsReducer,
});

export type AppState = ReturnType<typeof rootReducer>