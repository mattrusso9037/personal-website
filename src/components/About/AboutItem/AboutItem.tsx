import React, {FC} from 'react';
import './aboutItem.scss';
import {IAboutItem} from "./IAboutItem";

interface IAboutItemProps extends IAboutItem {

}

export const AboutItem: FC<IAboutItemProps> = ({title, bodyText, icon}) => {
    return (
        <div className={`AboutItem ${title}`}>
            <div className={'img_wrapper'}>
                <img alt={title} src={`/assets/${icon}.svg`}/>
            </div>
            <h3>{title}</h3>
            <div>{bodyText}</div>
        </div>
    )
};
