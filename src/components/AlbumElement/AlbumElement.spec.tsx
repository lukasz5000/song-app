import * as React from 'react';
import {AlbumElementComponent, mapStateToProps, Props, StateProps} from "./AlbumElement";
import { shallow } from 'enzyme';
import {AppState} from "../../reducers/rootReducer";
import {DeepPartial} from "redux";
import {ToggleIcon} from "../ToggleIcon/ToggleIcon";

describe('AlbumElement:', () => {
    describe('Component:', () => {
        it('after click toggleIcon should call callback with correct id', () => {
            const props: Props = {
                id: 1,
                album: {id: 1, name: 'test name', band: 'test band', isOpen: false, songs: ['s1']},
                toggleAlbumFn: jest.fn()
            };
            const spy = spyOn<Props>(props, 'toggleAlbumFn');
           const element = shallow(<AlbumElementComponent {...props} />);
           element.find(ToggleIcon).simulate('click');
           expect(spy).toHaveBeenCalledWith(1);
        });
    });

    describe('mapStateToProps:', () => {
        it('should get album by id', () => {
            const appState: DeepPartial<AppState> = {
                albums: {
                    albums: [{
                        id: 1
                    }, {
                        id: 2,
                        name: 'test name',
                        band: 'test band',
                        isOpen: false,
                        songs: ['test']
                    }]
                }
            };
            const stateProps: StateProps = mapStateToProps(appState as AppState, {id: 2});
            const expectedStateProps: StateProps = {
                album: {
                    id: 2,
                    name: 'test name',
                    band: 'test band',
                    isOpen: false,
                    songs: ['test']
                }
            };
            expect(stateProps).toEqual(expectedStateProps);
        });
    });
});

export {
    // Use an empty export.
    // https://github.com/Microsoft/TypeScript/issues/15230
}