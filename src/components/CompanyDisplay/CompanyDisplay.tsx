import React, {FC} from 'react';
import './companyDisplay.scss';
import {Section} from '../common/Section/Section';

export const CompanyDisplay: FC = () => {
    return (
        <Section className={'CompanyDisplay'} title={''}>
            <h2>Companies I've Worked With</h2>
            <div className={'company_container'}>
                <img alt={'Zebra Technologies'} src={'/assets/company_logos/zebra.png'}/>
                <img alt={'Steinway'} src={'/assets/company_logos/steinway.png'}/>
                <img alt={'Applied DNA Sciences'} src={'/assets/company_logos/adnas.png'}/>
                <img alt={'Resideo'} src={'/assets/company_logos/resideo.png'}/>
            </div>
        </Section>
    )
};
