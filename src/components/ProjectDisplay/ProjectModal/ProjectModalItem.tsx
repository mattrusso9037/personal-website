import * as React from 'react';
import './projectModal.scss';

interface IProjectModalItemProps {
    title: string;
    content: string;
}

export const ProjectModalItem: React.FC<IProjectModalItemProps> = ({ title, content }) => {
    return (
        <div className={'ProjectModalItem'}>
            <label>{title}</label>
            <text>{content}</text>
        </div>
    );
};
