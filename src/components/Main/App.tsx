import React from 'react';
import './App.scss';
import {Header} from '../Header/Header';
import {About} from '../About/About';
import {Sections} from './SectionTypes';
import {useScroll} from '../../hooks/useScroll';
import {ProjectDisplay} from "../ProjectDisplay/ProjectDisplay";
import {mockProjects} from "../ProjectDisplay/mockProjects";
import {TechnologyDisplay} from "../TechnologyDisplay/TechnologyDisplay";

function App() {
    const {getRef, scrollToElement} = useScroll({});

    return (
        <div className='App'>
            <Header onAboutClick={scrollToElement}/>
            <div className={'main_content'}>
                <About aboutRef={getRef(Sections.About)}/>
                <TechnologyDisplay />
                <ProjectDisplay projects={mockProjects} />
            </div>
        </div>
    );
}

export default App;
