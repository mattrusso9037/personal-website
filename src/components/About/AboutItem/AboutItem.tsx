import React, {FC} from 'react';
import './aboutItem.scss';
import {IAboutItem} from './IAboutItem';

interface IAboutItemProps extends IAboutItem {

}

export const AboutItem: FC<IAboutItemProps> = ({title, bodyText, icon}) => {
    return (
        <div className={`AboutItem ${title}`}>
            <div>
                <div className={'img_wrapper'}>
                    <img alt={title} src={`/assets/${icon}.svg`}/>
                </div>
                <h3>{title}</h3>
            </div>
            <div>{bodyText}</div>
        </div>
    )
};
