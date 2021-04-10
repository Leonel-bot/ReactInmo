import React  from 'react'
import CreatePost from '../../components/createPost/createPost'
import Auth from '../auth/auth'
import useUser from '../../hooks/useUser'
import Filtro from '../../components/filtro/filtro'



export default function Admin() {



    //state user auth
    const user = useUser()
    var path = window.location.pathname 

    return(
        <div>
            { 
               user === false && <Auth/>
            }
            {
                user === true && path === '/admin' &&
                <div>
                     <CreatePost
                       
                     />
                     <Filtro
                       limit = {50}
                     />
                </div>
            }
        </div>
    )

    
}