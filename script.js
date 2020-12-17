console.log('hello')



let textInput = document.querySelector('#input').value;
//sets up the button



// what the code should look like whithout documentation.
let button = document.querySelector("#submitButton");
button.addEventListener("click", getData);
async function getData(event) {
  event.preventDefault();
  let textInput = document.querySelector('#input').value;
  const url = `https://api.nationalize.io?name=${textInput}`;

  await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      const topResult = document.querySelector("#firstResult");
      topResult.innerHTML = `We think your top nationality is: ${res.country[0].country_id} with a ${res.country[0].probability.toFixed(2)}% probability!`;
      
    })
    .catch((err) => console.log("somthing went wrong...", err));
}
//var= probability = num * 100