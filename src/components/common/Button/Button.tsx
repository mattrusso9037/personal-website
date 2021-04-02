import React, {FC} from "react";
import './Button.scss';
interface IButtonProps {
    type: 'primary' | 'secondary' | 'outline';
    onClick?: () => void;
    text: string;
}

export const Button: FC<IButtonProps> = ({type, onClick, text}) => {

    return (
        <button
            onClick={onClick}
            className={'Button ' + type}
        >
            {text}
        </button>
    )
};

Button.defaultProps = {
    onClick: () => {}
}