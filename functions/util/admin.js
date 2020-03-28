const admin = require('firebase-admin')

const serviceAccount = require('../socialape-41891-firebase-adminsdk-g4grm-c7847520a1.json')
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://socialape-41891.firebaseio.com",
    storageBucket: "socialape-41891.appspot.com"
});

const db = admin.firestore();

module.exports = {
    admin,
    db
};