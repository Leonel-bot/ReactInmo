import React from 'react'
import FormContact from '../../components/formContact/formContact'
import './contact.css'

export default function Contact() {
    return (
        <div className="container">
            <div className="contact row">
                <div className="textContact col-11 col-lg-6">
                    <h4>Contactanos</h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, dolor iusto. Doloremque saepe expedita atque sit pariatur at eligendi sunt.
                    </p>
                </div>
                <div className="formContact  col-11 col-lg-6">
                    <FormContact/>
                </div>
            </div>
        </div>
    )
}