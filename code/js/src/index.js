const http = require('http');
const calculator = require('./calculator');

const server = http.createServer((req, res) => {

    if (req.method === 'POST') {
        let body = '';
            
        req.on('data', chunk => {
          body += chunk.toString();
        });

        req.on('end', () => {
          try {
            const parsedBody = JSON.parse(body);

            const opName = req.url.substring(1);    
            const result = calculator[opName](parsedBody.first, parsedBody.second);    

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(`<h1>Result</h1><br/>${result}`);
            res.end();            
          } catch (err) {
            res.writeHead(400, { 'Content-Type': 'text/html' });
            res.end(JSON.stringify('<h1>JSON inválido</h1>'));
          }
        });
    }
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});