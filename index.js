// Generate random Number

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// var cart = [];
var cart = [{itemName: "Apples", itemPrice: 10}, {itemName: "Oranges", itemPrice: 12}, {itemName: "Candy", itemPrice: 40} ];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // write your code here
  // Add Item Name and Item Price
  const itemObject = Object.assign({}, { itemName: [item], itemPrice: getRandomNumber(1, 100)});
  cart.push(itemObject);
  return `${item} has been added to your cart.`;
  
}

function viewCart() {
  const myCart = getCart();
  const myCartSize = myCart.length;
  let myString = "In your cart, you have ";
  if(myCartSize < 1){
    return "Your shopping cart is empty.";
  }else if(myCartSize === 1){
    myString += `${myCart[0].itemName} at \$${myCart[0].itemPrice}.`;
  }else if(myCartSize === 2){
    myString += `${myCart[0].itemName} at \$${myCart[0].itemPrice}, and ${myCart[1].itemName} at \$${myCart[1].itemPrice}.`;
  }else if(myCartSize > 2){
    for(let i = 0; i < myCartSize; i++){
      if(i !== myCartSize -1 ){
        myString += `${myCart[i].itemName} at \$${myCart[i].itemPrice}, `;
      }else{
        myString += `and ${myCart[i].itemName} at \$${myCart[i].itemPrice}.`;
      }
    }
  }
  return myString;
}

function total() {
  // write your code here
  const totalCart = getCart();
  let totalCartValue = 0;
  for(let i = 0; i < totalCart.length; i++ ){
    totalCartValue += totalCart[i].itemPrice;
  }
  return totalCartValue;
}

let myArray = [{itemName: "Apples", itemPrice: 10}, {itemName: "Oranges", itemPrice: 12}, {itemName: "Candy", itemPrice: 40} ];

function removeFromCart(item) {
  // write your code here
  const removeCart = getCart().slice(0, getCart().length);
  // const removeCart = myArray.slice(0, myArray.length);
  // console.log(removeCart);
  let cartItems = [];
  
  // Add items to cartItems
  for(let i = 0; i < removeCart.length; i++) {
    // console.log("I am in the loop");
    cartItems.push(removeCart[i].itemName);
    // console.log(cartItems);
  }
  // console.log("Just left the loop");
  // Check if item is in cartItems
  let itemPos = cartItems.indexOf(item);
  if(itemPos >= 0){
    // console.log("It is there!");
    // console.log(cartItems);
    console.log(removeCart);
    removeCart.splice(itemPos, 1);
    // console.log(removeCart);
    
  } else{
    // console.log(cartItems);
    // console.log("It is not there!");
    return "That item is not in your cart.";
  }
  
}

console.log(removeFromCart('Oranges'));
// console.log(removeFromCart("Tacos!"));


function placeOrder(cardNumber) {
  // write your code here
}
