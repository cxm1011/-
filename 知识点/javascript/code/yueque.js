console.log("i'm a lasagna hog".split(""));
console.log("i'm a lasagna hog".split("").reverse());
console.log("i'm a lasagna hog".split("").reverse().join(""));

// var foo = "Hello";
// (function() {
//   var bar = " World";
//   console.log(foo + bar); 
// })();
// console.log(foo + bar); 

var foo = [];
foo.push(1);
foo.push(2);

var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};

Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => { throw new Error('My Error') })
  .catch(() => 1)
  .then((x) => x + 1)
  .then((x) => console.log(x))
  .catch(console.error)

  function selfFn(a, b, c, d) {
    console.log(this.name)
    console.log(arguments)
}
var obj = {
    name: 'lulu'
}
selfFn.bind(obj, 1, 2)(3, 4);