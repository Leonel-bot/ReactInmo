import React, { useState } from 'react'

import './createPost.css'

import Input from '../input/input'
import Select from '../input/select'
import Textarea from '../input/textarea'
import { DateTime } from 'luxon';
import { toast } from 'react-toastify';

import 'firebase/storage'
import {storage} from '../../firebase/firebase-config'
import { createPost } from '../../services/create_post'


export default function CreatePost() {


    const [progress, setProgress] = useState(0)
    const [formReady, setFormReady] = useState(false)
    const [formulario, setFormulario] = useState({
        'title': '',
        'city': '',
        'street': '',
        'number': '',
        'property': '',
        'operation': '',
        'bedroom': '',
        'bathroom': '',
        'room': '',
        'garage': '',
        'description': '',
    })

    const validate = (ev) => {
        var name = ev.target.name
        var value = ev.target.value
        //console.log(name); console.log(value);
        setFormulario({
            ...formulario,
            [name]: value
        })
        if (formulario.title !== "" && formulario.street !== "" && formulario.city !== "" && formulario.operation !== "" && formulario.property !== "" && formulario.description !== "") {
            setFormReady(true)
        } else {
            setFormReady(false)
        }
    }


    const submit = (ev) => {
        ev.preventDefault()
        var title = formulario.title
        var city = formulario.city
        var street = formulario.street
        var number = formulario.number
        var property = formulario.property
        var operation = formulario.operation
        var bedroom = formulario.bedroom
        var bathroom = formulario.bathroom
        var room = formulario.room
        var garage = formulario.garage
        var description = formulario.description
        var picture = formulario.picture
        var time = DateTime.local().toString();



        createPost(title, city, street, number, property, operation, bedroom, bathroom, room, garage, description, picture, time)
        .then(docRef =>{
            console.log("Se cargo todo pa Document written with ID: ", docRef.id);
            alert("Se cargo todo correctamente")
            window.location.reload()
        })
        .catch(error => {
            toast.error('Algo salio mal :(', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
         });
    }



    const handlePictureUpload = (ev) => {
        const n = ev.target.files.length
        var uploadedFiles = 0
        var picture = []
        for (var i = 0; i < n; i++) {
            const files = ev.target.files[i]
            const storageRef = storage.ref(`fotos/${files.name}`);

            storageRef.put(files)
                .then(data => {
                    data.ref.getDownloadURL().then(url => {
                        picture.push(url);
                        setFormulario({
                            ...formulario,
                            picture
                        })
                    });
                })
                .catch(function (error) {
                    toast.error('Revisar las fotos :(', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                });
            storageRef.put(files).then(data => {
                uploadedFiles++;
                var porcentaje = uploadedFiles / n * 100;
                setProgress(porcentaje);
            });
        }
    }




    return (
        <div>
            <form className="formAdmin container" onSubmit={submit} onBlur={validate} onChange={validate}>
                <h4>
                    Cargar una nueva propiedad
            </h4>
                <div className="col-12 fila">
                    <Input
                        label="Titulo"
                        type="text"
                        name="title"
                    />
                </div>
                <div className="d-md-flex justify-content-md-around fila">
                    <div className="col-12 col-md-4">
                        <Select
                            label="CIUDAD"
                            name="city"
                            opcion1={<option value="">Ciudad</option>}
                            opcion2={<option value="Rosario">Rosario</option>}
                            opcion3={<option value="Fray Luis Beltran">Fray Luis Beltran</option>}
                            opcion4={<option value="Capitan Bermudez">Capitan Bermudez</option>}
                            opcion5={<option value="San Lorenzo">San Lorenzo</option>}
                            opcion6={<option value="Granadero Baigorria">Granadero Baigorria</option>}
                            opcion7={<option value="Andino">Andino</option>}
                            opcion8={<option value="Puerto">Puerto</option>}
                        />
                    </div>
                    <div className="col-12 col-md-4 p-md-3">
                        <Input
                            label="Direccion"
                            type="text"
                            name="street"
                        />
                    </div>
                    <div className="col-12 col-md-4 p-md-3">
                        <Input
                            label="Numero"
                            type="number"
                            name="number"
                        />
                    </div>
                </div>
                <div className="d-md-flex justify-content-md-around fila">
                    <div className="col-12 col-md-6">
                        <Select
                            label="PROPIEDAD"
                            name="property"
                            opcion1={<option value="">Propiedad</option>}
                            opcion2={<option value="Departamento">Departamento</option>}
                            opcion3={<option value="Casa">Casa</option>}
                            opcion4={<option value="Garage">Garage</option>}
                            opcion5={<option value="Local">Local</option>}
                            opcion6={<option value="Terreno">Terreno</option>}
                            opcion7={<option value="Oficina">Oficina</option>}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <Select
                            label="OPERACIÓN"
                            name="operation"
                            opcion1={<option value="">Operación</option>}
                            opcion2={<option value="Alquiler">Alquilar</option>}
                            opcion3={<option value="Venta">Venta</option>}
                            opcion4={<option value="Alquiler temporal">Alquiler temporal</option>}
                        />
                    </div>
                </div>
                <div className="d-md-flex fila">
                    <div className="col-12 col-md-3">
                        <Select
                            label="DORMITORIOS"
                            name="bedroom"
                            opcion1={<option value="">Dormitorios</option>}
                            opcion2={<option value="1">1</option>}
                            opcion3={<option value="2">2</option>}
                            opcion4={<option value="3">3</option>}
                            opcion5={<option value="4 +">4 +</option>}
                        />
                    </div>
                    <div className="col-12 col-md-3">
                        <Select
                            label="BAÑOS"
                            name="bathroom"
                            opcion1={<option value="">Baños</option>}
                            opcion2={<option value="1">1</option>}
                            opcion3={<option value="2">2</option>}
                            opcion4={<option value="3 +">3 +</option>}
                        />
                    </div>
                    <div className="col-12 col-md-3">
                        <Select
                            label="AMBIENTES"
                            name="room"
                            opcion1={<option value="">Ambientes</option>}
                            opcion2={<option value="1">1</option>}
                            opcion3={<option value="2">2</option>}
                            opcion4={<option value="3">3</option>}
                            opcion5={<option value="4">4</option>}
                            opcion6={<option value="5 +">5 +</option>}
                        />
                    </div>
                    <div className="col-12 col-md-3">
                        <Select
                            label="GARAGE"
                            name="garage"
                            opcion1={<option value="">Garage</option>}
                            opcion2={<option value="Si">Si</option>}
                            opcion3={<option value="No">No</option>}
                        />
                    </div>
                </div>
                <div className="col-12 container fila">
                    <Textarea
                        label="DESCRIPCIÓN"
                        name="description"
                        place="Agrega una descripción"
                    />
                </div>
                <div className="col-12 files">
                    <label htmlFor="file">Subir fotos  {Math.trunc(progress)}%</label>
                    <input type="file" multiple name="" id="file" onChange={handlePictureUpload} />
                </div>
                <div className="col-12 btnCarga">
                    {progress === 100 && formReady === true
                        ? <button>Cargar publicacion</button>
                        : <></>
                    }
                </div>
            </form>
        </div>

    )
}