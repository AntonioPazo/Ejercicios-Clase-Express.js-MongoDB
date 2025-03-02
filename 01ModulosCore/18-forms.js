
'use strict'

let http = require('http').createServer (webServer),
form = require('fs').readFileSync('form.html'),
querystring = require('querystring'),
util = require('util'),
dataString = ''//Cadena de texto vacía para concatenar el resultado


function webServer(req, res) {
    if (req.method == 'GET') //
    {
    res.writeHead (200, {'Content-Type': 'text/html' });
    res.end(form)//Es lo que enviará al navegador web
    }}

http.listen(3000);


/*
let http = require('http').createServer (webServer),
form = require('fs').readFileSync('form.html'),
querystring = require('querystring'),
util = require('util'),
dataString = ''//Cadena de texto vacía para concatenar el resultado
*/

/*
function webServer(req, res) {
if (req.method == 'GET') //
{
res.writeHead (200, {'Content-Type': 'text/html' });
res.end(form)//Es lo que enviará al navegador web
}}
*/

console.log(
'Servidor corriendo en http://localhost:3000/');