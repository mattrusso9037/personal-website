import React, { FC, useEffect, useState } from 'react';
import './Login.scss';
import { Section } from '../common/Section/Section';
import { Button } from '../common/Button/Button';
import { MutatingDots } from 'react-loader-spinner';

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

        const res = await fetch('https://ydytuawa5mtoiuetvozpxim6mu0hqqxt.lambda-url.us-east-1.on.aws/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                password: password.trim(),
            }),
        });
        const { body } = await res.json();

        setIsAuthenticated(body);
        setMessage(body ? 'Success' : 'Incorrect Password');
        setMessageColor(body ? 'green' : 'red');
        setIsLoading(false);
        setPassword('');
    }

    return (
        <>
            <Section className={'Login'} title={'View More'}>
                {isLoading ? <MutatingDots
                    height="100"
                    width="100"
                    color="#F25F5C"
                    secondaryColor='#50514F'
                    radius='12.5'
                    ariaLabel="mutating-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={isLoading}
                /> :
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
