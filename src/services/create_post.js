import {db} from '../firebase/firebase-config'

export const createPost = (title, city, street, number, property, operation, bedroom, bathroom, room, garage, description, picture, time) => {
    return db.collection('posts').add({
        title, city, street, number, property, operation, bedroom, bathroom, room, garage, description, picture, time
    }).then(res => {
        return res
    })
}