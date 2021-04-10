import {db} from '../firebase/firebase-config'

export const deletePost = (id) => {
    //console.log(id);
    return db.collection("posts").doc(id).delete()
}