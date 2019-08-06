import {Album, Collapsable} from "../models";
import {getAlbumSelector, getAlbumsSelector, isAllAlbumsCloseSelector} from "./selectors";
import {AppState} from "../reducers/rootReducer";
import {DeepPartial} from "redux";

describe('selectors:', () => {
    describe('should get album by id', () => {

        it('should return empty object if album is not define', () => {
            const appState: DeepPartial<AppState> = {
                albums: {
                    albums: []
                }
            };
            const album: Collapsable<Album> = getAlbumSelector(appState as AppState, 1);
            expect(album).toEqual({});
        });
    });
});

export {
    // Use an empty export.
    // https://github.com/Microsoft/TypeScript/issues/15230
}