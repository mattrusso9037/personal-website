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
                        I'm a results-driven Full Stack Software Engineer with a strong 
                        background in consulting. I have a solid foundation in both front-end and back-end development, 
                        and I'm dedicated to crafting innovative software solutions. Throughout my career, I've had the 
                        privilege of working on diverse projects and collaborating with various clients, bringing a unique 
                        perspective to every endeavor. I've worked in a variety of industries, including healthcare, machine vision, security system services,
                        and automotive.
                            <br/><br/>
                            As a junior engineer, I kicked off my journey at a local engineering firm, where I honed my skills 
                            by working on a mobile app using React Native and an internal web application utilizing React, 
                            Node.js, and MongoDB. I even dove into exciting integration projects involving embedded devices. 
                            During this time, I gained invaluable experience in delivering high-impact features as part of 
                            cross-functional teams.
                            <br/><br/>
                            My consulting adventures continued as I joined forces with Zebra Technologies, where I played a 
                            crucial role in developing a cutting-edge <a href='#projects'>machine vision desktop application</a>. By building a 
                            high-fidelity prototype, our team spearheaded accelerated prioritization, ultimately leading 
                            to a successful product launch three years later. As part of a cross-functional team, 
                            I took ownership of multiple impactful features, leaving my mark on the project in several major areas of
                            the application.
                            <br/><br/>
                            Currently, I'm channeling my expertise into the AutoNavigator product at Capital One, working 
                            closely with teammates, product managers, engineering managers, and application architects. 
                            I design, scope, estimate, and implement features that enhance the user experience. In addition, 
                            I've gained proficiency in industry-standard logging and monitoring tools like Splunk and New Relic. 
                            I'm well-versed in different architectural paradigms, thriving in both monorepo and 
                            microservice environments. Throughout my journey, I've embraced agile methodologies and stayed on 
                            top of the latest industry trends.
                            <br/><br/>
                            I'm always up for a chat with fellow professionals in the industry, <a href='#contact'>let's connect</a>!
                        </div>
                    </div>
                </div>
            </Section>
            {/* <TechnologyDisplay/> */}
        </>

)
};
