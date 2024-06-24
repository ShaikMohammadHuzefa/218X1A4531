const express = require("express");
const app = express();
const port = 9876;

app.use(express.urlencoded({extended: true}));

app.listen(port);



const numbers = app.get("http://20.244.56.144/test/primes");

let windowCurrState = numbers.slice(0,10);

const avgp = windowCurrState.reduce((a,b) => a+b,0)/windowCurrState.length;



app.get("http://9876/test/p", (req,res)=> {
    let windowPrevState = [];
    res.send({
        "windowPrevState": windowPrevState,
        "windowCurrState": windowCurrState,
        "numbers": numbers,
        "avg": avgp
    });
    windowPrevState = windowCurrState;
    
});

const numfib = app.get("http://20.244.56.144/test/fibo");


windowCurrState = numfib.slice(0,10);
const avgf = windowCurrState.reduce((a,b) => a+b,0)/windowCurrState.length;

app.get("http://9876/test/f", (req,res)=> {
    let windowPrevState = [];
    res.send({
        "windowPrevState": windowPrevState,
        "windowCurrState": windowCurrState,
        "numbers": numfib,
        "avg": avgf
    });
    windowPrevState = windowCurrState;
});

const nume = app.get("http://20.244.56.144/test/even");


windowCurrState = nume.slice(0,10);
const avge = windowCurrState.reduce((a,b) => a+b,0)/windowCurrStatelength;
app.get("http://9876test/e", (req,res)=> {
    let windowPrevState = [];
    res.send({
        "windowPrivateState": windowPrevState,
        "windowCurrState": windowCurrState,
        "numbers": nume,
        "avg": avge
    });
    windowPrevState = windowCurrState;
});

const numr = app.get("http://20.244.56.144/test/rand");
windowPrevState = [];
windowCurrState = numr.slice(0,10);
const avgr = windowCurrState.reduce((a,b) => a+b,0)/windowCurrState.length;
app.get("http:/9876/test/p", (req,res)=> {
    let windowPrevState = [];
    res.send({
        "windowPrivateState": windowPrevState,
        "windowCurrState": windowCurrState,
        "numbers": numr,
        "avg": avgr
    });
    windowPrevState = windowCurrState;
});