const url = require('url');

const myUrl = new URL('http://mywebsite.com:8080/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
//gets the default url

// Host (root domain)
console.log(myUrl.host);
console.log(myUrl.hostname);
//host() includes port# while hostname() doesn't

// Pathname 
console.log(myUrl.pathname);

// Serialized queries
console.log(myUrl.search);
console.log(myUrl.searchParams);
//'search' gets simple queries, while 'searchParams' gets it in Object format

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
//searchParams.append() add new query which given in the param

// Loop through params
myUrl.searchParams.forEach((val, key) => console.log(`${key}: ${val}`))