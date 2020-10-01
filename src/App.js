import React from 'react';
import './App.scss';
import {Header} from './layout/header/Header';
import {Hero} from './layout/hero/Hero';
import {CompaniesLogosSlider} from './layout/companies-logos-slider/CompaniesLogosSlider';
import {Divider} from './shared/divider/Divider';
import {AboutUs} from './layout/about-us/AboutUs';

function App() {
    return (
        <>
            <div className="white-container">
                <Header/>

                <Hero/>

                <Divider/>

                <div className="container">
                    <CompaniesLogosSlider/>
                </div>
            </div>

            <div>
                <AboutUs/>
            </div>
        </>
    );
}

export default App;
