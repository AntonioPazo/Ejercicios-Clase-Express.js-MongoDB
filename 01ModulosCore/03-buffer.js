
'use strict'

let buf= new Buffer(100),
buf2 = new Buffer(26),
str = '\u00bd + \u00bc = \u00be';


buf.write('abcd', 0, 4, 'ascii');


console.log(
    buf,
    str,
    buf.toString('ascii'),
    str.length + 'caracteres',
    Buffer.byteLength(str, 'utf8') + 'bytes',
    buf2.length
);

for (var i = 0; i < buf2.length; i++)
{
// 97 en ASCII es a
buf2[i] = i + 97;
}
console.log(buf2.toString('ascii') );

//pagina diapositiva 79 file:///C:/Users/pazop/Downloads/UD5-%20Asincron%C3%ADa%20-%20Nodejs.pdf