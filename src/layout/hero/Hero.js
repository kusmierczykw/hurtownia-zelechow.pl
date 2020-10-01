import React from 'react';
import "./Hero.scss";
import Logo from '../../images/Footer.png';

export const Hero = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 hero-text">
                    <h1>Sprzedaż hurtowa i detaliczna</h1>
                    <h2>Art. przemysłowych i chemii gospodarczej</h2>
                    <p className="text-color">Artykuły biurowe, kosmetyki, środki higieny, środki czystości, akcesoria i sprzęt do
                        sprzątania</p>
                    <button className="btn">Dowiedz się więcej</button>
                </div>
                <div className="col-lg-6 hero-image">
                    <img src={Logo} alt={'Kobieta ze środkami czystości'}/>
                </div>
            </div>
        </div>
    );
}
