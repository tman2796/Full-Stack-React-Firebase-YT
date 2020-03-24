const functions = require('firebase-functions');

const app = require('express')();

const FBAuth = require('./util/fbAuth');

const {
    getAllScreams,
    postOneScream,
    getScream,
    commentOnScream
} = require('./handlers/screams')
const {
    signup,
    login,
    uploadImage,
    addUserDetails,
    getAuthenticatedUser
} = require('./handlers/users')

//Scream routes
app.get('/screams', getAllScreams)
app.post('/scream', FBAuth, postOneScream);
app.get('/scream/:screamId', getScream);

// TODO write routes
// Delete scream
// Like a scream
// unlike a scream
// comment on scream
app.post('/scream/:screamId/comment', FBAuth, commentOnScream)

// users routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);
app.get('/user', FBAuth, getAuthenticatedUser)
app.post('/user', FBAuth, addUserDetails)
// https://baseurl.com/api/screams -- good practice

exports.api = functions.https.onRequest(app);