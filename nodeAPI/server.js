var express = require('express');
var app = express();

var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/newWork";

var bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    next();
});

var depts = mongoose.Schema({
    name: {
        type: String,
        default:''
    },
    email: {
        type: String,
        default:''
    },
    hobby: {
        type: String,
        default:''
    },
    city: {
        type: String,
        default:''
    },
    flag: {
        type: String,
        default:false
    }
});

var citys = mongoose.Schema({
    citys: {
        type: String,
    }
});

var dept = mongoose.model('dept', depts);

var city = mongoose.model('city', citys);

//for department
app.post('/insert', (req, res) => {
    let newdept = new dept(req.body);
    newdept.save().then((data) => {
        console.log("1 Record Inserted...");
        }).catch((err) => {
            res.send(err);
        });
});

app.get('/display', (req, res) => {
    dept.find({ flag:'false'}).then((result) => {
        res.send(result);
    }).catch((err) => {
        res.send(err);
    });
});

app.post('/insert/city', (req, res) => {
    let newcity = new city(req.body);
    newcity.save().then((data) => {
        console.log("1 Record Inserted...");
        res.send();
    }).catch((err) => {
        res.send(err);
    });
});

app.get('/display/city', (req, res) => {
    city.find().then((result) => {
        res.send(result);
    }).catch((err) => {
        res.send(err);
    });
});

// app.delete('/delete/:id',(req,res) => {
//     var id = req.params.id;
//     dept.findOneAndRemove({_id:id}).then((result) => {
//         res.send();
//         console.log("1 deleted record...");
//     }, (err) => {
//         console.log(err);
//     });
// });

app.post('/delete', (req, res) => {
    let id = req.body.info;
    let myquery = {_id: id};
    dept.findById(myquery).then((data) => {
        data.flag = true;
        data.save().then((data) => {
            console.log("1 Record Delete...");
            res.send(data);
        }).catch((err) => {
            res.send(err)
        });
    }).catch((err) => {
        res.send(err)
    });
});

app.post('/update', (req, res) => {
    var id = req.body.id;
    var name = req.body.name;
    var email = req.body.email;
    var hobby = req.body.hobby;
    var city = req.body.city;
    var myquery = {_id: id};
    var newquery = {$set: {name: name,email:email,hobby:hobby,city:city}};
    dept.findOneAndUpdate(myquery, newquery).then((result) => {
        res.send("1 updated record...");
    }, (err) => {
        console.log(err);
    });
});

app.listen(8080, () => {
    console.log("server start on port 8080");
    mongoose.connect(url);
    console.log("Database connected");
});