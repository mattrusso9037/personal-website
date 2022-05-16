import React, {FC, useEffect} from 'react';
import './about.scss';
import {Section} from '../common/Section/Section';
import {Icon} from '../common/Icon';
import {TechnologyDisplay} from "../TechnologyDisplay/TechnologyDisplay";

export const About: FC = () => {

    useEffect(() => {
       setTimeout(() => {
           const navBar = document.getElementsByClassName('Navbar')[0];
           // TODO: Investigate why nav bar is hidden on about page sometimes.
           navBar?.classList.add('show');
       }, 500);
    }, []);
    return (
        <>
            <Section className={'About Me'} title={'About Me'} icon={Icon.Person}>
                <div>
                    <div className={'description_container'}>
                        <div>
                            I'm a software engineer with a strong passion for learning and problem solving. I firmly believe coding is an art form, and I take pride in things
                            like optimization, readability, scalability, extendibility and modularity.
                            <br/><br/>
                            I started my career building mobile apps for the Android platform in college. When I
                            joined the industry, I began using technologies like React, React Native and Electron to build
                            cross-platform mobile and desktop applications using web technologies. Since then, I've been
                            focusing on improving my skills, learning all I can about the industry, and mentoring others. I
                            enjoy working across all stacks of development, but I prefer working on the front-end delivering
                            meaningful experiences to end users.
                            <br/><br/>
                            In my free time I enjoy working on side projects, playing video games, watching movies,
                            exploring nature, and spending time with my wife and daughter.
                        </div>
                    </div>
                    {/*<img alt={'me'} src={'/assets/me.jpg'}/>*/}
                </div>
            </Section>
            <TechnologyDisplay/>
        </>

)
};
