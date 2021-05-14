import React from 'react';
import {shallow} from 'enzyme';
import {Button} from "./Button";

describe('Button component', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<Button type={'primary'} text={'Test'} />);

        expect(wrapper.find('button').text()).toBe('Test');
    });

    it('Should call onClick when pressed', () => {
        const fn = jest.fn();

        const wrapper = shallow(<Button type={'primary'} text={'Test'} onClick={fn} />);

        wrapper.find('button').simulate('click');

        expect(fn).toHaveBeenCalledTimes(1);
    });
});
