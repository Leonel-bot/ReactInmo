import React from 'react'
import './footer.css'
import LogoFooter from '../../img/logo.jpg'
import Facebook from '../../icons/facebook.svg'
import Whatsapp from '../../icons/whatsapp.svg'
import Instagram from '../../icons/instagram.svg'
import Phone from '../../icons/telefono.svg'
import Location from '../../icons/locacion.svg'
import Mail from '../../icons/correo.svg'
import { Link } from 'react-router-dom'

export default function Footer(){
    return(
        <div className="footer row">
            <div className="contactFooter col-12 col-lg-3">
                <p>
                    Contactanos
                </p><hr/>
                <ul>
                    <li>
                        <img src={Location} alt=""/>Sarmiento 45453 Fray Luis Beltran
                    </li>
                    <li>
                        <img src={Phone} alt=""/>0341-2345432
                    </li>
                    <li>
                        <img src={Whatsapp} alt=""/>0341-12466664
                    </li>
                    <li>
                        <img src={Mail} alt=""/>email@gmail.com
                    </li>
                </ul>
            </div>
            <div className="redesFooter col-12 col-lg-3">
                <p>
                    Seguinos en las redes
                </p><hr/>
                <ul>
                    <li>
                        <img src={Facebook} alt=""/>
                    </li>
                    <li>
                        <img src={Instagram} alt=""/>
                    </li>
                    <li>
                        <img src={Whatsapp} alt=""/>
                    </li>
                </ul>
                <div className="redesContact">
                    <Link to="/contact"><button>Contactanos</button></Link>
                </div>
            </div>
            <div className="logoFooter col-12 col-lg-3">
                <img src={LogoFooter} alt=""/>
            </div>
        </div>
    )
}