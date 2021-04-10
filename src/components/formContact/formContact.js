import React from 'react'
import './formContact.css'
export default function FormContact(){
    return(
        <form action="" className="formContact">
            <input type="text" name="" id="" placeholder="Nombre y Apellido"/>
            <input type="email" name="" id="" placeholder= "Correo electrónico"/>
            <textarea name="" id="" placeholder="Mensaje"/>
            <button>Enviar</button>
        </form>
    )
}