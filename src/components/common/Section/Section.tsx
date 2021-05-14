import React, {FC} from "react";
import './section.scss';

interface ISectionProps {
    title: string;
}

export const Section: FC<ISectionProps> = ({title, children}) => {
    return (
        <div className={`Section ${title}`}>
            <h2>{title}</h2>
            <div className={'body'}>
                {children}
            </div>
        </div>

    )
};
