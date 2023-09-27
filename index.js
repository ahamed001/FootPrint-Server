const ConnectDB = require('./Module/Connect.js');
const express = require('express');
const cors = require('cors');
const footprintmodel = require('./Module/Footprint.js');

const port = process.env.Port || 4000;

const app = express();
app.use(express.json());
app.use(cors());

app.post('/sigin',(req,res) => {
    const {email, password} = req.body;
    footprintmodel.findOne({email: email})
    .then(user => {
        if (user){
            if (user.password === password){
                res.json('Success')
            } 
            else {
                res.json('The password is incorrect')
            }
        } 
        else {
            res.json('No record existed')
        }
    })   
})

app.post('/joinus',(req,res) => {
    footprintmodel.create(req.body)
    .then(joinus => res.json(joinus))
    .catch(err => res.json(err))
})

ConnectDB();

app.listen(port, ()=>{
    console.log('listening on', port );
})