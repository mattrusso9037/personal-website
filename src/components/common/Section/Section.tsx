import React, {FC, MutableRefObject} from "react";
import './section.scss';
import {Icon} from "../Icon";

interface ISectionProps {
    title: string;
    icon: Icon;
    locationRef?: MutableRefObject<any>;
}

export const Section: FC<ISectionProps> = ({title, locationRef, children, icon}) => {
    return (
        <div ref={locationRef} className={`Section ${title}`}>
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
