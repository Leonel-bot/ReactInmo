import React, { useState } from 'react'
import './auth.css'
import {auth} from '../../firebase/firebase-config'


export default function Auth() {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const [message, setMessage] = useState()

    const login = (ev) => {
        auth.signInWithEmailAndPassword(email, pass)
        .then((user) => {
            console.log(user);
        })
        .catch((error) => {
            var errorCode = error.code;
            if(errorCode === 'auth/wrong-password'){
                setMessage("La contraseña no es válida o el usuario no tiene contraseña.")
            } else if(errorCode === 'auth/user-not-found'){
                setMessage('No hay ningún registro de usuario que corresponda a este identificador.')
            }
        });
    }


    return (
        <div>
            <div className="pageLogin">
                <form action="" className="formLogin" onSubmit={login}>
                    <h4>
                        Iniciar Sesion
                    </h4>
                    <input type="email" name="" id="" placeholder="Correo electrónico" onChange={(ev) => { setEmail(ev.target.value) }} required />
                    <input type="password" name="" id="" placeholder="Contraseña" onChange={(ev) => { setPass(ev.target.value) }} required />
                     <p>{message}</p>
                    <button>Iniciar sesion</button>
                </form>
            </div>
        </div>
    )
}