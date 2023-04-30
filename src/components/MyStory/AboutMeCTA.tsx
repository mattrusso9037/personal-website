import * as React from 'react';
import './myStory.scss';
import {Button} from '../common/Button/Button';
import {Section} from "../common/Section/Section";
import {MutableRefObject} from "react";
import { useNavigate } from "react-router-dom";

interface IAboutMeCTAProps {
    aboutRef: MutableRefObject<null | HTMLDivElement>;
}

export const AboutMeCTA: React.FC<IAboutMeCTAProps> = ({ aboutRef }) => {
    const navigate = useNavigate();

    return (
        <Section locationRef={aboutRef} className={'AboutMeCta'} title={''}>
            <div className={'MyStory'}>
            <div className='underlay'></div>

                <div className={'card-container'}>
                    <div>
                        I'm currently working as a Software Engineer at Capital One. I'm utilizing TypeScript, Angular, Lit, Node.js and AWS to deliver meaningful web experiences to end users of the <a target='_blank' href="https://www.capitalone.com/cars/">Auto Navigator</a> platform.
                    </div>
                </div>
                <img src='/assets/matt.jpg' />
                <Button type={'secondary'} text={'See More'} onClick={() => navigate('/about')} />
            </div>
        </Section>
    )
};
