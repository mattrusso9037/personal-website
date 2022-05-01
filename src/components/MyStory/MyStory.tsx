import * as React from 'react';
import './myStory.scss';
import {Button} from '../common/Button/Button';
import {useState} from "react";

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

export const MyStory: React.FC<IProjectCardProps> = ({}) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    function incrementIndex() {
        const nextIndex = activeIndex + 1;

        if (nextIndex < journeySteps.length) {
            setActiveIndex(nextIndex);
        }
    }

    function decrementIndex() {
        const nextIndex = activeIndex - 1;

        if (nextIndex >= 0) {
            setActiveIndex(nextIndex);
        }
    }

    return (
        <div className={'MyStory'}>
            <h2>My Journey</h2>
            <div className={'card-container'}>
                {
                    journeySteps.map((step, index) => {
                        return (
                            <div onClick={() => setActiveIndex(index)}
                                 className={`card ${index === activeIndex ? 'active' : ''}`}>
                                <h2>{step?.title}</h2>
                                {index === activeIndex && <div className={'content'}>{step.content}</div>}
                            </div>
                        )
                    })
                }
            </div>
            <div className={'action-container'}>
                <Button type={'secondary'} text={'Prev'} onClick={decrementIndex}/>
                <Button type={'secondary'} text={'Next'} onClick={incrementIndex}/>
            </div>

        </div>
    )
};
