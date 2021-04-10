import React from 'react'
import './banner.css'
import ExperienceIcons from '../../icons/experiencia-del-usuario.svg'
import WarrantyIcon from '../../icons/garantia.svg'
import SolutionIcon from '../../icons/solucion.svg'
import GlobalIcon from '../../icons/global.svg'
import CardBanner from '../cardBanner/cardBanner'

export default function Banner(prop){
    return(
    <div>
        <div className="banner">
          <h3>¿Porque elegirnos?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia exercitationem vitae numquam odio voluptatem a.</p>
          <div className="bannerBackground">

          </div>
        </div>
        <div class="container">
            <div className="row justify-content-center">
                <CardBanner
                  icon = {ExperienceIcons}
                  text = "Experiencia ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, eveniet."
                />
                <CardBanner
                  icon = {WarrantyIcon}
                  text = "Garantia ipsum dolor sit amet consectetur, adipisicing elit."
                />
                <CardBanner
                  icon = {SolutionIcon}
                  text = "Soluciones ipsum dolor sit amet consectetur, adipisicing elit."
                />
                <CardBanner
                  icon = {GlobalIcon}
                  text = "Estamos siempre cerca de tu localidad"
                />
            </div>
        </div>
    </div>
    )
}