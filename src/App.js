import React from 'react';
import './App.scss';
import {Header} from './layout/header/Header';
import Logo from './images/Footer.png';


function App() {
    return (
        <>
            <div className="container">
                <Header/>

                <div className="row">
                    <div className="col-lg-6 hero-text">
                        <h1>Sprzedaż hurtowa i detaliczna</h1>
                        <h2>Art. przemysłowych i chemii gospodarczej</h2>
                        <p>Artykuły biurowe, kosmetyki, środki higieny, środki czystości, akcesoria i sprzęt do
                            sprzątania</p>
                        <button className="btn">Dowiedz się więcej</button>
                    </div>
                    <div className="col-lg-6 hero-image">
                        <img src={Logo} alt={''}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
