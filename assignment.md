## Assignment

### Brief

**Part 1** 
Create a server with the following endpoints:
- /profile
- /products
- /cart
- /register
- /login
Each of the endpoints should output the following as a response: *This is the <pathname> page!*. E.g. *This is the /login page*

**Part 2**
In the /products endpoint, add a query called search and if the search belongs to the list below, print *Product <search> found*, if not, print *Product <search> not found*

This list contains the words that would return found:
1. Milk
2. Eggs
3. Cheese
4. Pork
5. Shrimp
6. Chicken

Ex1. localhost:8080/products?search=eggs -> Product "eggs" found.

Ex2. localhost:8080/products?search=Beef -> Product "Beef" not found.


### Submission 

- Submit the URL of the GitHub Repository that contains your work.
- Should you reference the work of your classmate(s) or online resources, give them credit by adding either the name of your classmate or URL. 

### References

_Example of Referencing Classmate_

Referenced the code block below.
```js
    //this code is referenced from <source>
    function printMe(){
        console.log("I am a reference example");
    }
```

_Example of Referencing Online Resources_

- https://developer.mozilla.org/en-US/
- https://www.w3schools.com/html/
- https://stackoverflow.com/questions/14494747/how-to-add-images-to-readme-md-on-github

