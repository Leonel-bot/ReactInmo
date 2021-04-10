import { db } from '../firebase/firebase-config'

export const searchPost = (filters) => {
    
    const [city  , property  , operation ] = filters
    //console.log(city);return
    
    if(city && property === "" && operation === ""){
        return db.collection("posts")
        .where("city" , '==' , city)
        .get()
        .then(snapshot => {
            return snapshot.docs.map(doc => {
                const id = doc.id
                const data = doc.data()
                return {id,...data}
            })
        })
    }
    if (property && city === "" && operation === ""){
        return db.collection("posts")
        .where("property" , '==' , property)
        .get()
        .then(snapshot => {
            return snapshot.docs.map(doc => {
                const id = doc.id
                const data = doc.data()
                return {id,...data}
            })
        })

    }
    if (operation && property === "" && city === ""){
        return db.collection("posts")
        .where("operation", "==", operation)
        .get()
        .then(snapshot => {
            return snapshot.docs.map(doc => {
                const id = doc.id
                const data = doc.data()
                return {id,...data}
            })
        })
    }
    if (city && property && operation === ""){
        return db.collection("posts")
        .where("city", "==", city)
        .where("property", "==", property)
        .get()
        .then(snapshot => {
            return snapshot.docs.map(doc => {
                const id = doc.id
                const data = doc.data()
                return {id,...data}
            })
        })
    }

    if (city && operation && property === ""){
        return db.collection("posts")
        .where("city", "==", city)
        .where("operation", "==", operation)
        .get()
        .then(snapshot => {
            return snapshot.docs.map(doc => {
                const id = doc.id
                const data = doc.data()
                return {id,...data}
            })
        })
    }
    if (property && operation && city === ""){
        return db.collection("posts")
        .where("property", "==", property)
        .where("operation", "==", operation)
        .get()
        .then(snapshot => {
            return snapshot.docs.map(doc => {
                const id = doc.id
                const data = doc.data()
                return {id,...data}
            })
        })

    }
    if (property && operation && city){
        return db.collection("posts")
        .where("property", "==", property)
        .where("operation", "==", operation)
        .where("city", "==", city)
        .get()
        .then(snapshot => {
            return snapshot.docs.map(doc => {
                const id = doc.id
                const data = doc.data()
                return {id,...data}
            })
        })
    }
}