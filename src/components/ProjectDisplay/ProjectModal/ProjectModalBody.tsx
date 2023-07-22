import * as React from 'react';
import './projectModal.scss';
import {IProject} from "../IProject";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExternalLink} from "@fortawesome/free-solid-svg-icons";
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';

interface IProjectModalBodyProps {
    project: IProject;
}

export const ProjectModalBody: React.FC<IProjectModalBodyProps> = ({project}) => {
    function openLink(uri: string | undefined): void {
        uri && window.open(uri, 'blank');
    }

    return (
        <div className={`ProjectModalBody ${project.title.replaceAll(' ', '')}`}>
            <div>
                <div className={'content'}>
                    <h2>{project.title}</h2>
                    <img className='featured' alt={'Featured project image'} src={`assets/projects/${project.featuredImageUri}`} />
                    <div className={'technologies'}>
                        <strong>Technologies</strong>
                        <div>
                            {project.technologiesUsed.map((item, index) => {
                                return (
                                    <span> {item} {index < project.technologiesUsed.length - 1 ? '| ' : ''}</span>
                                )
                            })}
                        </div>
                    </div>
                    <div className={'description'}>
                        {project.fullDescription}
                    </div>
                    {project.view}
                    <div className={'action-container'}>
                        {project.sourceControlUrl && (
                            <FontAwesomeIcon
                                color={'#F25F5C'}
                                size={'2x'}
                                icon={faGithubSquare}
                                onClick={() => openLink(project.sourceControlUrl
                                )}
                            />)}
                        {project.resourceUrl && (
                            <FontAwesomeIcon
                                color={'#F25F5C'}
                                size={'2x'}
                                icon={faExternalLink}
                                onClick={() => openLink(project.resourceUrl)}
                            />)}
                    </div>
                </div>
            </div>
        </div>
    );
};
