import React from 'react'
import './aboutUs.css'
import ImgAboutUs from '../../img/us.jpg'
export default function AboutUs() {
    return (
        <div className="container">
            <div className="aboutUs row">
                <div className="imgAbout col-11 col-lg-6" style={{ backgroundImage: `url(${ImgAboutUs})` }}></div>
                <div className="textAbout  col-11 col-lg-6">
                    <h4>Sobre Nosotros</h4>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolor dicta assumenda quisquam. Qui nostrum pariatur esse magnam corrupti voluptatum similique accusantium doloremque soluta ab velit inventore, aliquid cumque! Quibusdam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eveniet commodi quae, sapiente incidunt adipisci amet maxime a alias cupiditate excepturi necessitatibus ipsa, consequuntur nisi aspernatur suscipit laudantium dicta voluptatum.
                </p>
                </div>
            </div>
        </div>
    )
}