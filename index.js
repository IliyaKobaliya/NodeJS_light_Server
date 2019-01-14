//
// const Obj = {
//     'Andru': {
//         age :21
//     },
//     'Dima':{
//         age :27
//     },
//     'James':{
//         age :30
//     }
// };
// console.log(Obj['Andru'].age);
// const Mass = [];
// for(key in Obj){
//     console.log(key);
//     Mass.push(`${key} is ${key.age}`);
// }
// console.log(Object.getOwnPropertyNames(Obj));
// for(let i = 0 ; i <= Obg.length; i++ ){}

// console.log(Mass);
// function add(a, b) {
//     a = 10;
//     b = 9;


//     return a + b
// };
//
// function SQRT(c) {
//     c = add();
//     return Math.sqrt(c)
// }
//
// function round(d) {
//     d = SQRT();
//     return Math.round(d)
// }
//
// console.log(add());
// console.log(`Koren chisla ${add()} = ${SQRT()}`);
// console.log(`Okruglim do celogo chisla ${SQRT()} = ${round()}`);


var http = require('http');

var server = http.createServer(function (req,res) {
    console.log(req.url);
    res.writeHead(200,{'Content-Type':'text/plaine; charset = utd-8'});
    res.end('Oh no Oh no');
});
server.listen(3000,'127.0.0.1');

