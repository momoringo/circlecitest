const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

const Ref = db.collection('user').doc('sf3Gfu1KP9vEjtkN71Eh');

var util = require('util');

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.tt = functions
  .region('asia-northeast1')
  .firestore
  .document('test/{companyId}/')
  .onWrite(async (change, context) => {
const f = functions.config();


let gb = null;
       // g.map(_ => console.log(_))
    try {
  	gb = await Ref.get();
    } catch(e) {
      console.error(e.message);
    }
  		    console.log(util.inspect(gb,false,null));

              /*
await Ref.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
           // console.log(doc.id, " => ", JSON.stringify(doc.data()));
           console.log(doc.id, " => ", util.inspect(doc.data(),false,null));

        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  */
  });


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
