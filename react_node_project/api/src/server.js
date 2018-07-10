const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const passport = require('passport');
const strategy = require('passport-local').Strategy;
const session = require('express-session');

const port = 3010;
const app = express();

//database connection
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'BooksApp'
});

con.connect((error,result)=>{
    if(error){
        console.log('error:',error);
        throw error;
    }
    console.log('database connected...');
});

//middleware
app.use(session({secret:'key'}));
app.use(passport.initialize());
app.use(passport.session());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin',req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(`Access-Control-Allow-Methods`, `POST`);
    next();
});

app.use(bodyParser.json());

//passport authentication
passport.use(new strategy((username,password,done)=>{
    console.log(username+' : ',password);
    const user = {
        username,
        password
    };
    const q = `select * from user1 where name='${username}'`;
    console.log('query:',q);
    con.query(q,(err,doc)=>{
        if(err){
            return done(err);
        }
        console.log('user',doc);
        console.log(doc[0].password,password);
        if(doc[0].password === password){
            return done(null,user);
        }else {
            return done({error:'invalid password'});
        }
    });
}));

passport.serializeUser((user,callback)=>{
    console.log('ser:',user);
    callback(null,user);
});

passport.deserializeUser((user,callback)=>{
    console.log('deser:',user);
    callback(null,user);
});

//routes
app.get('/home',(req,res)=>{
    res.send('welcome to express');
});

app.post('/login',passport.authenticate('local',{
    successRedirect:'/successLogin',
    failureRedirect:'/login'
}));

app.get('/successLogin',(req,res)=>{
    console.log('req.user',req.user);
    res.send(req.user.username);
});

app.get('/fail',(req,res)=>{
    res.send('err');
});

app.get('/logOut',(req,res)=>{
    console.log('before',req.user);
    req.logout();
    console.log('after',req.user);
    res.send('ok');
});

app.post('/register',(req,res)=>{
    console.log('in register');

    const {user} = req.body;
    console.log(user);
    let q = `insert into user1 values('${user.user_id}','${user.name}','${user.password}',${user.age})`;
    con.query(q,(err,result)=>{
        if(err){
            console.log('er',err);
            return res.status(400).send(err);
        }
        console.log('result:',result);
        res.status(200).send('success');
    });
});

app.get('/getUsres',(req,res)=>{
    console.log('djfhjh');
    let q = `select * from user1`;
    con.query(q,(err,result)=>{
        if(err){
            console.log('er',err);
            return res.status(400).send(err);
        }
        console.log('result', result);
        res.status(200).send(result);    });
});
app.listen(port,()=>{
    console.log(`server is up on port ${port}`);
});