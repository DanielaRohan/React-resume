const express = require ('express')
const app = express()
const PORT = 3031
const server = app.listen (PORT, function () {console.log(`server started at ${PORT}`)})

app.get('/api/resume/:name',function(req, res) {
    const data = {
    andrei: {
        name: "andrei",
        role: "React DEV",
        phone: "0746373823",
        email: "andrei@god.com",
        about: {
            title: 'ABOUT ME',
            details: `<i>Într-un sens general, paragraful este un pasaj dintr-un text scris despărțit de restul textului prin procedee grafice.</i>
            <br /> Din punct de vedere stilistic, este un fragment unitar prin faptul că cuprinde o anumită idee.`
        },
       work: {
            title: 'WORK EXPERIENCE',
            details: `I have started intense programming ~8 years ago, extremely curious to find out the meaning of “angular, node and couchdb” words. Those are the three words that were part of the daily incantation of one of my good friend (later my trainer). Since then I have "learned" more similar words like Vue.js, React.js, npm, yarn, etc. Since my background is in DTP (I used to have a small printing shop),  was quite easy to understand the true frontend requirements, and to easily accomplish pixel-perfect specifications. I have worked on multiple projects since, most of them being FE and some full-stack. I love Vue.js the most, out of all frameworks out there. Later I have switched to being also a tech trainer, and I am currently teaching students at the University of Technology and Information in Bucharest (Romania).`
        },
        soft_skills: {
            title: 'SOFT SKILLS',
            details: `Leading <br/>
            Teamwork<br/>
            Active listening <br/>
            Optimism <br/>
            Self-confidence <br/>
            Self discipline <br/>`
        },
        special_skills: {
            title: 'SPECIAL SKILLS',
            details: `Teaching and mentorship. I have a youtube channel of tutorials in my native language.<br/><br/>I have an optional class of web development overview at University of Computer Science Bucharest along with private classes.`
        },
        skills:  [{
            name: 'HTML',
            rate: 8
        },
        {
            name: 'CSS',
            rate: 7
        },
        {
            name: 'JS',
            rate: 8
        },
        {
            name: 'VUE.JS',
            rate: 7
        },
        {
            name: 'QUASAR.JS',
            rate: 6
        },
        {
            name: 'REACT.JS',
            rate: 7
        },
        {
            name: 'TESTING',
            rate: 7
        },
        {
            name: 'NPM/YARN',
            rate: 3
        },
        {
            name: 'GIT',
            rate: 4
        },
        {
            name: 'NODE.JS',
            rate: 5
        },{
            name: 'PHOTOSHOP',
           rate: 7
        }],
        education: {
            title: 'EDUCATION',
            details: ` IT SCHOOL courses
            05.2022-10.2022
            Study program: Frontend Dev.
            <br /><br />
            University of Lincoln 
            2018-2021
            Study program: Auto engineering
            Electrical-Electronical
            <br /><br />
            Technologic Highschool
            2012-2016
            Economic`
        },
        current_project: {
            title: 'CURRENT PROJECTS',
            details: `BMJ (British Medical Journal) (UK)
            Public learning platform
            role: Frontend lead
            <br /><br />
            PORTAIL AUTOENTREPRENEUR.FR
            Accounting manager platform
            role: Frontend Lead
            <br /><br />
            GIVVABLE (AUS)
            Companies database
            role: Frontend Lead`
        },
        personal_project: {
            title: 'PERSONAL PROJECTS',
            details: `BAND ON DEMAND
            Web app to allow musicians
            <br /><br />
            MY ONLINE BRAIN
            Web app to manage online learning and information management and storage
            <br /><br />
            AUTOSERVICEPRO.RO
            Web app to trade automotive parts.`
        }
},
    iulian:  {
        name: "Iulian",
        role: "FE DEV",
        phone: "0796379823",
        email: "iulian@god.com",
        about: {
            title: "ABOUT ME",
            details: `<i>Într-un sens general, paragraful este un pasaj dintr-un text scris despărțit de restul textului prin procedee grafice.</i>
            <br /> Din punct de vedere stilistic, este un fragment unitar prin faptul că cuprinde o anumită idee.`
        },
       work: {
            title: 'WORK EXPERIENCE',
            details: `I have started intense programming ~8 years ago, extremely curious to find out the meaning of “angular, node and couchdb” words. Those are the three words that were part of the daily incantation of one of my good friend (later my trainer). Since then I have "learned" more similar words like Vue.js, React.js, npm, yarn, etc. Since my background is in DTP (I used to have a small printing shop),  was quite easy to understand the true frontend requirements, and to easily accomplish pixel-perfect specifications. I have worked on multiple projects since, most of them being FE and some full-stack. I love Vue.js the most, out of all frameworks out there. Later I have switched to being also a tech trainer, and I am currently teaching students at the University of Technology and Information in Bucharest (Romania).`
        },
        soft_skills: {
            title: 'SOFT SKILLS',
            details: `Leading <br/>
            Teamwork<br/>
            Active listening <br/>
            Optimism <br/>
            Self-confidence <br/>
            Self discipline <br/>`
        },
        special_skills: {
            title: 'SPECIAL SKILLS',
            details: `Teaching and mentorship. I have a youtube channel of tutorials in my native language.<br/><br/>I have an optional class of web development overview at University of Computer Science Bucharest along with private classes.`
        },
        skills: [    {
            name: 'HTML',
            rate: 8
        },
        {
            name: 'CSS',
            rate: 7
        },
        {
            name: 'JS',
            rate: 8
        },
        {
            name: 'VUE.JS',
            rate: 7
        },
        {
            name: 'QUASAR.JS',
            rate: 6
        },
        {
            name: 'REACT.JS',
            rate: 7
        },
        {
            name: 'TESTING',
            rate: 7
        },
        {
            name: 'NPM/YARN',
            rate: 3
        },
        {
            name: 'GIT',
            rate: 4
        },
        {
            name: 'NODE.JS',
            rate: 5
        },{
            name: 'PHOTOSHOP',
           rate: 7
        }],
        education: {
            title: 'EDUCATION',
            details: ` IT SCHOOL courses
            05.2022-10.2022
            Study program: Frontend Dev.
            <br /><br />
            University of Lincoln 
            2018-2021
            Study program: Auto engineering
            Electrical-Electronical
            <br /><br />
            Technologic Highschool
            2012-2016
            Economic`
        },
        current_project: {
            title: 'CURRENT PROJECTS',
            details: `BMJ (British Medical Journal) (UK)
            Public learning platform
            role: Frontend lead
            <br /><br />
            PORTAIL AUTOENTREPRENEUR.FR
            Accounting manager platform
            role: Frontend Lead
            <br /><br />
            GIVVABLE (AUS)
            Companies database
            role: Frontend Lead`
        },
        personal_project: {
            title: 'PERSONAL PROJECTS',
            details: `BAND ON DEMAND
            Web app to allow musicians
            <br /><br />
            MY ONLINE BRAIN
            Web app to manage online learning and information management and storage
            <br /><br />
            AUTOSERVICEPRO.RO
            Web app to trade automotive parts.`
        }
}}
    const name  = req.params.name
    res.send(data[name])
})