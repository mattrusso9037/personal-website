import * as React from 'react';
import './projectModal.scss';
import {IProject} from "../IProject";
import {ProjectModalItem} from "./ProjectModalItem";

interface IProjectModalBodyProps {
    project: IProject;
}

export const ProjectModalBody: React.FC<IProjectModalBodyProps> = ({project}) => {
    return (
        <div className={'ProjectModalBody'}>
            <div className={'img-container'} style={{backgroundImage: `url(/assets/projects/${project.imageUri})`}}>
                {/*<img src={} />*/}
            </div>
            <div className={'content'}>
                <h2>{project.title}</h2>
                <div>
                    <ProjectModalItem title={'What Is It'} content={project.definition} />
                    <ProjectModalItem title={'What I Did'} content={project.responsibility} />
                    <ProjectModalItem title={'Technologies Used'} content={project.technologiesUsed} />
                </div>
                <div className={'action-container'}>
                    <button>Source Code</button>
                    <button>Open Link</button>
                </div>
            </div>
        </div>
    );
};
