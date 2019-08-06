import * as React from 'react';
import {shallow} from 'enzyme';
import {SongsElementComponent} from "./SongsElement";

describe('SongsElement:', () => {
    it('should render correct songs', () => {
        const songs: string[] = ['first', 'second']
        const element = shallow(<SongsElementComponent songs={songs} />);
        const liElements = element.find('li');
        expect(liElements.length).toBe(2);
        expect(liElements.at(0).props().children).toBe('first');
        expect(liElements.at(1).props().children).toBe('second');
    });
});

export {
    // Use an empty export.
    // https://github.com/Microsoft/TypeScript/issues/15230
}