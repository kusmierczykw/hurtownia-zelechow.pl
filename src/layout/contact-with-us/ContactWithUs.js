import React from 'react';
import './ContactWithUs.scss';
import Image from '../../images/Mask Group 2@2x.png';

export const ContactWithUs = () => {
    return (
        <div className="row">
            <div className="col-lg-5">
                <img src={Image} className="image"/>
            </div>
            <div className="col-lg-7">
                <h3>Masz pytanie? Chcesz złożyć zamówienie?</h3>
                <h4>Skontaktuj się z nami.</h4>
                <button className="btn">Przejdź do kontaktu</button>
            </div>
        </div>
    );
}
