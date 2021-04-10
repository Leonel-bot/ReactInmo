import React, { useEffect, useState } from 'react'
import './show.css'
import Carousel from '../../components/carousel/carousel'
import DataShow from '../../components/dataShow/dataShow'
import { getPost } from '../../services/get_post'

export default function Show(prop) {


    const [post, setPost] = useState({})

    const { match } = prop
    var idPost = match.params.id

    useEffect(()=>{
        getPost(idPost).then(doc => {
            setPost(doc)
        })
    },[])



    return (
        <div className="container">
            <div className="show row">
                <div className="imgShow col-12 col-lg-6">
                    <Carousel
                        pictures={post.picture}
                    />
                </div>
                <div className="datoShow  col-12 col-lg-6">
                    <DataShow 
                      title = {post.title}
                      property = {post.property}
                      operation = {post.operation}
                      city = {post.city}
                      street = {post.street}
                      number = {post.number}
                      bedroom = {post.bedroom}
                      bathroom = {post.bathroom}
                      garage = {post.garage}
                      room = {post.room}
                      showId = {post.id}
                      description = {post.description}
                    />
                </div>
            </div>
        </div>
    )
}