import {db} from '../firebase/firebase-config'

export const getUltimatePosts = (limit) =>  {
    return db.collection("posts")
    .orderBy('time' , 'desc')
    .limit(limit)
    .get()
    .then(snapshot => {
        return snapshot.docs.map(doc => {
            const id = doc.id
            const data = doc.data()
            return {id , ...data}
        })
    })

}