const input = document.getElementById("input");
const btn = document.getElementById("btn");
const title = document.getElementById("title");
const price = document.getElementById("price");
const description = document.getElementById("description");

// Function to fetch product data
async function getData(id) {
  let promise = await fetch(`https://fakestoreapi.com/products/${id}`);
  return await promise.json();
}

// Event listener for button click
btn.addEventListener("click", async () => {
  let idVal = input.value;
  
  // Simple validation
  if (idVal < 1 || idVal > 20) {
    alert("Please enter a valid product ID between 1 and 20.");
    return;
  }

  let result = await getData(idVal);

  // Set values to DOM elements
  title.innerText = `${result.title}`;
  price.innerText = `$${result.price}`;
  description.innerText = `${result.description}`;
});
