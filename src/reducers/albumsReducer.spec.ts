import {AlbumsAction, setAlbums, toggleAlbum, toggleAlbums} from "../actions/actions";
import {Album, AlbumsState, Collapsable} from "../models";
import {albumsReducer, initialState} from "./albumsReducer";

describe('albumsReducer:', () => {

    it('should get initial state', () => {
        const result = albumsReducer(undefined, {} as AlbumsAction);
        expect(result).toEqual(initialState);
    });

    it('should set albums', () => {
        const albums:  Album[] = [
            {id: 1, name: 'test album', band: 'test band', songs: []}
         ];
        const action: AlbumsAction = setAlbums(albums);
        const result = albumsReducer(undefined, action);
        const expectedState: AlbumsState = {
            albums: [
                {id: 1, name: 'test album', band: 'test band', songs: [], isOpen: false}
            ]
        };
        expect(result).toEqual(expectedState);
    });

    it('should toggle album', () => {
        const albumId = 1;
        const initialState: AlbumsState = {
            albums: [
                {id: albumId, name: 'test album', band: 'test band', isOpen: false, songs: []},
                {id: 2, name: 'test album 2', band: 'test band 2', isOpen: true, songs: []}
            ]
        };
        const action: AlbumsAction = toggleAlbum(albumId);
        const result = albumsReducer(initialState, action);
        const expectedState: AlbumsState = {
            albums: [
                {id: albumId, name: 'test album', band: 'test band', isOpen: true, songs: []},
                {id: 2, name: 'test album 2', band: 'test band 2', isOpen: true, songs: []}
            ]
        };
        expect(result).toEqual(expectedState);
    });

    describe('toggle all albums', () => {
        it('should hide all albums when all of them are open', () => {
            const initialState: AlbumsState = {
                albums: [
                    {id: 1, name: 'test album', band: 'test band', isOpen: true, songs: []},
                    {id: 2, name: 'test album 2', band: 'test band 2', isOpen: true, songs: []}
                ]
            };
            const action: AlbumsAction = toggleAlbums();
            const result = albumsReducer(initialState, action);
            const expectedState: AlbumsState = {
                albums: [
                    {id: 1, name: 'test album', band: 'test band', isOpen: false, songs: []},
                    {id: 2, name: 'test album 2', band: 'test band 2', isOpen: false, songs: []}
                ]
            };
            expect(result).toEqual(expectedState);
        });

        it('should show all albums when all of them are close', () => {
            const initialState: AlbumsState = {
                albums: [
                    {id: 1, name: 'test album', band: 'test band', isOpen: false, songs: []},
                    {id: 2, name: 'test album 2', band: 'test band 2', isOpen: false, songs: []}
                ]
            };
            const action: AlbumsAction = toggleAlbums();
            const result = albumsReducer(initialState, action);
            const expectedState: AlbumsState = {
                albums: [
                    {id: 1, name: 'test album', band: 'test band', isOpen: true, songs: []},
                    {id: 2, name: 'test album 2', band: 'test band 2', isOpen: true, songs: []}
                ]
            };
            expect(result).toEqual(expectedState);
        });

        it('should hide all albums when one of them is open', () => {
            const initialState: AlbumsState = {
                albums: [
                    {id: 1, name: 'test album', band: 'test band', isOpen: false, songs: []},
                    {id: 2, name: 'test album 2', band: 'test band 2', isOpen: true, songs: []}
                ]
            };
            const action: AlbumsAction = toggleAlbums();
            const result = albumsReducer(initialState, action);
            const expectedState: AlbumsState = {
                albums: [
                    {id: 1, name: 'test album', band: 'test band', isOpen: false, songs: []},
                    {id: 2, name: 'test album 2', band: 'test band 2', isOpen: false, songs: []}
                ]
            };
            expect(result).toEqual(expectedState);
        });
    });
});

export {
    // Use an empty export.
    // https://github.com/Microsoft/TypeScript/issues/15230
}