
const email=	"cloyd.huel@ethereal.email"
const password="B1MbdVzdYE7BpqwW5C"
const name='Cloyd Huel'
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
        service:"gmail",
        port:587,//465
        auth:{
            user:"cyno28cyno@gmail.com",
            pass:""
        },
})
transporter.sendMail({
    from:"Dinesh",
    to:'sonu143nagarkoti@gmail.com',
    subject:'bhuwaan ',
    text:'bhuwan chutiya',
}).then((clientInformation)=>{
    console.log(clientInformation,'hello')
})


