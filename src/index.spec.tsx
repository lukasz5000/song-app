import { shallow } from 'enzyme';
import {ToRender} from "./index";

describe('top render', () => {
    it('main component should shallow without error', () => {
        const element = shallow(ToRender);
        expect(element).toBeDefined();
    });
});
