import * as React from 'react';
import './myStory.scss';
import {Button} from '../common/Button/Button';
import {Section} from "../common/Section/Section";

interface IProjectCardProps {
}

const journeySteps: Array<{ title: string, content: string }> = [
    {
        title: 'const career = new Career();',
        content: 'I created three apps during my college days, all deployed to the Google Play Store. This consisted of a flashcards app with Wear OS support, ' +
            'an app to help you decide what to eat, and a chemistry study app.',
    },
    {
        title: 'career.startInternship();',
        content: 'I started my internship at Intelligent Product Solutions in the summer of my junior year. By the time the Fall came around, I began ' +
            'working for clients on behalf of IPS. I finished out my last semester working full time and welcoming my daughter into the world, what a semester it was!',
    },
    {
        title: 'career.accelerate();',
        content: 'In just three short years I grew from an Intern to a Software Lead. ' +
            'I\'ve architected major feature areas, integrated seamlessly with client engineering teams,' +
            ' and have actively mentored my peers. ' +
            'I\'ve led company-wide initiatives such as the intern program, recruitment, and a code re-usability effort.',
    },
];

export const MyStory: React.FC<IProjectCardProps> = () => {
    return (
        <Section className={'AboutMeCta'} title={''}>
            <div className={'MyStory'}>
                <div className={'card-container'}>
                    I'm currently a Software Lead at Intelligent Product Solutions. I've been working as part of an
                    R&D-turned product team at Zebra Technologies for the last three years,
                    architecting and implementing feature areas in the machine vision space.

                </div>
                <Button type={'secondary'} text={'See More'}/>
            </div>
        </Section>
    )
};
