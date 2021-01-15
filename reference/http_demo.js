const http = require('http');

// Create server object
http
          .createServer((req, res) => {
                    // Write response
                    res.write('hello world');
                    res.end();
          })
          .listen(5000, () => console.log('Server running...'));

//Now by simply running 'node http_demo', this http server object will be created
//Will be able to access through browser with URL:'localhost:5000'
//when stopping server running, type ctr+c in cmd