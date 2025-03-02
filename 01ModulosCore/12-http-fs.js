let http = require('http').createServer(webServer),
    fs = require('fs'),
    index = fs.createReadStream('assets/index.html');
function webServer(req, res)
{
    function readfILE(err, data){
        if(err) throw err
        res.end(data);
    }
    res.writeHead (200, {'Content-Type': 'text/html'});
    //Equivocarse en la ruta para explicar el if(err) throw err; 
    fs.readFile('assets/index.html', readFile);
}

http.listen(3000)

console.log('Servidor corriendo en http://localhost:3000/');