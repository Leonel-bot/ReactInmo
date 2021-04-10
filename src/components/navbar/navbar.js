import React, { useEffect, useState } from 'react'
import './navbar.css'
import { Squash as Hamburger } from 'hamburger-react'
import Logo from '../../img/logo.jpg'
import { Link } from 'react-router-dom'

import {auth} from '../../firebase/firebase-config'

import useUser from '../../hooks/useUser'
import { logOut } from '../../services/logout_user'





export default function NavBar() {

    const [isOpen, setOpen] = useState(false)
    const [styleNav, setStyleNav] = useState({})
    const [styleList , setStyleList] = useState({})
    

    const user = useUser()

    const logout = () => {
        if(window.confirm("Seguro quieres cerrar sesion?")){
            logOut()
        }
    }

    const desplegar = () => {
        if (window.screen.availWidth < 992) {
            if(isOpen === false){
            setStyleNav({
                height: '60px'
            })
            setStyleList({
                visibility: 'hidden'
            })
        }
        if(isOpen === true){
            setStyleNav({
                height: '240px'
            })
            setStyleList({
                visibility: 'initial'
            })
        }
        }
    }

    useEffect(() => {
        desplegar()
    }, [isOpen])

    return (
        <div className="navBar" style={styleNav}>
            <div className="divNav">
                <div className="icon">
                    <Link to="/"><img src={Logo} alt="" srcset="" /></Link>
                </div>
                <div className="menuIcon" onClick={desplegar}>
                    <Hamburger toggled={isOpen} toggle={setOpen} color="#3277de" size={29} />
                </div>
            </div>
            <div className="listDesplegable" style={styleList}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutUs">Nosotros</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contacto</Link>
                    </li>
                    {user && 
                        <div>
                            <ul>
                                <li><Link to="/admin">ADMIN</Link></li>
                                <li onClick={logout}>Cerrar sesion</li>
                            </ul>
                        </div>
                    }
                </ul>
            </div>
        </div>

    )
}