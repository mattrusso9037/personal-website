import React, {FC, MutableRefObject} from 'react';
import './about.scss';

interface IAboutProps {
    aboutRef: MutableRefObject<null | HTMLDivElement>;
}

export const About: FC<IAboutProps> = ({aboutRef}) => {
    return (
        <div className={'About'} ref={aboutRef}>
            <div>
                About Me
            </div>
        </div>
    )
};