# Backend to send daily email updates for [CovTrack19](https://github.com/kevinjacob2001/CovTrack)

Developed with **Node.js** and Sendgrid email API

Uses **Firebase Admin SDK** to access Cloud firestore and obtain email ids of users who are interested in getting daily COVID-19 vaccination updates.

Hosted on [Heroku](https://covtrack2019.herokuapp.com)

[Node Cron](https://www.npmjs.com/package/node-cron) is used to schedule the email API to send out emails everyday at 9pm.
