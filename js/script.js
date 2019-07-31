/******************************************
Treehouse Techdegree:
FSJS project 1 - Random Quote Generator
Name: Brandon White
Date of Last Modification: 30/07/2019
******************************************/

const quotesCopy = []; // A variable to hold the quotes objects 
                     // that have already been printed to quote-box div

/* getRandomQuote func gets a random number between 0 and the length of the quotes array 
and uses box notation to select a quote | Because I don't want a single quote to be used 
multiple times before the array is cycled through completely, I decided to push each 
random quote object selected into a new array named quotesCopy and then removing that 
same quotes object from the quotes array */

const getRandomQuote = () => {
  if  (quotes.length === 0) {               // If the quotes array is empty, 
                                            // copy the quotesCopy array into it
    quotes = quotesCopy.slice();
    quotesCopy.splice(0, quotesCopy.length);
  }
  const randomNum = Math.floor(Math.random() * quotes.length);
  const randQuote = quotes[randomNum];
  quotesCopy.push(randQuote);
  quotes.splice(randomNum, 1);
  return randQuote;
}

/* getRandomColor func gets three random numbers b/w 1 and 255 and sets them as 
the values of the 3 rgb colors (creating newColor). It then changes the 
background color of the page and the "show another quote" button to that color */

const getRandomColor = () =>  {
  const r = Math.floor(Math.random() * 255) +1;
  const g = Math.floor(Math.random() * 255) +1;
  const b = Math.floor(Math.random() * 255) +1;
  const newColor = 'rgb('+ r +',' + g + ',' + b + ')';
  document.querySelector("body").style.backgroundColor = newColor;
  document.getElementById("loadQuote").style.backgroundColor = newColor;
}

/* printQuote fun calls both the getRandomQuote and getRandomColor funcs, 
it verifies that a citation (movie title) and/or year (release year) are present 
within the selected quotes object and then prints the quote and accompanying 
data into the quote-box div */

const printQuote = () => {
  const currentQuote = getRandomQuote();
  getRandomColor(); // This is the line that changes the background color
  let HTML_string = '';
  HTML_string += `<p class="quote">${currentQuote.quote}</p>`;
  if  (currentQuote.citation === undefined && currentQuote.year === undefined) { // If both the movie title and release year are undefined
    HTML_string += `<p class="source">${currentQuote.actor} as ${currentQuote.source}</p>`;
  } else if (currentQuote.citation === undefined && currentQuote.year !== undefined) { // If the movie title is undefined but the release year isn't
      HTML_string += `<p class="source">${currentQuote.actor} as ${currentQuote.source}<span class="year">${currentQuote.year}</span></p>`;
  } else if (currentQuote.citation !== undefined && currentQuote.year === undefined)  { // If the release year is undefined but the movie title isn't
      HTML_string += `<p class="source">${currentQuote.actor} as ${currentQuote.source}
      <span class="citation">${currentQuote.citation}, dir. ${currentQuote.director}</span></p>`;
  } else  {
      HTML_string += '<p class="source">' + currentQuote.actor + ' as ' + currentQuote.source + '<span class="citation">';
      HTML_string +=  currentQuote.citation + ", dir. " + currentQuote.director + '</span><span class="year">'+ currentQuote.year + '</span></p>';
  }
  const element = document.getElementById("quote-box"); // Sets the div element with an id of quote-box to the value of element
  element.innerHTML = HTML_string;
}
/* Reset quoteTimer so that printQuote func cannot be auto called 
immediately after "Show Another Quote" button is clicked */

const resetTimer = () => {
  clearInterval(quoteTimer);
  quoteTimer = setInterval(printQuote, 20000);
}

let quoteTimer = setInterval(printQuote, 20000); // Sets a timer so quote auto changes every 20 secs
document.addEventListener('DOMContentLoaded', printQuote, false); // Prints quote ASAP after page downloads
document.getElementById('loadQuote').addEventListener("click", printQuote, false); // When button is clicked, a new quote is printed
document.getElementById('loadQuote').addEventListener("click", resetTimer, false); // Reset quoteTimer on click

