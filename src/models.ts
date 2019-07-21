export type CoordinatesElement = {
    longitude: number;
    latitude: number;
    id?: number;
}
export type CoordinatesList = Array<CoordinatesElement>;

export type DrawCallback = (coordinates: CoordinatesElement) =>  void;

export type CoordinatesState = {
    coordinates: CoordinatesList;
    newCoordinates: CoordinatesList;
}