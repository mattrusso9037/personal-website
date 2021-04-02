import React from 'react';
import {shallow} from 'enzyme';
import {Header} from "./Header";
import {Button} from "../common/Button/Button";

describe('Renders header correctly', () => {
    it('Should render an image', () => {
        const wrapper = shallow(<Header />);

        expect(wrapper.find('img')).toBeTruthy();
    });

    it('should have correct source', () => {
        const wrapper = shallow(<Header />);
        const source = wrapper.find('img').prop('src');

        expect(source).toBe('nasa_img.jpg');
    });

    it('should have header text', () => {
        const wrapper = shallow(<Header />);
        const h1 = wrapper.find('h1');

        expect(h1.text()).toBe('Hi I\'m Matt Russo.I\'m a Software Engineer.');
    });

    it('should contain a button', () => {
        const wrapper = shallow(<Header />);

        expect(wrapper.contains(<Button type={'outline'} text={'Learn More'} />)).toBeTruthy();
    });

});
