const sgMail = require('@sendgrid/mail')
const cron = require('node-cron')

const { request } = require('@sendgrid/client')

var sendFunc = (users)=>
{
    sgMail.setApiKey(process.env.SENDGRID_API)
    const msg = {
      to: users, 
      from: 'dmk@technorivals.com', 
      subject: 'Vaccination stats for today',
      text: 'These are the COVID stats for today:',
      html: '<strong>These are the COVID vaccination stats for today:</strong><br><a href = "https://india-covid19vaccine.github.io/csv/national_timeline.csv">National Timeline</a><br><br><a href = "https://india-covid19vaccine.github.io/csv/state_timeline.csv">Statewise Timeline</a>',
    }
    sgMail
      .send(msg,true)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
}

const start =(users)=>{
  // console.log(users);
cron.schedule('0 21 * * *', () => {
    console.log('Sending daily emails at 9pm');
    sendFunc(users);
  });
}

  module.exports = start