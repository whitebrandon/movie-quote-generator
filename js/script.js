/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

let quotes = [
  {
    quote: 'You are a toy!',
    citation: 'Toy Story',
    source: 'Woody',
    performer: 'Tom Hanks',
    year: 1995,
    distribution: 'Disney/Pixar',
    director: 'John Lasseter'
  },
    {
    quote: 'To infinity and beyond!',
    citation: 'Toy Story',
    source: 'Buzz Lightyear',
    performer: 'Tim Allen',
    year: 1995,
    distribution: 'Disney/Pixar',
    director: 'John Lasseter'
  },
  {
    quote: 'What\'s in the box!',
    citation: 'Seven',
    source: 'Detective David Mills',
    performer: 'Brad Pitt',
    year: 1995,
    distribution: 'New Line Cinema',
    director: 'David Fincher'
  },
  {
    quote: 'I\'m a smudge of excrement on a tissue surging out to sea with a million tons of raw sewage.',
    citation: 'Sideways',
    source: 'Jack Cole',
    performer: 'Thomas Haden Church',
    year: 2004,
    distribution: 'Fox Searchlight Pictures',
    director: 'Alexander Payne'
  },
  {
    quote: 'Soylent Green is people!',
    citation: 'Soylent Green',
    source: 'Detective Robert Thorn',
    performer: 'Charlton Heston',
    year: 1973,
    distribution: 'Metro-Goldwyn-Mayer',
    director: 'Richard Fleischer'
  },
  {
    quote: 'I see dead people.',
    citation: 'The Sixth Sense',
    source: 'Cole Sear',
    performer: 'Haley Joel Osment',
    year: 1999,
    distribution: 'Buena Vista Pictures',
    director: 'M. Night Shyamalan'
  },
  {
    quote: 'Louis, I think this is the beginning of a beautiful friendship.',
    citation: 'Casablanca',
    source: 'Rick Blaine',
    performer: 'Humphrey Bogart',
    year: 1942,
    distribution: 'Warner Bros. Pictures',
    director: 'Michael CUrtiz'
  },
  {
    quote: 'Sometimes there just ain\'t enough rocks',
    citation: 'Forrest Gump',
    source: 'Forrest Gump',
    performer: 'Tom Hanks',
    year: 1994,
    distribution: 'Paramount Pictures',
    director: 'Robert Zemeckis'
  },
  {
    quote: 'Just keep swimming.',
    citation: 'Finding Nemo',
    source: 'Dory',
    performer: 'Ellen Degeneres',
    year: 2003,
    distribution: 'Disney/Pixar',
    director: 'Andrew Stanton'
  },
  {
    quote: 'You don\'t understand! I coulda had class. I coulda been a contender. I could\'ve been somebody, instead of a bum, which is what I am.',
    citation: 'On the Waterfront',
    source: 'Terry Malloy',
    performer: 'Marlon Brando',
    year: 1954,
    distribution: 'Columbia Pictures Corporation',
    director: 'Elia Kazan'
  },
  {
    quote: 'What we\'ve got here is failure to communicate.',
    citation: 'Cool Hand Luke',
    source: 'Captain',
    performer: 'Strother Martin',
    year: 1967,
    distribution: 'Warner Bros.-Seven Arts',
    director: 'Stuart Rosenberg'
  },
  {
    quote: 'You talkin\' to me?',
    citation: 'Taxi Driver',
    source: 'Travis Bickle',
    performer: 'Robert De Niro',
    year: 1976,
    distribution: 'Columbia Pictures',
    director: 'Martin Scorsese'
  },
  {
    quote: 'E.T. phone home.',
    citation: 'E.T. the Extra-Terrestrial',
    source: 'E.T.',
    performer: 'Pat Welsh',
    year: 1982,
    distribution: 'Universal Pictures',
    director: 'Steven Spielberg'
  },
  {
    quote: 'The truth is... I am Iron Man.',
    citation: 'Iron Man',
    source: 'Tony Stark',
    performer: 'Robert Downey Jr.',
    year: 2008,
    distribution: 'Paramount Pictures',
    director: 'Jon Favreau'
  },
  {
    quote: 'You can\'t handle the truth!',
    citation: 'A Few Good Men',
    source: 'Col. Nathan R Jessup',
    performer: 'Jack Nicholson',
    year: 1992,
    distribution: 'Columbia Pictures',
    director: 'Rob Reiner'
  },
  {
    quote: 'I\'ll have what she\'s having.',
    citation: 'When Harry Met Sally...',
    source: 'Customer',
    performer: 'Estelle Reiner',
    year: 1989,
    distribution: 'Columbia Pictures',
    director: 'Rob Reiner'
  },
  {
    quote: 'My precious.',
    citation: 'The Lord of the Rings: The Two Towers',
    source: 'Gollum',
    performer: 'Andy Serkis',
    year: 2002,
    distribution: 'New Line Cinema',
    director: 'Peter Jackson'
  },
  {
    quote: 'I have always depended on the kindness of strangers.',
    citation: 'A Streetcar Named Desire',
    source: 'Blanche DuBois',
    performer: 'Vivien Leigh',
    year: 1951,
    distribution: 'Warner Bros.',
    director: 'Elia Kazan'
  },
  {
    quote: 'Gentlemen, you can\'t fight in here! This is the War Room!',
    citation: 'Dr. Strangelove',
    source: 'President Merkin Muffley',
    performer: 'Peter Sellers',
    year: 1964,
    distribution: 'Columbia Pictures',
    director: 'Stanley Kubrick'
  },
  {
    quote: 'Mrs. Robinson, you\'re trying to seduce me. Aren\'t you?',
    citation: 'The Graduate',
    source: 'Benjamin Braddock',
    performer: 'Dustin Hoffman',
    year: 1967,
    distribution: 'Embassy Pictures',
    director: 'Mike Nichols'
  },
  {
    quote: 'Greed, for lack of a better word, is good.',
    citation: 'Wall Street',
    source: 'Gordon Gekko',
    performer: 'Michael Douglas',
    year: 1987,
    distribution: '20th Century Fox',
    director: 'Oliver Stone'
  },
  {
    quote: 'I\'m also just a girl, standing in front of a boy, asking him to love her.',
    citation: 'Notting Hill',
    source: 'Anna Scott',
    performer: 'Julia Roberts',
    year: 1999,
    distribution: 'Universal Pictures',
    director: 'Roger Michell'
  },
  {
    quote: 'You had me at hello.',
    citation: 'Jerry Maguire',
    source: 'Dorothy Boyd',
    performer: 'Ren&eacute;e Zellweger',
    year: 1996,
    distribution: 'TriStar Pictures',
    director: 'Cameron Crowe'
  },
];


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote (quote_list)  {
  let randomNum = Math.floor(Math.random() * quotes.length);
  return quote_list[randomNum];
}



/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function print (id) {
  let element = document.getElementById(id);
  element.innerHTML = '"' + getRandomQuote(quotes).quote + '"';
}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.