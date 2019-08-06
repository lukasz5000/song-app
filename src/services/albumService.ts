import {Album, SongDto} from "../models";
import {groupBy, map, Dictionary} from 'lodash';

export const groupSongsToAlbums = (songs: SongDto[]): Album[] => {
    const groupedByAlbum: Dictionary<SongDto[]> =
        groupBy(songs, (e: SongDto) => e.album);
    let albumId = 1;
    return map(groupedByAlbum, (e: SongDto[]) => {
        const returnElement = {
            id: albumId,
            band: e[0].band,
            name: e[0].album,
            songs: e.map((song: SongDto) => song.song)
        };

        albumId += albumId;

        return returnElement;
    });
};