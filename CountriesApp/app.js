const formulaire = document.querySelector(".form");
const input = document.querySelector(".input");

formulaire.addEventListener("submit",(e)=>{
e.preventDefault();
const country = input.value;
const url = `https://restcountries.com/v3.1/name/${country}`;
localStorage.setItem('url',url);
console.log(url);
function redirect()
{
    window.location.href="countrydetails.html";
}
redirect();
})


