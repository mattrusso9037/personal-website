import * as React from 'react';
import './modal.scss';
import {Button} from "../Button/Button";

interface IModalProps {
    show: boolean;
    onClose: () => void;
}

export const Modal: React.FC<IModalProps> = ({show, onClose, children}) => {
    return (
        <div style={{display: show ? 'block' : 'none'}} className={'Modal'}>
            <div className={'overlay'} />
            <div className={'card'}>
                <div className={'content'}>
                    {children}
                </div>
            </div>
            <div className={'action-container'}>
                <Button type={'secondary'} text={'Close'} onClick={onClose} />
            </div>
        </div>
    );
};
