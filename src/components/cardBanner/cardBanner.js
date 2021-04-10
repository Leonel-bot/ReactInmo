import React from 'react'
import './cardBanner.css'

export default function CardBanner(prop) {
    return (
        <div className="cardBanner col-11 col-md-4 col-lg-2">
            <div className="cardBannerIcon">
                <img src={prop.icon} alt="" />
            </div>
            <div>
                <p>
                   {prop.text}
                </p>
            </div>
        </div>
    )
}
