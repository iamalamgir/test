document.body.style.backgroundColor = localStorage.getItem("backgroundColor");
const quotes = JSON.parse(localStorage.getItem("quotes"));
// const quotes = [
//     { text: "All cruelty springs from weakness.", author: "Seneca", backgroundColor: "green" },
//     { text: "You take people as far as they will go, not as far as you would like them to go.", author: "Jeannette Rankin", backgroundColor: "orange" },
//     { text: "There are a whole lot of things in this world of ours you haven't even started wondering about yet.", author: "Roald Dahl", backgroundColor: "blue" },
//     { text: "History is merely a list of surprises. It can only prepare us to be surprised yet again. Please write that down.", author: "Kurt Vonnegut's main character in Slapstick", backgroundColor: "red" },
//     { text: "Spit on your hands and get busy. Your blood will start circulating; your mind will start ticking—and pretty soon this whole positive upsurge of life in your body will drive worry from your mind. Get busy. Keep busy. It’s the cheapest kind of medicine there is on this earth—and one of the best.", author: "Dale Carnegie", backgroundColor: "black" },
// ];

function changeQuote() {
    const randomIndex = Math.round(Math.random() * (quotes.length - 1));
    const quote = quotes[randomIndex];
    const quoteElement = document.getElementById("quote");
    quoteElement.innerHTML = quote.text;
    quoteElement.style.backgroundColor = quote.backgroundColor;
    document.getElementById("author").innerHTML = quote.author; 
};

changeQuote();
