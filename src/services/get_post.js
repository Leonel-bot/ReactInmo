import { db } from '../firebase/firebase-config'

export const getPost = (idPost) =>  {
    return db.collection("posts")
    .doc(idPost)
    .get()
    .then(doc => {
        return doc.data()
    })

}
