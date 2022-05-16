import React, {useEffect, useLayoutEffect, useState} from 'react';
import './App.scss';
import {Header} from '../Header/Header';
import {About} from '../About/About';
import {Sections} from './SectionTypes';
import {useScroll} from '../../hooks/useScroll';
import {ProjectDisplay} from "../ProjectDisplay/ProjectDisplay";
import {mockProjects} from "../ProjectDisplay/mockProjects";
import {Contact} from "../Contact/Contact";
import {AboutMeCTA} from "../MyStory/AboutMeCTA";
import {CompanyDisplay} from "../CompanyDisplay/CompanyDisplay";
import {ProjectModalBody} from "../ProjectDisplay/ProjectModal/ProjectModalBody";
import {Modal} from "../common/Modal/Modal";


function App() {
    const {getRef, scrollToElement} = useScroll({});
    const [showModal, setShowModal] = useState<boolean>(false);
    const [projectIndex, setProjectIndex] = useState<number>(0);

    function onProjectSelected(index: number): void {
        setProjectIndex(index);
        setShowModal(true);
    }

    return (
        <div>
            <div className={`App`}>
                <>
                    <Header onAboutClick={scrollToElement}/>
                    <div className={'main_content'}>
                        <AboutMeCTA aboutRef={getRef(Sections.About)}/>
                        <CompanyDisplay/>
                        <ProjectDisplay
                            onProjectSelected={onProjectSelected}
                            projects={mockProjects}
                            showModal={showModal}
                            setShowModal={setShowModal}
                        />
                        <Contact/>

                    </div>
                </>
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <ProjectModalBody project={mockProjects[projectIndex]}/>
            </Modal>
        </div>
    );
}

export default App;
