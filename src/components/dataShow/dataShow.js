import React from 'react'
import './dataShow.css'

import KingBedOutlinedIcon from '@material-ui/icons/KingBedOutlined';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';


export default function DataShow(prop) {
    return (
        <div className="dataShow">
            <div className="postTitle">
                <p>
                    {prop.title}
                </p>
            </div>
            <div className="postLocation">
                <p className="d-inline-block text-truncate">{prop.property} en {prop.operation} en :</p>
                <p id="postCiudad">{prop.city}</p>
            </div>
            <div className="postStreet">
                Direccion: <p>{prop.street} {prop.number}</p>
            </div>
            <div className="postIcons">
                <div>
                    <KingBedOutlinedIcon />{prop.bedroom}
                </div>
                <div>
                    <BathtubOutlinedIcon />{prop.bathroom}
                </div>
                <div>
                    <DriveEtaOutlinedIcon />{prop.garage}
                </div>
                <div>
                    <MeetingRoomIcon />{prop.room}
                </div>
            </div>
            <div className="postDescription">
                <p>
                    {prop.description}
                </p>
            </div>
            <div className="postBtn">
                <a href={`https://wa.me/+5493412655600?text=Hola, me interesaría saber los requisitos y precio de la propiedad ubicada en ${prop.street} ${prop.number} (${prop.city})`}>
                    <button>Consultar</button>
                </a>
                <a href="https://wa.me/+5493412655600?text=">
                    <img src="https://cdn.svgporn.com/logos/whatsapp.svg" alt="" srcset=""/>
                </a>
            </div>

        </div>
    )
}