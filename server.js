 const express = require('express')

 const app = express()

 const students = require('./modules/students')

console.log('students')
 const PORT = 4000;

//  app.use((req, res, next)=> {
//     console.log(`Run middleware function`);
//     next() // go to the next middleware or to the response
//     })

 app.set('view engine', 'ejs')
 app.set('views', './views')

 app.get('/', (req, res)=> {
     res.send("Welcome students and learners!")
 })

 app.get('/students/about', (req, res)=> {
    res.send('Learn more about us')
})


 app.get('/students', (req, res)=> {
    res.render('index', {data: students, pageTitle: 'Students data'});
})

app.get('/students/new', (req, res)=> {
    res.render('new-student')
})

app.get('/teachers', (req, res)=> {
    res.send("Welcome teachers")
})

app.get('/teachers/new', (req, res)=> {
    res.render('new-teacher')
})

app.get('/teachers/careers', (req, res)=> {
    res.send("Welcome to teachers careers")

})

app.get('/teachers/about', (req, res)=> {
    res.send("Teachers' Life")
})

app.get('/teachers/promotion', (req, res)=> {
    res.send("Congratulations!!!!!")
})

app.get('/teachers/methods', (req, res)=> {
    res.send("Methods are various")
})

// app.post("/students", (req, res) => {
//     student.push(req.body)
//     console.log(req.body)
//     res.redirect('/students')
// })




 app.listen(PORT, ()=>{
     console.log('server is in progress')
 })

