import React, {FC, MutableRefObject} from 'react';
import './about.scss';
import {Section} from '../common/Section/Section';

interface IAboutProps {
    aboutRef: MutableRefObject<null | HTMLDivElement>;
}

export const About: FC<IAboutProps> = ({aboutRef}) => {
    return (
        <div className={'About'} ref={aboutRef}>
            <Section title={'About'}>
                <div></div>
            </Section>
        </div>
    )
};