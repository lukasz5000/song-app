import {CoordinatesElement, CoordinatesList} from "../models";

export const GET_ALL_COORDINATES = 'GET_ALL_COORDINATES';
export const GET_NEW_COORDINATES = 'GET_NEW_COORDINATES';
export const ADD_NEW_COORDINATES = 'ADD_NEW_COORDINATES';

export type addNewCoordinates = {
    type: typeof ADD_NEW_COORDINATES,
    payload: CoordinatesElement,
}

export type getAllCoordinates = {
    type: typeof GET_ALL_COORDINATES,
    payload: CoordinatesList,
}

export type getNewCoordinates = {
    type: typeof GET_NEW_COORDINATES,
    payload: CoordinatesList;
}
export type CoordinatesAction = getAllCoordinates | getNewCoordinates | addNewCoordinates;