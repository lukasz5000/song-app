import axios, {AxiosPromise} from 'axios';
import {SongDto} from "./models";

const url: string = 'http://localhost:4000';
export const songsEndpoint = `${url}/songs`;

export const getAllSongs: AxiosPromise<SongDto[]> = axios.get(songsEndpoint);