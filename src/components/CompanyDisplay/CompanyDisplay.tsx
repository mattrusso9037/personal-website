import React, {FC} from 'react';
import './companyDisplay.scss';
import {Section} from '../common/Section/Section';

export const CompanyDisplay: FC = () => {
    function navigateTo(url: string): void {
        window.open(url, 'blank');
    }
    return (
        <Section className={'CompanyDisplay'} title={''}>
            <h2>Companies I've Worked With</h2>
            <div className={'company_container'}>
                <img onClick={() => navigateTo('https://www.zebra.com/us/en.html')} alt={'Zebra Technologies'} src={'/assets/company_logos/zebra.png'}/>
                <img onClick={() => navigateTo('https://www.steinway.com/')} alt={'Steinway'} src={'/assets/company_logos/steinway.png'}/>
                <img onClick={() => navigateTo('https://adnas.com/')} alt={'Applied DNA Sciences'} src={'/assets/company_logos/adnas.png'}/>
                <img onClick={() => navigateTo('https://www.resideo.com/us/en/')} alt={'Resideo'} src={'/assets/company_logos/resideo.png'}/>
            </div>
        </Section>
    )
};
