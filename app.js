const express = require("express");
const app = express();
const port = 8080

app.use(express.urlencoded({extended: true}));

app.listen(port);



const numbers = app.get("http://20.244.56.144/test/primes");
let windowPrevState = []
let windowCurrState = nubers.slice(0,10);

const avgp = windowCurrState.reduce((a,b) => a+b,0)/numbers.length;



app.get("http://20.244.56.144/test/p", (req,res)=> {
    res.send({
        "windowPrevState": [2,4,6,8],
        "windowCurrState": [12,14,16,18,20,22,24,26,28,30],
        "numbers": numbers,
        "avg": avgp
    });
    
});

const numfib = app.get("http://20.244.56.144/test/fibo");
const avgf = windowCurrState.reduce((a,b) => a+b,0)/numbers.length;
windowPrevState = []
windowCurrState = numfib.slice(0,10);

app.get("http://20.244.56.144/test/f", (req,res)=> {
    res.send({
        "windowPrevState": windowPrevState,
        "windowCurrState": windowCurrState,
        "numbers": numbers,
        "avg": avgp
    });
    windowPrevState = windowCurrState;
});

const nume = app.get("http://20.244.56.144/test/even");
const avge = windowCurrState.reduce((a,b) => a+b,0)/numbers.length;
windowPrevState = [];
windowCurrState = nume.slice(0,10);
app.get("http://20.244.56.144/test/e", (req,res)=> {
    res.send({
        "windowPrivateState": windowPrevState,
        "windowCurrState": windowCurrState,
        "numbers": nume,
        "avg": avge
    })
});

const numr = app.get("http://20.244.56.144/test/rand");
windowPrevState = [];
windowCurrState = numr.slice(0,10);
const avgr = windowCurrState.reduce((a,b) => a+b,0)/numbers.length;
app.get("http://20.244.56.144/test/p", (req,res)=> {
    res.send({
        "windowPrivateState": windowPrevState,
        "windowCurrState": windowCurrState,
        "numbers": numr,
        "avg": avgr
    })
});