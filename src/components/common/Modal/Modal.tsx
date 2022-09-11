import * as React from 'react';
import './modal.scss';


interface IModalProps {
    show: boolean;
    onClose: () => void;
}

export const Modal: React.FC<IModalProps> = ({show, onClose, children}) => {
    return (
       <div className={'Modal'}>
           <div className={`card ${show ? 'active' : ''}`}>
               <div onClick={onClose} className={'action-container'}>
                   <div>Back To Projects</div>
               </div>
               <div className={'content'}>
                   {children}
               </div>
           </div>
       </div>
    );
};
