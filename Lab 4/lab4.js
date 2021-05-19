IT19079264
//---------------Q1-----------------------
console.log('hello word');

//---------------Q2------------------------
const os = require('os');

console.log('Architecture ' + os.arch());
for(const cpu of os.cpus()){
    console.log(cpu);
}
console.log('os ' + os.platform() )



//-----------------Q3-------------------------
const fs = require('fs');
const fileName = __dirname+'/test.txt';
fs.readFile(fileName, (err, data) => {
    if(err){
        console.log('not found');
        console.error(err);
        
    }
    
    console.log(data.toString());
    console.log(data);
});

fs.readFileSync(fileName, (err, data) => {
    if(err){
        
        return err;
    }
    
    return data;
});

const data = fs.readFileSync(fileName);
console.log(data.toString());

//------------Q4------------------------
const fs = require('fs');
const fileName = __dirname + '/test.txt';
const outFileName = __dirname + '/test-copy.txt';

const readStream = fs.createReadStream(fileName);
const writerStream = fs.createWriteStream(outFileName);

readStream.addListener('end', () => {
    console.log('end of file read');
});

writerStream.addListener('close',() => {
    console.log('End of file write');
});

readStream.pipe(writerStream);

readStream.on('data',data => {
        console.log(data.toString());
});

//----------------Q5--------------------------------
const http = require('http');

http.createServer((req,res) => {
    res.setHeader('Content-type','text.html');
    res.write('<h1>Hello world</h1>');
    res.end
}).listen(3000);

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    switch(req.method){
        case 'GET':
            res.write('<h1>Hello World</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data', data => {
                res.write('<h1>Hello ' + data +'<h1>');
                res.end();
            });
            break;
    }
}).listen(3000,(err) => {
    console.log('Server is listening to port 3000')
});


// const a = 5;

// const numberArray = ['1','2','3']

// const obj = {
//     name:'jayasith'
// }

// function print(){
//     console.log('print function');
// }




