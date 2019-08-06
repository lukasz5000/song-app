import mockAxios from 'jest-mock-axios';
import {downloadAllSongs, setAlbums} from "./actions";
import {AppState} from "../reducers/rootReducer";

describe('actions:', () => {

    afterEach(() => {
        mockAxios.reset();
    });

    it('downloadAllSongs:', () => {
        mockAxios.mockResponse({ data: [] });

        const dispatchFnHandler = {
            dispatch: jest.fn()
        };
        const spyOnDispatch = spyOn(dispatchFnHandler, 'dispatch');
        downloadAllSongs()(dispatchFnHandler.dispatch as any, () => ({} as AppState), null);
        expect(spyOnDispatch).toHaveBeenCalledWith(setAlbums([]));
    });
})

export {
    // Use an empty export.
    // https://github.com/Microsoft/TypeScript/issues/15230
}