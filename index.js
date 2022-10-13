const http=require('http');
const server=http.createServer((req,res)=>{
    res.write(`<h1>Hello to Node Js </h1>`);
    res.write(JSON.stringify(["learning Node Js","hello world"]));
    res.end();
})
server.listen(3000);