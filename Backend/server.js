const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const crypto = require('crypto-js');
const db = require('./utils/connection');
const util = require('./util');
const multer  = require('multer');
const upload = multer({ dest: './files' });

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('files/'));

app.post('/register', (req, res) => {
    if (req.body && req.body.firstName && req.body.lastName && req.body.email && req.body.password) {
        const { firstName, lastName, email, phone, password } = req.body
        const encryptPassword = crypto.SHA256(password)
        const statement = `insert into user (first_name, last_name, email, password, phone) values('${firstName}','${lastName}','${email}','${encryptPassword}','${phone}')`

        db.query(statement, (error, dbResult) => {
            res.send(util.creatResult(error, dbResult))
        })
    } else {
        res.send(util.createEmptyResult('data missing in request body'))
    }
});

app.post('/login', (req, res) => {
    if (req.body && req.body.email && req.body.password) {

        const { email, password } = req.body
        const encryptPassword = crypto.SHA256(password)
        const statement = `select user_id, email, first_name, last_name from user where email='${email}' and password='${encryptPassword}'`
    
        db.query(statement, (error, users) => {
            if (error) {
                res.send(util.creatError(error))
            } else {
                if (users.length == 0) {
                    res.send({ status: 'error', error: 'enter valid username or password' })
                } else {
                    const user = users[0]
                    res.send({
                        status: 'success', 
                        data: {
                            firstName: user.first_name,
                            lastName: user.last_name,
                            user_id:user.user_id
                        }
                    })
                }
            }
        })

    } else {
        res.send(util.createEmptyResult('data missing in request body'))
    }
});

app.post('/saveImage/:id',upload.single('image'),(req,res)=>{
    const fileName = req.file.filename
    let value = 100000 + Math.random() * 900000;
    const unique_id = Math.floor(value);
    const {id} = req.params
    const statement = `insert into files (unique_id, image, user_id) values('${unique_id}','${fileName}','${id}')`
    db.query(statement,(error,data)=>{
        res.send(util.creatResult(error,data ))
    })
});

app.get('/list/:id',(req,res)=>{
    const {id} = req.params
    const statement = `select * from files where user_id = ${id}`
    db.query(statement,(error,data)=>{
        res.send(util.creatResult(error,data ))
    })
});

app.delete('/list/:id',(req,res)=>{
    const {id} = req.params
    const statement = `delete from files where unique_id = ${id}`
    db.query(statement,(error,data)=>{
        res.send(util.creatResult(error,data ))
    })
});

app.listen(8080,'0.0.0.0',()=>{
    console.log(`server started on port 8080`);
});