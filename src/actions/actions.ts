import {ADD_NEW_COORDINATES, CoordinatesAction, GET_ALL_COORDINATES, GET_NEW_COORDINATES} from "./actionsTypes";
import {ThunkAction} from "redux-thunk";
import {AppState} from "../reducers/rootReducer";
import {Action} from "redux";
import {CoordinatesElement, CoordinatesList} from "../models";
import {getAllCoordinatesHttp, getNewCoordinatesHttp, saveCoordinatesHttp} from "../api";

// ACTIONS

export const getAllCoordinates = (payload: CoordinatesList): CoordinatesAction => ({
    type: GET_ALL_COORDINATES,
    payload,
});

export const getNewCoordinates = (coordinates: CoordinatesList): CoordinatesAction => ({
    type: GET_NEW_COORDINATES,
    payload: coordinates,
});

export const addNewCoordinates = (coordinates: CoordinatesElement): CoordinatesAction => ({
    type: ADD_NEW_COORDINATES,
    payload: coordinates,
});

// ACTION CREATORS

export const downloadCoordinates = (): ThunkAction<void, AppState, null, Action<string>> => (dispatch: any) => {
    getAllCoordinatesHttp.then((response) => {
        dispatch(getAllCoordinates(response.data as CoordinatesList));
    });
};

export const downloadNewCoordinates = (): ThunkAction<void, AppState, null, Action<string>> => (dispatch, getState: () => AppState) => {
    const coordinates: CoordinatesList = getState().coordinates.coordinates;
    const lastCoordinates = coordinates[coordinates.length - 1] as Required<CoordinatesElement>;
    getNewCoordinatesHttp(lastCoordinates.id + 1).then((response) => {
        dispatch(getNewCoordinates(response.data));
    });
};

export const saveCoordinates = (coordinates: CoordinatesElement): ThunkAction<void, AppState, null, Action<string>> => (dispatch) => {
    saveCoordinatesHttp(coordinates);
    dispatch(addNewCoordinates(coordinates));
};