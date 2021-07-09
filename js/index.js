// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  let price = product.querySelector(".price span ");
  let quantity = product.querySelector(".quantity input");
  var subTotal = product.querySelector(".subtotal span");
  
  
  subTotal.innerHTML=""; 
  subTotal.innerHTML= price.innerHTML * quantity.value; 
   
  console.log(subTotal, quantity.value, price.innerHTML);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test
  

  // ITERATION 2
  function calculateAll() {
    let product = cart.querySelectorAll("name span");
    for (let i=0; i<  ; i++){
      
    }


    subTotal.innerHTML= price.innerHTML * quantity.value;
  }

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

