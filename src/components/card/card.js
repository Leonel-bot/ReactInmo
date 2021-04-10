import React from 'react'
import './card.css'
import { toast } from 'react-toastify';
import KingBedOutlinedIcon from '@material-ui/icons/KingBedOutlined';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import { deletePost } from '../../services/delete_post';

export default function Card(prop) {



    const user = useUser()

    var path = window.location.pathname 

    const Delete = () => {
        if (user === true) {
            if (window.confirm("Estas seguro de borrar este post?")) {
                deletePost(prop.showId)
                .then(function () {
                    toast.success('El documento se borró con exito!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                })
                .catch(function (error) {
                    console.error("Error removing document: ", error);
                });
            }
        }
    }


    return (
        <div className="card col-12 col-md-6 col-lg-4">
            <div className="cardImge" style={{ backgroundImage: `url(${prop.picture})` }}>
            </div>
            <div className="cardDatos">
                <div className="titulo">
                    <h5>
                        {prop.title}
                    </h5>
                </div>
                <div className="datos">
                    <p className="d-inline-block text-truncate">{prop.property} en {prop.operation} </p>
                    <p id="ciudad">{prop.city}</p>
                </div>
                <div className="datoIcons">
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
                <div className="botones">
                    <a href={`https://wa.me/+5493412655600?text=Hola, me interesaría saber los requisitos y precio de la propiedad ubicada en ${prop.street} ${prop.number} (${prop.city})`}><button className="consulta">Consultar</button></a>
                    <Link to={`/post/${prop.showId}`}><button className="detalle">Detalles</button></Link>
                    {user === true && path === '/admin' &&
                        <div className="btnAdminCard">
                            <button onClick={Delete}><DeleteIcon className="delete" /></button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}