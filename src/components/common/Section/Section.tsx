import React, {FC} from "react";
import './section.scss';
import {Icon} from "../Icon";

interface ISectionProps {
    title: string;
    icon: Icon;
}

export const Section: FC<ISectionProps> = ({title, children, icon}) => {
    return (
        <div className={`Section ${title}`}>
            <div className={'section_header'}>
                <img alt={icon} src={`/assets/${icon}.svg`}/>
                <h2>{title}</h2>
                <hr />
            </div>
            <div className={'body'}>
                {children}
            </div>
        </div>

    )
};
