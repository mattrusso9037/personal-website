import * as React from 'react';
import {Section} from '../common/Section/Section';
import {Icon} from '../common/Icon';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {Button} from '../common/Button/Button';
import './contact.scss';

interface IContactProps {
}

const ICON_SIZE = '4x';

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
        window.open('https://1drv.ms/b/s!Ap3vdSscpQxUguRJi9xPLlPEABP9PQ');
    }

    return (
        <Section className={'Contact Me'} title={''} icon={Icon.Communication}>
            <div className={'Contact'}>
                <h2>
                    Let's Get In Touch
                </h2>
                <div className={'action_container'}>
                    <div className={'social_container'}>
                        <FontAwesomeIcon icon={faGithubSquare} size={ICON_SIZE} onClick={() => openLink(Link.GitHub)} />
                        <FontAwesomeIcon icon={faLinkedin} size={ICON_SIZE} onClick={() => openLink(Link.Linkedin)} />
                        <FontAwesomeIcon icon={faEnvelope} size={ICON_SIZE} onClick={() => openLink(Link.Email)} />
                    </div>
                    <div className={'resume_container'}>
                        <Button icon={faDownload} type={'secondary'} text={'Resume'} onClick={onResumeClick} />
                    </div>
                </div>
            </div>
        </Section>
    )
};

