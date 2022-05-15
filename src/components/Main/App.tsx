import React, {useState} from 'react';
import './App.scss';
import {Header} from '../Header/Header';
import {About} from '../About/About';
import {Sections} from './SectionTypes';
import {useScroll} from '../../hooks/useScroll';
import {ProjectDisplay} from "../ProjectDisplay/ProjectDisplay";
import {mockProjects} from "../ProjectDisplay/mockProjects";
import {TechnologyDisplay} from "../TechnologyDisplay/TechnologyDisplay";
import {Contact} from "../Contact/Contact";
import {AboutMeCTA} from "../MyStory/AboutMeCTA";
import {CompanyDisplay} from "../CompanyDisplay/CompanyDisplay";


function App() {
    const {getRef, scrollToElement} = useScroll({});
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <div className={`App ${showModal ? 'modal-open' : ''}`}>
            <Header onAboutClick={scrollToElement}/>
            <div className={'main_content'}>
                {/*<About aboutRef={getRef(Sections.About)}/>*/}
                <AboutMeCTA  aboutRef={getRef(Sections.About)} />
                <CompanyDisplay />
                <ProjectDisplay projects={mockProjects} showModal={showModal} setShowModal={setShowModal} />
                <Contact />
            </div>
        </div>
    );
}

export default App;
