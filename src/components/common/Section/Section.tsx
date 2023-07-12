import React, {FC, MutableRefObject} from "react";
import './section.scss';
import {Icon} from "../Icon";

interface ISectionProps {
    title: string;
    className?: string;
    icon?: Icon;
    locationRef?: MutableRefObject<any>;
    id?: string;
}

export const Section: FC<ISectionProps> = ({ className, title, locationRef, children, icon, id}) => {
    return (
        <div id={`${id ?? ''}`} ref={locationRef} className={`Section ${className}`}>
            <div className={'section_inner'}>
                <div className={'section_header'}>
                    <h2>{title}</h2>
                </div>
                <div className={'body'}>
                    {children}
                </div>
            </div>
        </div>

    )
};
