import React, { useEffect, useState } from 'react'
import './carousel.css'
import image from '../../img/foto1.jpg'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function Carousel(prop){

    const [image , setImage] = useState([])
    const [orderImg , setOrderImg] = useState(0)
    const [conutImg , setConutImg] = useState()


    //console.log(prop.pictures);
    useEffect(() => {
        if(prop.pictures !== undefined){
            setImage(prop.pictures)
            setConutImg(prop.pictures.length)
            //console.log(prop.pictures.length);
        }
    })


    const previous = () => {
        var value = conutImg-1
        if (orderImg === 0){
            setOrderImg(value)
        }else{
            setOrderImg(orderImg -1)
        }
    }

    const next = () => {
        var value = conutImg-1
        if(orderImg === value){
            setOrderImg(0)
        }else{
            setOrderImg(orderImg+1)
        }
    }



    return(
        <div>
            {prop.title}
            <div className="carousel" style={{backgroundImage : `url(${image[orderImg]})`}}>
                <div className="btnCarousel">
                    <button onClick={previous}><NavigateBeforeIcon/></button>
                </div>
                <div className="btnCarousel">
                    <button onClick={next}><NavigateNextIcon/></button>
                </div>
            </div>
        </div>
    )
}