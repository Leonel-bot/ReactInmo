import React from 'react'
import Banner from '../../components/banner/banner'
import Filtro from '../../components/filtro/filtro'

export default function Home(){

    return(
        <div>
            <Filtro
             limit = {3}
            />
            <Banner/>
            
        </div>
    )
}