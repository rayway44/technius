const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});



export default async (req, res) => {
    const studentList = req.body.studentList
    const emailRegex = /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi
    const ListOfEmails = await studentList.match(emailRegex)
    
    console.log(ListOfEmails)

    for (let i = 0; i < ListOfEmails.length; i++) {
        var mailOptions = {
            from: process.env.EMAIL,
            to: ListOfEmails[i],
            subject: 'Mission Technius Class Invite',
            text: 
            `
            You've been invited to a class at MissionTechnius.com, please click this link to join the class https://missiontechnius.com/${req.body.class_uuid}
        
            ` 
        };
        
        transporter.sendMail(mailOptions, function(err, info) {
            if (err) {
                console.log(err)
                return res.send(400)
            }
        })
    }

    return res.status(200).send('Request sent successfully');
}
