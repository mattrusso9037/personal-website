import React from 'react';
import './App.scss';
import {Header} from '../Header/Header';
import {About} from '../About/About';
import {Sections} from './SectionTypes';
import {useScroll} from '../../hooks/useScroll';

function App() {
    const {getRef, scrollToElement} = useScroll({});

    return (
        <div className='App'>
            <Header onAboutClick={scrollToElement}/>
            <div className={'main_content'}>
                <About aboutRef={getRef(Sections.About)}/>
            </div>
        </div>
    );
}

export default App;
