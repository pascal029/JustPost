const nodemailer = require('nodemailer')
function sendMail(user){
    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
          user: `justpost12@outlook.com`,
          pass: `PairProject`
        }
    })

    const options = {
        from : `justpost12@outlook.com`,
        to : user.email,
        subject : 'Welcome to justPost',
        text: `Thank you for registering to just post! enjoy your journey with us`

    }

    return transporter.sendMail(options, (err,info) =>{
        if(err){
            throw(err)
        } 
    })
}

module.exports = sendMail