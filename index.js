
const email=	"cloyd.huel@ethereal.email"
const password="B1MbdVzdYE7BpqwW5C"
const name='Cloyd Huel'
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
        host:"smtp.ethereal.email",
        port:587,//465
        auth:{
            user:email,
            pass:password
        },
})
transporter.sendMail({
    from:"Dinesh <dineshsingh9582@gmail.com>",
    to:'dineshsingh9582@gmail.com',
    subject:'hello random',
    text:'hello world',
}).then((clientInformation)=>{
    console.log(clientInformation,'hello')
})


