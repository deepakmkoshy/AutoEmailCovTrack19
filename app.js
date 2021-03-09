const cron = require('node-cron')
const sgMail = require('@sendgrid/mail')
const express = require('express')
const { request } = require('@sendgrid/client')
const mail = require('./mail')

// Firebase admin access
const admin = require('firebase-admin');


admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

//Firestore

const db = admin.firestore();

const users =[]

// Obtaining emails opted in for daily updates from cloud firestore
db.collection('users').get().then((snapshot)=>{
  snapshot.forEach(doc => {
    users.push(doc.data()['email'])
  });
//Calling the cron schedule function
mail(users)
})

const app = express()
const port = process.env.PORT || 3000;


app.get('/', function (req, res) {
  res.send("COVTRACK 19 DAILY EMAILS BACKEND( INTEGRATED USING NODEJS AND SENDGRID EMAIL API CLIENT");
});

app.listen(port, () => console.log(`listening on port ${port}!`));