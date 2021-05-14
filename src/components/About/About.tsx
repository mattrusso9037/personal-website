import React, {FC, MutableRefObject} from 'react';
import './about.scss';
import {Section} from '../common/Section/Section';
import {AboutItem} from './AboutItem/AboutItem';
import {aboutConfig} from './aboutConfig';

interface IAboutProps {
    aboutRef: MutableRefObject<null | HTMLDivElement>;
}

export const About: FC<IAboutProps> = ({aboutRef}) => {
    return (
        <div className={'About'} ref={aboutRef}>
            <Section title={'About'}>
                    {aboutConfig.map((item) => (
                            <AboutItem
                                title={item.title}
                                bodyText={item.bodyText}
                                icon={item.icon}
                            />
                        )
                    )}
            </Section>
        </div>
    )
};