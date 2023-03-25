import React, { FC } from 'react';
import './header.scss';
import { ScrollTo } from '../../hooks/useScroll';
import { Sections } from '../Main/SectionTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

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
            <header className={'Header'}>
                <img alt={'A colorful image of a laptop surrounded by planets, AI generated.'} src={'/assets/hero_2.png'} />
                <div>
                    <div>
                        <h1>Hi I'm <span>Matt Russo</span>.<br />I'm a Software Engineer.</h1>
                    </div>
                    <div>
                        <FontAwesomeIcon className={'fa-thin'} onClick={onClick} icon={faChevronDown} color={'white'} size={'3x'} />
                    </div>
                </div>
            </header>
        )
    };
