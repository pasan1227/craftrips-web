const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '7ee4c7ff59a37d9c452b62eca11580a8-b6190e87-71bf6a4d',
        domain: 'sandbox51adecff18d042518ac9fc6482b9053e.mailgun.org',
    }
}

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (email, subject, text, cb) => {

    const mailOptions = {
        from: email,
        to: 'softgenix2020@outlook.com',
        subject,
        text
    };
    
    transporter.sendMail(mailOptions, function(err, data) {
        if(err){
            cb(err, null);
        } else{
            cb(null, data);
        }
    });   
}

module.exports = sendMail;



