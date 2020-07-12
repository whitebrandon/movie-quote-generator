A RANDOM MOVIE QUOTE GENERATOR

## Objective:
The objective of this project was to create a web app that displays random famous movie quotes each time a button is clicked.

## Summary of Results:
* The quotes.js file holds an array named **quotes**, which contains a series of seventy-five quote _objects_.
* The objects in the array named quotes have the following properties (although not **ALL** have the citation and year properties):
    - quote | data-type: string, the _line(s) of dialogue_ in the movie
    - citation | data-type: string, the _title_ of the movie
    - source | data-type: string, the _character_ who recited the line of dialogue
    - actor | data-type: string, the _performer_ who portrayed the character
    - year | data-type: number, the _release year_ for the movie
    - director | data-type: string, the _director_ of the movie
* A function named **getRandomQuote()** returns a random object from the array named quotes.
* A function named **printQuote()** calls the **getRandomQuote()** function and prints the _returned_ quote to the body of the page using HTML string format.
* Comments have been included throughout the code.

## Explanation of Techniques Used:
1. The theme of my project is **"film quotes"**. As such, all of my quotes come from a wide assortment of movies. Many are included from ["AFI's (American Film Institute) 100 Years... 100 Movie Quotes"](https://www.afi.com/100years/quotes.aspx), but as AFI's list was printed in 2005, it doesn't include current/more contemporary quotes. An effort was made to combat this by actively seeking out quotes from movies made from 2006 to 2019.
2. The array named quotes was constructed as an array literal, and given its length, I placed it in a separate file from the scripting that controls the behavior and logic.
3. The program contains four functions: **getRandomQuote()**, **getRandomColor()**, **printQuote()** & **resetTimer()**. I created all four as function expressions, using the **const** keyword.
    - Both the **getRandomQuote()** and **getRandomColor()** functions use the **Math** object and it's **.random()** method to return random objects from the array named quotes and random numbers used to create _rgb_ values. 
        - In addition, the **getRandomQuote()** function takes the random quote object returned and **push**es it to an array named _quotesCopy_, before it **splice**s (removes) the same quote object from the array named quotes. Once the array named quotes is empty, the **getRandomQuote()** function **slice**s (copies) all of the objects in the quotesCopy array to the array named quotes, before it **splice**s (removes) all of the objects from the quotesCopy array (resetting it to an empty array).
        -  ↑ This was done to insure that no individual quote is displayed multiple times before all quotes are displayed once. 
    - The **printQuote()** function calls both the **getRandomQuote()** and **getRandomColor()** functions and uses the values returned, logic, and template literals to create an HTML string that's printed to a `<div>` on the page. 
    - The window's **setInterval()** method is used to call the **printQuote()** function every twenty seconds, so I created a **resetTimer()** function so that clicking the "Show Another Quote" `<button>` resets the window's tracking of twenty seconds. This way if the user clicks the "Show Another Quote" `<button>`, their UX isn't lessened by a new quote printing to the page before they've had a chance to read the one they called.
4. Comments have been added, and periodically updated as I learn new techniques. 
