/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
Name: Brandon White
Date of Last Modification: 28/06/2020
******************************************/

'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        const quotesCopy = []; // ← Array to hold the quotes objects already printed to quote-box div

        // ↓ Returns random quote object from array named quotes
        const getRandomQuote = () => {
            if  (quotes.length === 0) { // ← If the quotes array is empty: 
                quotes = quotesCopy.slice(); // ← Copy the quotesCopy array into it
                quotesCopy.splice(0, quotesCopy.length);
            }
            const randQuote = quotes[Math.floor(Math.random() * quotes.length)]; // ← Grabs random quote
            quotesCopy.push(randQuote); // ← Pushes selected quote into array for copied quotes
            quotes.splice(quotes.indexOf(randQuote), 1); // ← Removes selected quote from quotes array
            return randQuote;
        }

        // ↓ Returns random rgb color
        const getRandomColor = () =>  "rgb(colors)".replace('colors', Array.from({length: 3}, () => Math.floor(Math.random() * 256)));

        // ↓ Calls getRandomQuote and getRandomColor functions
        //   then prints quote and changes background color for body and button
        const printQuote = () => {
            // ↓ Sets Quote
            const quote = getRandomQuote();
            let HTML_str = `<p class="quote">${quote.quote}</p>
                            <p class="source">${quote.actor} as ${quote.source}`;
            if (quote.citation) HTML_str += `<span class="citation">${quote.citation}, dir. ${quote.director}`;
            if (quote.year) HTML_str += `<span class="year">${quote.year}</span></p>`;
            HTML_str += `</p>`;
            document.getElementById("quote-box").innerHTML = HTML_str;
            // ↓ Sets Color
            const color = getRandomColor();
            document.querySelector("body").style.backgroundColor = color;
            document.getElementById("loadQuote").style.backgroundColor = color;
        }

        // ↓ Resets quoteTimer so printQuote function cannot be auto
        //   called immediately after "Show Another Quote button is clicked"
        const resetTimer = () => {
            clearInterval(quoteTimer);
            quoteTimer = setInterval(printQuote, 20000);
        }
        let quoteTimer = setInterval(printQuote, 20000); // ← Sets a timer so quote auto changes every 20 secs
        // ↓ On click a new quote is printed AND the quoteTimer is reset
        document.getElementById('loadQuote').addEventListener("click", printQuote);
        document.getElementById('loadQuote').addEventListener("click", resetTimer);
        printQuote(); // ← Prints quote ASAP on initial load
    }, false);
