import React, { FC, useState } from 'react';
import './Login.scss';
import { Section } from '../common/Section/Section';
import { Button } from '../common/Button/Button';
import { Loader } from './Loader';
import { API } from '../../api/API';

interface IProps {
    setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const Login: FC<IProps> = ({ setIsAuthenticated }) => {
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [messageColor, setMessageColor] = useState<string>('');
    
    async function onSubmit(): Promise<void> {

        if (password === '') {
            setMessage('Invalid Password');
            setMessageColor('red');
            return;
        }

        setIsLoading(true);

        const isAuthenticated = await API.login(password);

        setIsAuthenticated(isAuthenticated);
        setMessage(isAuthenticated ? 'Success' : 'Incorrect Password');
        setMessageColor(isAuthenticated ? 'green' : 'red');
        setIsLoading(false);
        setPassword('');
    }

    return (
        <>
            <Section className={'Login'} title={'View More'}>
                {isLoading ? <Loader /> :
                    <div>
                        <div>
                            <input type='text' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                            <Button onClick={onSubmit} text='Submit' type='secondary' />
                        </div>
                        <label style={{color: messageColor}}>{message}</label>
                    </div>
                    }
            </Section>
        </>

    )
};
