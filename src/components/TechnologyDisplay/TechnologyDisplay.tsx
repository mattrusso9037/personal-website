import * as React from 'react';
import './technologyDisplay.scss';
import {Section} from "../common/Section/Section";
import {Icon} from "../common/Icon";
import {TechnologyItem} from './TechnologyItem/TechnologyItem';

interface IProjectCardProps {
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

export const TechnologyDisplay: React.FC<IProjectCardProps> = () => {
    return (
        <Section title={'Technologies'} icon={Icon.Code}>

            <div className={'technology_container'}>
                <h2>
                    These are a few technologies I'm familiar with
                </h2>
                <ul>
                    {techConfig.map((item) => <TechnologyItem name={item.name} icon={item.icon}/>)}
                </ul>
            </div>
        </Section>
    )
};

