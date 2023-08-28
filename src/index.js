//index.js
const http = require("http");
const url = require("url");

//create a server object:
//index.js

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    if (req.url === "/profile") {
      res.write("You are on the prfile page \n ");
    } else if (req.url.startsWith("/products")) {
      res.write("You are on the product page");
      const product = ["Milk", "Eggs", "Cheese", "Pork", "Shrimp", "Chicken"];

      let urlString = url.parse(req.url, true);
      let query = urlString.query;

      const findProduct = product.find(
        (item) => item?.toLowerCase() === query.product.toLowerCase()
      );
      if (findProduct) {
        res.write(` Product ${query.product} found`);
      } else {
        res.write(` Product ${query.product} not found`);
      }
    } else if (req.url === "/cart") {
      res.write("You are on the cart page");
    } else if (req.url === "/register") {
      res.write("You are on the register page");
    } else if (req.url === "/login") {
      res.write("You are on the login page");
    } else {
      res.write(req.url);
    }

    res.end();
  })
  .listen(8080);
