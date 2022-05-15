import React, {FC, MutableRefObject} from 'react';
import './about.scss';
import {Section} from '../common/Section/Section';
import {Icon} from '../common/Icon';
import {TechnologyDisplay} from "../TechnologyDisplay/TechnologyDisplay";

export const About: FC = () => {
    return (
        <Section className={'About Me'} title={'About Me'} icon={Icon.Person}>
            <div>
                <div className={'description_container'}>
                    <div>
                        A software engineer with a strong passion for learning. I firmly believe coding is an art form,
                        and I take pride in things like optimization, readability, scalability, extensibility and modularity.<br/><br/>
                        I started my career building mobile apps for the Android platform for the fun of it. When I joined the industry, I began using technologies like React Native and Electron to build cross-platform mobile and desktop
                        applications using web technologies. Since then, I've been focusing on improving my skills,
                        learning all I can about the industry, and mentoring others.
                    </div>
                </div>
                <img alt={'me'} src={'/assets/me.jpg'}/>
            </div>
            <TechnologyDisplay />
        </Section>
    )
};
