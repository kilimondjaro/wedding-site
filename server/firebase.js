var firebase = require("firebase/app");
const admin = require('firebase-admin');
require("firebase/firestore");

var firebaseConfig = {}; 

firebase.initializeApp(firebaseConfig);

let serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore()

const COLLECTIONS = {
    guests: 'guests',
    wishlist: 'wishlist'
}

function addGuest(data) {
    return db.collection(COLLECTIONS.guests).add(data)  
}

function getWishlist() {
    return db.collection(COLLECTIONS.wishlist).get().then(snapshot => {        
        if (snapshot.empty) {         
            return null;
        }  
        
        let wishlist = [];
        snapshot.forEach(doc => {
            let data = doc.data()
            data.id = doc.id

            wishlist.push(data);
        });        

        return wishlist;
    });        
}

function reserverGift(data) {
    return db
        .collection(COLLECTIONS.wishlist)
        .doc(data.id)
        .set({ reserved: true }, { merge: true })
}

function deleteGift(data) {
    return db
        .collection(COLLECTIONS.wishlist)
        .doc(data.id)
        .delete()
}

function addGift(data) {
    return db
        .collection(COLLECTIONS.wishlist)
        .add(data)        
}

module.exports = {
    addGuest,
    getWishlist,
    reserverGift,
    deleteGift,
    addGift
}







