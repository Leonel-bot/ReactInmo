import React, { useEffect, useState } from 'react'
import Card from '../../components/card/card'
import './filtro.css'
import Researching from '../../icons/researching.svg'
import { getUltimatePosts } from '../../services/get_ultimate_posts'
import { searchPost } from '../../services/search_posts'
//import { LocalDining } from '@material-ui/icons'
import CircularProgress from '@material-ui/core/CircularProgress';




export default function Filtro(prop) {

    const [city, setCity] = useState("")
    const [property, setProperty] = useState("")
    const [operation, setOperation] = useState("")
    const [posts, setPost] = useState([])
    const [result, setResult] = useState()
    const [separador, setSeparador] = useState()


    const filterCity = (ev) => {
        setCity(ev.target.value)
    }
    const filterProperty = (ev) => {
        setProperty(ev.target.value)
    }
    const filterOperation = (ev) => {
        setOperation(ev.target.value)
    }


    function ultimatePosts() {
        if (city === "" && property === "" && operation === "") {
            getUltimatePosts(prop.limit).then(docs => {
                setPost(docs)
            })
        }
        setSeparador("Ultimos agregados")
    }
    
    useEffect(() => {;
        ultimatePosts()
        setResult()
    }, [])

    function findResult(docs) {
        if (docs.length === 0) {
            setSeparador("No se encontraron resultados")
            setResult(0)
        } else {
            setSeparador("Resultados")
            setResult(docs.length)
        }
        setPost(docs)
    }



    const search = (ev) => {
        const filters = [city  , property  , operation ]
        searchPost(filters).then(docs => {
            setPost(docs)
            findResult(docs)
        })
    }

    return (

        <div>
            <div className="filtro container">
                <select name="" id="" className="col-12 col-md-10 col-lg-3" onChange={filterCity}>
                    <option value="">Ciudad</option>
                    <option value="Rosario">Rosario</option>
                    <option value="Granadero Baigorria">Granadero Baigorria</option>
                    <option value="Capitan Bermudez">Capitan Bermudez</option>
                    <option value="Fray Luis Beltran">Fray Luis Beltran</option>
                    <option value="San Lorenzo">San Lorenzo</option>
                    <option value="Puerto">Puerto</option>
                    <option value="Andino">Andino</option>
                </select>
                <select name="" id="" className="col-12 col-md-10 col-lg-3" onChange={filterProperty}>
                    <option value="">Propiedad</option>
                    <option value="Departamento">Departamento</option>
                    <option value="Casa">Casa</option>
                    <option value="Cochera">Cochera</option>
                    <option value="Local">Local</option>
                    <option value="Terreno">Terreno</option>
                    <option value="Oficina">Oficina</option>
                </select>
                <select name="" id="" className="col-12 col-md-10 col-lg-3" onChange={filterOperation}>
                    <option value="">Operación</option>
                    <option value="Alquiler">Alquilar</option>
                    <option value="Venta">Comprar</option>
                    <option value="Alquiler temporal">Alquiler temporal</option>
                </select>
                <button className="col-12 col-md-10 col-lg-1" onClick={search}>Buscar</button>
            </div>
            <div class="container">
                <div className="findResult">
                    <h3>
                        {separador} {result}
                    </h3>
                    {
                        result === 0 &&
                        <div className="notResultImg">
                            <img src={Researching} alt="" srcset="" />
                        </div>
                    }
                </div>
                <div className="row rowCard">
                    {result === -1 &&
                        <div className="spinner"><CircularProgress/></div>
                    }
                    {posts.map(post => (
                        <Card
                            key={post.id}
                            picture={post.picture[0]}
                            title={post.title}
                            property={post.property}
                            operation={post.operation}
                            street={post.street}
                            number={post.number}
                            city={post.city}
                            bedroom={post.bedroom}
                            bathroom={post.bathroom}
                            garage={post.garage}
                            room={post.room}
                            showId={post.id}
                        />

                    ))}
                </div>

            </div>
        </div>
    )
}