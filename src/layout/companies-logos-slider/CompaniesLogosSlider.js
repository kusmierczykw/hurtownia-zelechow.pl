import React from 'react';
import Ariel from '../../images/Image 1@2x.png';
import Vizir from '../../images/vizir-medium@2x.png';
import Persil from '../../images/1200px-Persil-Logo.svg@2x.png';
import Calgon from '../../images/Logo_Calgon_2@2x.png';
import Vanish from '../../images/Vanish2016@2x.png';
import Pur from '../../images/pur-logo@2x.png';
import './CompaniesLogosSlider.scss';

export const CompaniesLogosSlider = () => {

    return (
        <div className="container">
            <div className="row companies-slider">
                <div className="col-lg-2 label">
                    Sprzedajemy artykuły takich firm:
                </div>

                <div className="col-lg-10">
                    <div className="row images">
                        <div className="col-lg-2 image-item">
                            <img src={Ariel} alt={'Ariel'}/>
                        </div>

                        <div className="col-lg-2 image-item">
                            <img src={Vizir} alt={'Vizir'}/>
                        </div>

                        <div className="col-lg-2 image-item">
                            <img src={Persil} alt={'Persil'}/>
                        </div>

                        <div className="col-lg-2 image-item">
                            <img src={Calgon} alt={'Calgon'}/>
                        </div>

                        <div className="col-lg-2 image-item">
                            <img src={Vanish} alt={'Vanish'}/>
                        </div>

                        <div className="col-lg-2 image-item">
                            <img src={Pur} alt={'Pur'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
