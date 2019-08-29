/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
Name: Brandon White
Date of Last Modification: 28/08/2019
******************************************/

'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        const quotesCopy = []; // ← Array to hold the quotes objects already printed to quote-box div

        // ↓ Function that gets a random quote object from quote array
        const getRandomQuote = () => {
            if  (quotes.length === 0) { // ← If the quotes array is empty: 
                // ↓ Copy the quotesCopy array into it
                quotes = quotesCopy.slice();
                quotesCopy.splice(0, quotesCopy.length);
            }
            const randomNum = Math.floor(Math.random() * quotes.length); // ← Grabs random number
            const randQuote = quotes[randomNum]; // ← Selects quote using random number
            quotesCopy.push(randQuote); // ← Pushes selected quote into array for copied quotes
            quotes.splice(randomNum, 1); // ← Removes selected quote from quotes array
            return randQuote;
        }

        // ↓ Function that gets random color and sets it to page and "Show Another Quote" button
        const getRandomColor = () =>  {
            // ↓ Gets random numbers and uses them to select rgb value
            const r = Math.floor(Math.random() * 255) +1;
            const g = Math.floor(Math.random() * 255) +1;
            const b = Math.floor(Math.random() * 255) +1;
            const newColor = `rgb(${r},${g},${b})`;
            document.querySelector("body").style.backgroundColor = newColor;
            document.getElementById("loadQuote").style.backgroundColor = newColor;
        }

        // ↓ Function that calls the getRandomQuote and getRandomColor functions
        //   then prints the quote and other quote properties to the page
        const printQuote = () => {
            const currentQuote = getRandomQuote();
            getRandomColor();
            let HTML_string = `<p class="quote">${currentQuote.quote}</p>`;
            if  (!currentQuote.citation && !currentQuote.year) { // ← Title AND release year undefined
                HTML_string += `<p class="source">${currentQuote.actor} as ${currentQuote.source}</p>`;
            } else if (!currentQuote.citation && currentQuote.year) { // ← Title undefined BUT release year isn't
                HTML_string += `<p class="source">${currentQuote.actor} as ${currentQuote.source}<span class="year">${currentQuote.year}</span></p>`;
            } else if (currentQuote.citation && !currentQuote.year) { // ← Release year undefined BUT title isn't
                HTML_string += `<p class="source">${currentQuote.actor} as ${currentQuote.source}
                <span class="citation">${currentQuote.citation}, dir. ${currentQuote.director}</span></p>`;
            } else  {
                HTML_string += `<p class="source">${currentQuote.actor} as ${currentQuote.source}<span class="citation">`;
                HTML_string +=  `${currentQuote.citation}, dir. ${currentQuote.director}</span><span class="year">${currentQuote.year}</span></p>`;
            }
            const element = document.getElementById("quote-box"); // ← Sets div w/ id of quote-box to value of el
            element.innerHTML = HTML_string;
        }

        // ↓ Function resets quoteTimer so printQuote function cannot be auto
        //   called immediately after "Show Another Quote button is clicked"
        const resetTimer = () => {
            clearInterval(quoteTimer);
            quoteTimer = setInterval(printQuote, 20000);
        }
        let quoteTimer = setInterval(printQuote, 20000); // ← Sets a timer so quote auto changes every 20 secs
        // ↓ When button is clicked a new quote is printed AND the quoteTimer is reset
        document.getElementById('loadQuote').addEventListener("click", printQuote);
        document.getElementById('loadQuote').addEventListener("click", resetTimer);
        printQuote(); // ← Prints quote ASAP on initial load
    }, false);
