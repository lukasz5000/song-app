import {Album, SongDto} from '../models';
import {groupSongsToAlbums} from "./albumService";

describe('albumService:', () => {
    describe('groupSongsToAlbums:', () => {
        it('should group songs to albums', () => {
            const songs: SongDto[] = [
                {
                    band: 'Cat Power',
                    album: 'Sun',
                    song: 'Human Being'
                },
                {
                    band: 'Beatles',
                    album: 'Abbey Road',
                    song: 'Maxwell\'s Silver Hammer'
                },
                {
                    band: 'Cat Power',
                    album: 'Sun',
                    song: 'Always On My Own'
                }
            ];
            const groupedAlbums: Album[] = groupSongsToAlbums(songs);
            const expectedAlbums = [{
                id: 1,
                band: 'Cat Power',
                name: 'Sun',
                songs: ['Human Being', 'Always On My Own']
            }, {
                id: 2,
                band: 'Beatles',
                name: 'Abbey Road',
                songs: ['Maxwell\'s Silver Hammer']
            }];
            expect(groupedAlbums).toEqual(expectedAlbums);
        });
    });
});

export {
    // Use an empty export.
    // https://github.com/Microsoft/TypeScript/issues/15230
}