import * as React from 'react';
import './modal.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClose} from "@fortawesome/free-solid-svg-icons";

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
                   {/*<FontAwesomeIcon icon={faClose} size={'2x'} onClick={onClose} color={'#F25F5C'}/>*/}
               </div>
               <div className={'content'}>
                   {children}
               </div>
           </div>
       </div>
    );
};
