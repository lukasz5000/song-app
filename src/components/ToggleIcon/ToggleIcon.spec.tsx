import * as React from 'react';
import {shallow} from 'enzyme';
import {Props, ToggleIconComponent} from "./ToggleIcon";

describe('ToggleIcon:', () => {
    it('should render minus icon when component isOpen is true', () => {
        const props: Props = {
            isOpen: true,
            onClick: jest.fn(),
        };
        const element = shallow(<ToggleIconComponent {...props} />);
        const plusIcon = element.find('.text-success');
        const minusIcon = element.find('.text-danger');
        expect(plusIcon.length).toBe(0);
        expect(minusIcon.length).toBe(1);
    });

    it('should render plus icon when component isOpen is false', () => {
        const props: Props = {
            isOpen: false,
            onClick: jest.fn(),
        };
        const element = shallow(<ToggleIconComponent {...props} />);
        const plusIcon = element.find('.text-success');
        const minusIcon = element.find('.text-danger');
        expect(plusIcon.length).toBe(1);
        expect(minusIcon.length).toBe(0);
    });
});

export {
    // Use an empty export.
    // https://github.com/Microsoft/TypeScript/issues/15230
}