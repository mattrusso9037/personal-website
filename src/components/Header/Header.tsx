import React, {FC} from 'react';
import img from '../../assets/nasa_img.jpg';
import './header.scss';
import {Button} from "../common/Button/Button";

interface IHeaderProps {

}

export const Header: FC<IHeaderProps> = () => {
    return (
        <div className={'Header'}>
            <img alt={'Earth from space'} src={img}/>
            <div>
                <h1>Hi I'm <span>Matt Russo</span>.<br/>I'm a Software Engineer.</h1>
                <Button text={'Learn More'} type={'outline'}/>
            </div>
        </div>
    )
};