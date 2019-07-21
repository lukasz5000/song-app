import {CoordinatesState} from '../models';
import {
    ADD_NEW_COORDINATES,
    CoordinatesAction,
    GET_ALL_COORDINATES,
    GET_NEW_COORDINATES
} from "../actions/actionsTypes";

const initialState: CoordinatesState = {
    coordinates: [],
    newCoordinates: [],
};

export function coordinatesReducer(
    state = initialState,
    action: CoordinatesAction
): CoordinatesState {
    switch (action.type) {
        case GET_ALL_COORDINATES: {
            return {
                ...state,
                coordinates: action.payload,
            };
        }
        case ADD_NEW_COORDINATES: {
            // add this new coordinates to the list in inside get new coordinates.
            return {
                ...state,
                coordinates: [...state.coordinates],
            };
        }
        case GET_NEW_COORDINATES: {
            return {
                ...state,
                coordinates: [...state.coordinates, ...action.payload],
                newCoordinates: [...action.payload],
            };
        }
        default:
            return state
    }
}