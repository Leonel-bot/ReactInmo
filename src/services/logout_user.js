import {auth} from '../firebase/firebase-config'

export const logOut = () => {
    return auth.signOut()
    .then(res => {
        return res
    })
    .catch(function(error) {
        return error
    });
}