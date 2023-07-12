import * as React from 'react';
import {Section} from '../common/Section/Section';
import {Icon} from '../common/Icon';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faScroll} from '@fortawesome/free-solid-svg-icons';
import {Button} from '../common/Button/Button';
import './contact.scss';

interface IContactProps {
}

const ICON_SIZE = '2x';

enum Link {
    GitHub = 'https://github.com/mattrusso9037',
    Linkedin = 'https://www.linkedin.com/in/matt-russo9037/',
    Email = 'mattrusso9037@gmail.com',
}

export const Contact: React.FC<IContactProps> = () => {
    function openLink(url: Link): void {
        if (url === Link.Email) {
            window.location.href = `mailto:${url}`;
        } else {
            window.open(url, 'blank');
        }
    }

    function onResumeClick(): void {
        window.open('/assets/matt-russo-resume.pdf', 'blank');
    }

    return (
        <Section id='contact' className={'Contact Me'} title={''} icon={Icon.Communication}>
            <div className={'Contact'}>
                <div className={'action_container'}>
                    <div className={'social_container'}>
                        <FontAwesomeIcon icon={faGithubSquare} size={ICON_SIZE} onClick={() => openLink(Link.GitHub)} />
                        <FontAwesomeIcon icon={faLinkedin} size={ICON_SIZE} onClick={() => openLink(Link.Linkedin)} />
                        <FontAwesomeIcon icon={faEnvelope} size={ICON_SIZE} onClick={() => openLink(Link.Email)} />
                        <FontAwesomeIcon icon={faScroll} size={ICON_SIZE} onClick={onResumeClick} />
    
                    </div>
                    {/* <div className={'resume_container'}>
                        <Button icon={faDownload} type={'secondary'} text={'Resume'} onClick={onResumeClick} />
                    </div> */}
                </div>
            </div>
        </Section>
    )
};

