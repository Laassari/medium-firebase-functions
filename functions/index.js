const functions = require('firebase-functions')
const admin = require('firebase-admin')

const config = {
  apiKey: 'AIzaSyD3H-hAKV5VFKTeehFTc9EnAlfNV4lDsMg',
  authDomain: 'meduim-clone.firebaseapp.com',
  databaseURL: 'https://meduim-clone.firebaseio.com',
  projectId: 'meduim-clone',
  storageBucket: 'meduim-clone.appspot.com',
  messagingSenderId: '978295741901',
}

admin.initializeApp(config)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
