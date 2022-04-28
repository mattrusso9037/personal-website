import React, {FC} from 'react';
import './Button.scss';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

interface IButtonProps {
    type: 'primary' | 'secondary' | 'outline';
    onClick?: () => void;
    text: string;
    icon?: IconProp;
}

export const Button: FC<IButtonProps> = ({type, onClick, text, icon}) => {

    return (
        <button
            onClick={onClick}
            className={'Button ' + type}
        >
            {icon && <FontAwesomeIcon icon={icon} size={'2x'} />}
            {text}
        </button>
    )
};

Button.defaultProps = {
    onClick: () => {}
}
