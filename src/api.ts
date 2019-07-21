import axios from 'axios';
import {CoordinatesElement} from "./models";

const url: string = 'http://localhost:4000';
const coordinatesEndpoint = `${url}/coordinates`;

export const getAllCoordinatesHttp = axios.get(coordinatesEndpoint);
export const getNewCoordinatesHttp = (lastId: number) => axios.get(`${coordinatesEndpoint}?id_gte=${lastId}`);
export const saveCoordinatesHttp = (coordinates: CoordinatesElement) =>
    axios.post(coordinatesEndpoint, {...coordinates});