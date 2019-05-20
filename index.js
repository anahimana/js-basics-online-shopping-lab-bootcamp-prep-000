// Generate random Number

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

var cart = [];
// var cart = [{itemName: "Apples", itemPrice: 10}, {itemName: "Oranges", itemPrice: 12}, {itemName: "Candy", itemPrice: 40} ];

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


function removeFromCart(item) {
  // write your code here
  console.log("IN")
  const removeCart = getCart();

  for(let i = 0; i < removeCart.length; i++) {
    if (removeCart[i].itemName === item) {
      removeCart.splice(i, 1);
    }
  }
}

addToCart("vanilla");
addToCart("watermelon");
addToCart("yams");

removeFromCart("watermelon");
console.log(getCart());


function placeOrder(cardNumber) {
  // write your code here
}
