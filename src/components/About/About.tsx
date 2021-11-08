import React, {FC, MutableRefObject} from 'react';
import './about.scss';
import {Section} from '../common/Section/Section';
import {Icon} from '../common/Icon';
import { TechnologyItem } from './TechnologyItem/TechnologyItem';

interface IAboutProps {
    aboutRef: MutableRefObject<null | HTMLDivElement>;
}

type TechItem = {
    name: string;
    icon?: string;
}

const techConfig: TechItem[] = [
    {
        name: 'Electron',
        icon: 'electron',
    },
    {
        name: 'TypeScript',
        icon: 'ts',
    },
    {
        name: 'React',
        icon: 'react',
    },
    {
        name: 'Node.js',
        icon: 'node',
    },
    {
        name: 'Android',
        icon: 'android',
    },
    {
        name: 'Flutter',
        icon: 'flutter',
    },
    {
        name: 'React Native',
        icon: 'react',
    },
    {
        name: 'AWS',
        icon: 'aws',
    },
];

export const About: FC<IAboutProps> = ({aboutRef}) => {
    return (
        <div className={'About'} ref={aboutRef}>
            <Section title={'About Me'} icon={Icon.Code}>

                <div>
                    <div className={'description_container'}>
                        <div>
                            Hi, I'm Matt! I'm a software engineer who enjoys working on the front end.
                            I was never very good at drawing, so when I found I could create things with
                            software, it was a wrap! I enjoy providing visually and functionally pleasing
                            experiences to the end user.<br /><br />I've always enjoyed the freedom and innovation
                            provided by Android, so as a college student I started developing mobile applications. While
                            not every project made it's way to the Play Store, I learned valuable lessons from each project.
                            I was able to use this experience to gain an internship in software engineering, and work my way up
                            to where I am today, working with a variety of clients and technologies along the way.
                        </div>
                    </div>
                    <img alt={'me'} src={'/assets/matt.jpg'}/>
                </div>
                <div className={'technology_container'}>
                    <h2>
                        Here are a few technologies I'm familiar with:
                    </h2>
                    <ul>
                        {techConfig.map((item) => <TechnologyItem name={item.name} icon={item.icon} />)}
                    </ul>
                </div>
            </Section>
        </div>
    )
};
