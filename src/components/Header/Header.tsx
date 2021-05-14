import React, {FC} from 'react';
import img from '../../../public/assets/nasa_img.jpg';
import './header.scss';
import {Button} from '../common/Button/Button';
import {ScrollTo} from '../../hooks/useScroll';
import {Sections} from '../Main/SectionTypes';

interface IHeaderProps {
    onAboutClick: ScrollTo
}

export const Header: FC<IHeaderProps> =
    ({
         onAboutClick,
     }) => {

    function onClick(): void {
        onAboutClick(Sections.About);
    }

        return (
            <div className={'Header'}>
                <img alt={'Earth from space'} src={'/assets/nasa_img.jpg'}/>
                <div>
                    <h1>Hi I'm <span>Matt Russo</span>.<br/>I'm a Software Engineer.</h1>
                    <Button text={'Learn More'} type={'outline'} onClick={onClick}/>
                </div>
            </div>
        )
    };