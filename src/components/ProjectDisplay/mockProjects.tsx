import {IProject} from './IProject';
import {Aurora} from "./Views/Aurora";
import React from "react";
import { AutoNav } from './Views/CapitalOne/AutoNav';
import { ShareWithDealer } from './Views/CapitalOne/ShareWithDealer';

export const mockProjects: IProject[] = [
    {
        title: 'AutoNavigator',
        description: 'Online Car Buying Platform',
        fullDescription: 'Capital One Auto Navigator is a free tool that helps users find the right car for their needs and budget. It offers a variety of features including car recommendations, pre-qualification, dealership quotes, trade-in value, a payment calculator, and budgeting help.',
        technologiesUsed: ['Angular', 'RXJS', 'SCSS', 'Jest', 'New Relic', 'AWS'],
        featuredImageUri: 'autonav.webp',
        thumbnailImageUri: 'autonav.webp',
        resourceUrl: 'https://capitalone.com/cars',
        view: <AutoNav />
    },
    {
        title: 'Share With Dealer',
        description: 'Micro-frontend connecting customers with dealers.',
        fullDescription: 'Share with dealer is a micro-frontend that can be found both in Capital One\'s Auto Navigator in addition to dealer websites. This feature was built to maximize reusability, and help to streamline the car buying experience for both customers and dealers.',
        technologiesUsed: ['Lit', 'RXJS', 'Zustand', 'NodeJS', 'Splunk', 'Docker', 'AWS Lambda'],
        featuredImageUri: 'swd.png',
        thumbnailImageUri: 'swd.png',
        view: <ShareWithDealer />
    },
    {
        title: 'Zebra Aurora',
        description: 'Machine Vision and Fixed Scanning Solution',
        fullDescription: 'Zebra Aurora is a desktop application used to provision and deploy machine vision jobs to a connected camera. I facilitated the transition from R&D prototype to full scale product. I owned and delivered over 20 major feature areas, most notably an undo/redo\n' +
            'engine for a PIXI.js canvas, built on a reactive RXJS architecture.',
        technologiesUsed: ['Electron', 'React', 'Context API', 'TypeScript', 'Node.js', 'RXJS'],
        featuredImageUri: 'aurora_featured.jpg',
        thumbnailImageUri: 'zebra_aurora.png',
        resourceUrl: 'https://www.youtube.com/watch?v=_6Eenn8dWDY',
        view: <Aurora />
    },
    {
        title: 'EyeTemp',
        description: 'A Cross-Platform Mobile App',
        fullDescription: 'EyeTemp is an IoT device that can be placed on an appliance and ' +
            'alert users of temperature differentiations via a connected mobile application. I implemented ' +
            'bug fixes and features, including a deep linking solution for two step verification on the cross-platform mobile application. I also acted as the release manager, owning' +
            ' deployments to the Apple App Store and Google Play Store.',
        technologiesUsed:[ 'React Native', 'Redux', 'Postgres'],
        featuredImageUri: 'eye_temp_featured.jpg',
        thumbnailImageUri: 'eye_temp_thumb.jpg',
        resourceUrl: 'https://intelligentproduct.solutions/work/eyetemp-heat-sensor-monitor/',
    },
    {
        title: 'Flawless Plumbing',
        description: 'A WordPress website for a local business',
        fullDescription: 'In close collaboration with the business owner, I orchestrated a complete overhaul of this website for a local business. From ground zero, I redesigned and developed a brand-new business website, tailored to meet their specific needs and goals. Additionally, I efficiently transferred their domain from an existing consultancy to a personalized managed domain portal. The result is a fresh and modern website that accurately represents the essence of the business while providing a seamless user experience.',
        technologiesUsed: ['WordPress', 'JavaScript', 'HTML', 'CSS', 'BlueHost'],
        featuredImageUri: 'flag.png',
        thumbnailImageUri: 'flag.png',
        resourceUrl: 'https://flawlessplumbing.com',
    },
    // {
    //     title: 'Conquer Money',
    //     description: 'A Financial Guidance Platform',
    //     fullDescription: 'Conquer Money is a cross platform mobile application used to help users manage their money and seek financial guidance. ' +
    //         'A web application already existed when I came into the project. The stakeholder wanted a quick mobile app prototype to excite investors and raise money. ' +
    //         'I built the mobile app, which displays the site in a WebView, built a communication bridge from Flutter to React, and implemented local notifications.',
    //     technologiesUsed: ['Flutter', 'React', 'JavaScript'],
    //     featuredImageUri: 'conquer_money_featured.jpg',
    //     thumbnailImageUri: 'conquer_money_thumb.jpg',
    //     resourceUrl: 'https://www.conquer.money/',
    // },
    // {
    //     title: 'Simpli Budget',
    //     description: 'A Budgeting Mobile App',
    //     fullDescription: 'Simpli Budget is a cross platform mobile application used for tracking users spending. I couldn\'t find a minimalist ' +
    //         'budgeting app that existed and I wanted to learn a new technology, so I built Simpli Budget. I handled all aspects of development and deployment. I designed and implemented various user screens, a budgeting mechanism, user authentication, and the database.',
    //     technologiesUsed: ['Flutter', 'Google Cloud', 'Cloud Functions', 'FireStore', 'Firebase Auth', 'GitHub Actions'],
    //     featuredImageUri: 'simpli_budget_featured.png',
    //     thumbnailImageUri: 'budget_thumb.jpg',
    // },
    // {
    //     title: 'Age By Planet',
    //     description: 'Multi-Planetary Web App Utility',
    //     fullDescription: 'Age By Planet is a web app used to determine a user\'s age on different planets. ' +
    //         'I created this web app out of my daughter\'s love for planets. This app was bootstrapped ' +
    //         'from create-react-app and utilized GitHub actions for CI/CD. ' +
    //         'It uses the orbital period of each of the planets in our solar system to calculate a user\'s age on each planet.',
    //     technologiesUsed: ['React', 'TypeScript', 'Google Cloud', 'GitHub Actions'],
    //     featuredImageUri: 'age_by_planet_featured.png',
    //     thumbnailImageUri: 'age_by_planet_thumb.png',
    //     resourceUrl: 'https://age-by-planet.web.app/',
    //     sourceControlUrl: 'https://github.com/mattrusso9037/age_by_planet',
    // },
    // {
    //     title: 'Fitbit Watch Face',
    //     description: 'A Minimalist, Metric-Happy Watch Face',
    //     fullDescription: 'A watch face built for the Fitbit platform. It allows users to toggle between heart rate, ' +
    //         'steps, move minutes and other metrics. I handled all aspects of development. Utilizing Fitbit sensor API, I registered listeners efficiently and effectively. ' +
    //         'This required a delicate balance between metric accuracy and battery life.',
    //     technologiesUsed: ['Fitbit Studio', 'React', 'Fitbit Sensor API', 'JavaScript'],
    //     featuredImageUri: 'watchface_thumb.png',
    //     thumbnailImageUri: 'watchface_thumb.png',
    //     sourceControlUrl: 'https://github.com/mattrusso9037/minimal_stat_watchface',
    // },

];
