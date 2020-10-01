import React from 'react';
import "./Header.scss";
import {ReactComponent as MapMarker} from "bootstrap-icons/icons/geo-alt-fill.svg";
import Logo from '../../images/logo.png';

export const Header = () => {
    const items = [
        {
            label: 'Start',
            link: '',
            active: true,
        },
        {
            label: 'O nas',
            link: '',
            active: false,
        },
        {
            label: 'Oferta',
            link: '',
            active: false,
        },
        {
            label: 'Kontakt',
            link: '',
            active: false,
        },
    ];

    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} alt="Logo firmy Witold Mucha - Hurtownia"/>
                    </a>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {
                                items.map(({label, link, active}, index) => {
                                        const navLinkClass = 'nav-link';
                                        const activeClass = active
                                            ? 'active'
                                            : null;

                                        const classes = [navLinkClass, activeClass].filter(Boolean).join(' ');

                                        return (
                                            <a className={classes} key={index} href={link}>{label}</a>
                                        )
                                    }
                                )
                            }
                        </div>

                        <a className="navbar-nav-address-link" href="/">
                            <div className="navbar-nav-address">
                                <div className="icon-rounded">
                                    <MapMarker fill="white" width="1rem" height="1rem"/>
                                </div>

                                Długa 105,<br/>
                                08-430 Żelechów
                            </div>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}
