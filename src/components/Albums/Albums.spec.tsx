import * as React from 'react';
import {shallow} from 'enzyme';
import {DeepPartial} from "redux";
import {AppState} from "../../reducers/rootReducer";
import {AlbumsComponent, mapStateToProps, Props, StateProps} from "./Albums";
import {AlbumElement} from "../AlbumElement/AlbumElement";

describe('Albums:', () => {
    describe('Component:', () => {
       it('should shallow correct elements', () => {
           const props: Props = {
               isAllAlbumsClose: false,
               albums: [{
                   id: 1, name: 'name', band: 'band', isOpen: false, songs: ['song 1']
               }],
               toggleAlbumsFn: jest.fn,
           };
          const element = shallow(<AlbumsComponent {...props} />);
          const albumElements = element.find(AlbumElement);
          expect(albumElements.length).toBe(1);
       });
    });

    describe('mapStateToProps:', () => {
        it('should get correct state props', () => {
            const appState: DeepPartial<AppState> = {
                albums: {
                    albums: [{
                        id: 1, name: 'name', band: 'band', isOpen: false, songs: ['song 1']
                    }]
                }
            };
            const stateProps: StateProps = mapStateToProps(appState as AppState);
            const expectedStateProps: StateProps = {
                albums: [{
                    id: 1, name: 'name', band: 'band', isOpen: false, songs: ['song 1']
                }],
                isAllAlbumsClose: true,
            };
            expect(stateProps).toEqual(expectedStateProps);
        });
    });
});

export {
    // Use an empty export.
    // https://github.com/Microsoft/TypeScript/issues/15230
}