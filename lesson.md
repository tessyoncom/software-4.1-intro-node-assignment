## Brief

### Preparation

Instructors to make sure that node, npm, and Postman are installed in the learners' machines. To check the installation, use the following commands:
```
node -v
npm -v
```

The YARC (Yet Another Rest Client) can be used in lieu of Postman, but it's preferred for the instructor show both as needed.


### Lesson Overview

This lesson focuses on learning more about NodeJS as a server environment. Learners will be creating a simple backend server and access it through clients.

---

## Part 1 - What is NodeJS

Node.js is an open source server environment that runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.).

Node.js uses JavaScript on the server. In VSCode, when the `Run Code` command is executed, it runs on the Node environment. This is helpful if there is no need for HTML files to run standalone JavaScript code.

To run individual JavaScript files, the node command is used, e.g. `node index.js`.

### What can NodeJS servers do?
- Node.js can generate dynamic page content
- Node.js can create, open, read, write, delete, and close files on the server
- Node.js can collect form data
- Node.js can add, delete, modify data in your database

This lesson will focus on creating a server and doing some basic response to requests.

---

## Part 2 - Hello World in NodeJS and the HTTP module

*Note for Instructor: Guide the learners in doing `npm init` in a working folder similar to the src folder*

After creating the package.json, create a file called index.js in the same directory:
```js
//index.js
const http = require("http");

//create a server object:
http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
```

After creating the file, open a terminal window and run the command: `node index.js`. This runs the index.js file in a Node environment. This application is the web server and will not terminate unless `ctrl + c` was entered in the keyboard.

To see the output, open YARC or Postman and type: localhost:8080 in the address bar. In the response, the phrase "Hello World" is seen.

<img src="./assets/helloWorld.png" />

### HTTP Module

Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP). The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

The `createServer()` method is used to create an HTTP server. The function inside is then passed into the method and will be executed when someone tries to access the computer on port 8080.

To add http headers, the `writeHead()` is used to displace the content type properly

```js
//index.js
...
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); //Add this line
    res.write('Hello World!'); 
    res.end(); 
}).listen(8080);
```
The first argument of the `res.writeHead()` method is the status code 200 that means all is OK, the second argument is an object containing the response headers.

You can read through the status code in this [page](https://www.tutorialspoint.com/http/http_status_codes.htm)

---

## Part 3 - Reading URLs

The function passed into the http.createServer() has a req argument that represents the request from the client, as an object.

This object has a property called "url" which holds the part of the url that comes after the domain name, which can be used as needed
```js
//index.js
...
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url === "/summer"){
        res.write("Tis a fine summer day");
    } else if (req.url === "/winter") {
        res.write("Tis a cold winter morning");
    } else {
        res.write(req.url);
    }
    res.end(); 
}).listen(8080);
```

Test it out by typing `localhost:8080/summer`, `localhost:8080/winter`, and `localhost:8080/random_endpoint`.

### Splitting Query Strings.

The URL module splits up a web address into readable parts. To include the URL module, use the `require()` method.

```js
//index.js
...
const url = require("url");
...
```

After the url module has been included, an address can then be parsed or read with the `url.parse()` method, and it will return a URL object with each part of the address as properties.

```js
//index.js
...
let urlString = url.parse(req.url, true);
// res.write(urlString.pathname);
res.write(JSON.stringify(urlString.query));
...
```

Try it out by typing in the address bar `localhost:8080/summer?year=2023`, and try playing around with the pathname and query string.