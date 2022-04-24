import * as React from 'react';
import {IProject} from '../IProject';
import './projectCard.scss';

interface IProjectCardProps {
    project: IProject;
}

export const ProjectCard: React.FC<IProjectCardProps> = ({project}) => {
    return (
        <div className={'ProjectCard'}>
            {project.title}
        </div>
    )
};
