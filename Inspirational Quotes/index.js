const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");

const apiKey = "n9U2jrYnSVPZUTrC0b+glw==I8W8U3NJoGrxoOI1";

const options = {
    method: "GET", 
    headers: {
        "X-Api-key": apiKey, 
    },
};

const apiURL = "https://api.api-ninjas.com/v1/quotes?category=inspirational";

async function getQuote() {

    try {
        quoteEl.innerText = "Updating..";
    btnEl.disabled = true;
    btnEl.innerText = "Loading..";
    const response =await fetch(apiURL, options);
    const data =await response.json()

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Quote";

    quoteEl.innerText = data[0].quote;
    } catch (error) {
        quoteEl.innerText = "An error occurred, Try again later"
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a Quote";
        console.log(error)
    }
    
}


btnEl.addEventListener("click", getQuote);