const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

it("should return the area of a quadrilateral", function() {
  const rectArea = utils.area(2, 4)
  expect(rectArea).to.equal(8)
})

it("should return the perimeter of a quadrilateral", function() {
  const rectPerim = utils.perimeter(2, 4)
  expect(rectPerim).to.equal(12)
})

it("should return the area of a circle", function() {
  const circleArea = utils.circleArea(3)
  expect(circleArea).to.equal(28.274333882308138)
})

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function() {
  const item = utils.createItem("ice cream", 1)
  utils.addItemToCart(item)

  const item2 =  utils.createItem("hot dog", 50)
  utils.addItemToCart(item2)

  const items = utils.getShoppingCart();
  expect(items[0]).to.have.property("name", "ice cream")
  expect(items[1]).to.have.property("name", "hot dog")
})

it("Should add a new item to the shopping cart", function() {
  const item = utils.createItem("ice cream", 1)
  utils.addItemToCart(item)

  const items = utils.getShoppingCart();
  expect(items[0]).to.have.property("name", "ice cream")
})

it("Should return the number of items in the cart", function() {
  const item = utils.createItem("ice cream", 1)
  utils.addItemToCart(item)

  const item2 =  utils.createItem("hot dog", 50)
  utils.addItemToCart(item2)

  expect(utils.getNumItemsInCart()).to.equal(2);
})

it("Should remove items from cart", function() {
  const item = utils.createItem("ice cream", 1)
  utils.addItemToCart(item)

  expect(utils.getNumItemsInCart()).to.equal(1);

  utils.removeItemFromCart(item);
  expect(utils.getNumItemsInCart()).to.equal(0);
})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")
