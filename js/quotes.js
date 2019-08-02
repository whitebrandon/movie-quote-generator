/******************************************
Treehouse Techdegree:
FSJS project 1 - Random Quote Generator
Name: Brandon White
Date of Last Modification: 30/07/2019
******************************************/

/* ============================================
   ================== Quotes ==================
   ============================================ */

let quotes = [
    {
    quote: 'To infinity and beyond!',
    citation: 'Toy Story',
    source: 'Buzz Lightyear',
    actor: 'Tim Allen',
    year: 1995,
    director: 'John Lasseter'
  },
  {
    quote: 'What\'s in the box!',
    citation: 'Seven',
    source: 'Detective David Mills',
    actor: 'Brad Pitt',
    year: 1995,
    director: 'David Fincher'
  },
  {
    quote: 'Soylent Green is people!',
    source: 'Detective Robert Thorn',
    actor: 'Charlton Heston',
    director: 'Richard Fleischer'
  },
  {
    quote: 'I see dead people.',
    citation: 'The Sixth Sense',
    source: 'Cole Sear',
    actor: 'Haley Joel Osment',
    year: 1999,
    director: 'M. Night Shyamalan'
  },
  {
    quote: 'Here\'s looking at you, kid.',
    citation: 'Casablanca',
    source: 'Rick Blaine',
    actor: 'Humphrey Bogart',
    year: 1942,
    director: 'Michael Curtiz'
  },
  {
    quote: 'Just keep swimming.',
    citation: 'Finding Nemo',
    source: 'Dory',
    actor: 'Ellen Degeneres',
    year: 2003,
    director: 'Andrew Stanton'
  },
  {
    quote: 'You don\'t understand! I coulda had class. I coulda been a contender. I could\'ve been somebody, instead of a bum, which is what I am.',
    citation: 'On the Waterfront',
    source: 'Terry Malloy',
    actor: 'Marlon Brando',
    director: 'Elia Kazan'
  },
  {
    quote: 'What we\'ve got here is failure to communicate.',
    citation: 'Cool Hand Luke',
    source: 'Captain',
    actor: 'Strother Martin',
    year: 1967,
    director: 'Stuart Rosenberg'
  },
  {
    quote: 'You talkin\' to me?',
    citation: 'Taxi Driver',
    source: 'Travis Bickle',
    actor: 'Robert De Niro',
    year: 1976,
    director: 'Martin Scorsese'
  },
  {
    quote: 'E.T. phone home.',
    citation: 'E.T. the Extra-Terrestrial',
    source: 'E.T.',
    actor: 'Pat Welsh',
    year: 1982,
    director: 'Steven Spielberg'
  },
  {
    quote: 'The truth is... I am Iron Man.',
    citation: 'Iron Man',
    source: 'Tony Stark',
    actor: 'Robert Downey Jr.',
    year: 2008,
    director: 'Jon Favreau'
  },
  {
    quote: 'You can\'t handle the truth!',
    citation: 'A Few Good Men',
    source: 'Col. Nathan R Jessup',
    actor: 'Jack Nicholson',
    year: 1992,
    director: 'Rob Reiner'
  },
  {
    quote: 'I\'ll have what she\'s having.',
    citation: 'When Harry Met Sally...',
    source: 'Customer',
    actor: 'Estelle Reiner',
    year: 1989,
    director: 'Rob Reiner'
  },
  {
    quote: 'My precious.',
    citation: 'The Lord of the Rings: The Two Towers',
    source: 'Gollum',
    actor: 'Andy Serkis',
    year: 2002,
    director: 'Peter Jackson'
  },
  {
    quote: 'I have always depended on the kindness of strangers.',
    citation: 'A Streetcar Named Desire',
    source: 'Blanche DuBois',
    actor: 'Vivien Leigh',
    year: 1951,
    director: 'Elia Kazan'
  },
  {
    quote: 'Gentlemen, you can\'t fight in here! This is the War Room!',
    citation: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    source: 'President Merkin Muffley',
    actor: 'Peter Sellers',
    year: 1964,
    director: 'Stanley Kubrick'
  },
  {
    quote: 'Greed, for lack of a better word, is good.',
    citation: 'Wall Street',
    source: 'Gordon Gekko',
    actor: 'Michael Douglas',
    year: 1987,
    director: 'Oliver Stone'
  },
  {
    quote: 'I\'m also just a girl, standing in front of a boy, asking him to love her.',
    citation: 'Notting Hill',
    source: 'Anna Scott',
    actor: 'Julia Roberts',
    year: 1999,
    director: 'Roger Michell'
  },
  {
    quote: 'You had me at hello.',
    citation: 'Jerry Maguire',
    source: 'Dorothy Boyd',
    actor: 'Ren&eacute;e Zellweger',
    year: 1996,
    director: 'Cameron Crowe'
  },
  {
    quote: 'I know who I am. I\'m the dude playing a dude disguised as another dude!',
    citation: 'Tropic Thunder',
    source: 'Kirk Lazarus',
    actor: 'Robert Downey Jr',
    year: 2008,
    director: 'Ben Stiller'
  },
  {
    quote: 'Exercise gives you endorphins. Endorphins make you happy. Happy people just don\'t shoot their husbands. They just don\'t.',
    citation: 'Legally Blonde',
    source: 'Elle Woods',
    actor: 'Reese Witherspoon',
    year: 2001,
    director: 'Robert Luketic'
  },
  {
    quote: 'You either die a hero, or live long enough to see yourself become the villain.',
    citation: 'The Dark Knight',
    source: 'Harvey Dent',
    actor: 'Aaron Eckhart',
    year: 2008,
    director: 'Christopher Nolan'
  },
  {
    quote: 'What\'s the most you ever lost on a coin toss?',
    citation: 'No Country for Old Men',
    source: 'Anton Chigurh',
    actor: 'Javier Bardem',
    year: 2007,
    director: 'Coen Brothers'
  },
  {
    quote: 'Are you not entertained?',
    citation: 'Gladiator',
    source: 'Maximus Decimus Meridius',
    actor: 'Russell Crowe',
    year: 2000,
    director: 'Ridley Scott'
  },
  {
    quote: 'Girl, you can\'t get no infection in your booty hole. It\'s a booty hole!',
    citation: 'Girls Trip',
    source: 'Dina',
    actor: 'Tiffany Haddish',
    year: 2017,
    director: 'Malcolm D. Lee'
  },
  {
    quote: 'I wish I knew how to quit you',
    citation: 'Brokeback Mountain',
    source: 'Jack Twist',
    actor: 'Jake Gyllenhaal',
    year: 2005,
    director: 'Ang Lee'
  },
  {
    quote: 'If you love someone...you say it, right then, out loud. Otherwise, the moment just passes you by.',
    citation: 'My Best Friend\'s Wedding',
    source: 'Micahel O\'Neal',
    actor: 'Dermot Mulroney',
    director: 'P.J. Hogan'
  },
  {
    quote: 'Sink. Now, you\'re in the sunken place.',
    citation: 'Get Out',
    source: 'Missy Armitage',
    actor: 'Catherine Keener',
    year: 2017,
    director: 'Jordan Peele'
  },
  {
    quote: 'If you can dodge a wrench, you can dodge a ball.',
    citation: 'Dodgeball: A True Underdog Story',
    source: 'Patches O\'Houlihan',
    actor: 'Rip Torn',
    year: 2004,
    director: 'Rawson Marshall Thurber'
  },
  {
    quote: 'Do, or Do not. There is no try.',
    citation: 'Star Wars: The Empire Strikes Back',
    source: 'Yoda',
    actor: 'Frank Oz',
    year: 1980,
    director: 'Irvin Kershner'
  },
  {
    quote: 'Every man dies, but not every man really lives.',
    citation: 'Braveheart',
    source: 'William Wallace',
    actor: 'Mel Gibson',
    year: 1995,
    director: 'Mel Gibson'
  },
  {
    quote: 'Life isn\'t the amount of breaths you take. It\'s the moments that take your breath away.',
    citation: 'Hitch',
    source: 'Alex Hitchens',
    actor: 'Will Smith',
    year: 2005,
    director: 'Andy Tennant'
  },
  {
    quote: 'Life moves pretty fast. If you don\'t stop and look around once in a while, you could miss it.',
    source: 'Ferris Bueller',
    actor: 'Matthew Broderick',
    year: 1986,
    director: 'John Hughes'
  },
  {
    quote: 'Strange, isn\'t it? Each man\'s life touches so many other lives. When he isn\'t around he leaves an awful hole, doesn\'t he?',
    citation: 'It\'s a Wonderful Life',
    source: 'Clarence Odbody',
    actor: 'Henry Travers',
    year: 1946,
    director: 'Frank Capra'
  },
  {
    quote: 'Sometimes, it\'s the very people who no one imagines anything of, who do the things that no one can imagine.',
    citation: 'The Imitation Game',
    source: 'Alan Turing',
    actor: 'Benedict Cumberbatch',
    year: 2014,
    director: 'Morten Tyldum'
  },
  {
    quote: 'Our lives are defined by opportunities, even the ones we miss.',
    citation: 'The Curious Case of Benjamin Button',
    source: 'Benjamin Button',
    actor: 'Brad Pitt',
    year: 2008,
    director: 'David Fincher'
  },
  {
    quote: 'The way it works is, you do the thing you\'re scared shitless of, and you get the courage after you do it, not before you do it.',
    citation: 'Three Kings',
    source: 'Archie Gates',
    actor: 'George Clooney',
    year: 1999,
    director: 'David O. Russell'
  },
  {
    quote: 'No matter what anybody tells you, words and ideas can change the world.',
    citation: 'Dead Poets Society',
    source: 'John Keating',
    actor: 'Robin Williams',
    year: 1989,
    director: 'Peter Weir'
  },
  {
    quote: 'Why do we fall, Sir? So that we can learn to pick ourselves up.',
    citation: 'Batman Begins',
    source: 'Alfred Pennyworth',
    actor: 'Michael Caine',
    year: 2005,
    director: 'Christopher Nolan'
  },
  {
    quote: 'Oh yes, the past can hurt. But, you can either run from it, or learn from it.',
    citation: 'The Lion King',
    source: 'Rafiki',
    actor: 'Robert Guillaume',
    year: 1994,
    director: 'Roger Allers and Rob Minkoff'
  },
  {
    quote: 'Hope is a good thing, maybe the best of things, and no good thing ever dies.',
    citation: 'The Shawshank Redemption',
    source: 'Andy Dufresne',
    actor: 'Tim Robbins',
    year: 1994,
    director: 'Frank Darabont'
  },
  {
    quote: 'It is not our abilities that show what we truly are. It is our choices.',
    citation: 'Harry Potter and the Philosopher\'s Stone',
    source: 'Albus Dumbeldore',
    actor: 'Richard Harris',
    year: 2001,
    director: 'Chris Columbus'
  },
  {
    quote: 'Great men are not born great, they grow great.',
    citation: 'The Godfather',
    source: 'Don Vito Corleone',
    actor: 'Martin Brando',
    year: 1972,
    director: 'Francis Ford Coppola'
  },
  {
    quote: 'We walk away from our dreams afraid we may fail, or worse yet, afraid we may succeed.',
    citation: 'Finding Forrester',
    source: 'William Forrester',
    actor: 'Sean Connery',
    year: 2000,
    director: 'Gus Van Sant'
  },
  {
    quote: 'A laugh can be a very powerful thing. Why, sometimes in life, it\'s the only weapon we have.',
    source: 'Roger Rabbit',
    actor: 'Charles Fleischer',
    year: 1988,
    director: 'Robert Zemeckis'
  },
  {
    quote: 'Get busy living or get busy dying.',
    citation: 'The Shawshank Redemption',
    source: 'Andy Dufresne',
    actor: 'Tim Robbins',
    year: 1994,
    director: 'Frank Darabont'
  },
  {
    quote: 'The best love is the kind that awakens the soul and makes us reach for more...',
    citation: 'The Notebook',
    source: 'Noah Calhoun',
    actor: 'Ryan Gosling',
    year: 2004,
    director: 'Nick Cassavetes'
  },
  {
    quote: 'They say when you meet the love of your life, time stops. And that\'s true.',
    citation: 'Big Fish',
    source: 'Edward Bloom',
    actor: 'Albert Finney',
    year: 2003,
    director: 'Tim Burton'
  },
  {
    quote: 'The past is just a story we tell ourselves.',
    citation: 'Her',
    source: 'Samantha',
    actor: 'Scarlett Johansson',
    year: 2013,
    director: 'Spike Jonze'
  },
  {
    quote: 'The right person is still going to think the sun shines out your ass.',
    citation: 'Juno',
    source: 'Mac MacGuff',
    actor: 'J. K. Simmons',
    year: 2007,
    director: 'Jason Reitman'
  },
  {
    quote: 'It\'s hard to stay mad when there\'s so much beauty in the world.',
    citation: 'American Beauty',
    source: 'Lester Burnham',
    actor: 'Kevin Spacey',
    year: 1999,
    director: 'Sam Mendes'
  },
  {
    quote: 'Run, Forrest, run!',
    citation: 'Forrest Gump',
    source: 'Jenny Curran',
    actor: 'Robin Wright',
    year: 1994,
    director: 'Robert Zemeckis'
  },
  {
    quote: 'I know what I have to do now, I\'ve got to keep breathing because tomorrow the sun will rise. Who knows what the tide could bring?',
    citation: 'Cast Away',
    source: 'Chuck Noland',
    actor: 'Tom Hanks',
    year: 2000,
    director: 'Robert Zemeckis'
  },
  {
    quote: 'To find something, anything, a great truth or a lost pair of glasses, you must first believe there will be some advantage in finding it.',
    citation: 'All the King\'s Men',
    source: 'Jack Burden',
    actor: 'Jude Law',
    year: 2006,
    director: 'Steve Zaillian'
  },
  {
    quote: 'Sometimes you got to have a little dirt on you for anybody to trust you.',
    citation: 'Training Day',
    source: 'Alonzo Harris',
    actor: 'Denzel Washington',
    year: 2001,
    director: 'Antoine Fuqua'
  },
  {
    quote: 'With great power comes great responsibility.',
    citation: 'Spider-Man',
    source: 'Ben Parker',
    actor: 'Cliff Robertson',
    year: 2002,
    director: 'Sam Raimi'
  },
  {
    quote: 'I drink your milkshake. I drink it up.',
    citation: 'There Will Be Blood',
    source: 'Daniel Plainview',
    actor: 'Daniel Day-Lewis',
    year: 2007,
    director: 'Paul Thomas Anderson'
  },
  {
    quote: 'It\'s like how much more black could this be? And the answer is none. None more black.',
    citation: 'This is Spinal Tap',
    source: 'Nigel Tufnel',
    actor: 'Christopher Guest',
    year: 1984,
    director: 'Rob Reiner'
  },
  {
    quote: 'You mustn\'t be afraid to dream a little bigger, darling.',
    citation: 'Inception',
    source: 'Eames',
    actor: 'Tom Hardy',
    year: 2010,
    director: 'Christopher Nolan'
  },
  {
    quote: 'Frying chicken just tend to make you feel better about life.',
    citation: 'The Help',
    source: 'Minny Jackson',
    actor: 'Octavia Spencer',
    year: 2011,
    director: 'Tate Taylor'
  },
  {
    quote: 'After all, tomorrow is another day.',
    citation: 'Gone with the Wind',
    source: 'Scarlett O\'Hara',
    actor: 'Vivien Leigh',
    year: 1939,
    director: 'Victor Fleming'
  },
  {
    quote: 'There\'s no place like home.',
    citation: 'The Wizard of Oz',
    source: 'Dorothy Gale',
    actor: 'Judy Garland',
    year: 1939,
    director: 'Victor Fleming'
  },
  {
    quote: 'You talkin\' to me?',
    citation: 'Taxi Driver',
    source: 'Travis Bickle',
    actor: 'Robert De Niro',
    year: 1976,
    director: 'Martin Scorsese'
  },
  {
    quote: 'Love means never having to say you\'re sorry.',
    citation: 'Love Story',
    source: 'Oliver Barrett IV',
    actor: 'Ryan O\'Neal',
    year: 1970,
    director: 'Arthur Hiller'
  },
  {
    quote: 'I\'m mad as hell, and I\'m not going to take this anymore!',
    citation: 'Network',
    source: 'Howard Beale',
    actor: 'Peter Finch',
    year: 1976,
    director: 'Sidney Lumet'
  },
  {
    quote: 'I am big! It\'s the pictures that got small.',
    citation: 'Sunset Boulevard',
    source: 'Norma Desmond',
    actor: 'Gloria Swanson',
    year: 1950,
    director: 'Billy Wilder'
  },
  {
    quote: 'You\'re gonna need a bigger boat.',
    citation: 'Jaws',
    source: 'Martin Brody',
    actor: 'Roy Scheider',
    director: 'Steven Spielberg'
  },
  {
    quote: 'I\'ll be back.',
    source: 'The Terminator',
    actor: 'Arnold Schwarzenegger',
    director: 'James Cameron'
  },
  {
    quote: 'If you build it, he will come.',
    citation: 'Field of Dreams',
    source: 'Shoeless Joe Jackson',
    actor: 'Ray Liotta',
    director: 'Phil Alden Robinson'
  },
  {
    quote: 'A boy\'s best friend is his mother.',
    citation: 'Psycho',
    source: 'Norman Bates',
    actor: 'Anthony Perkins',
    year: 1960,
    director: 'Alfred Hitchcock'
  },
  {
    quote: 'Oh, no, it wasn\'t the airplanes. It was Beauty that killed the Beast.',
    citation: 'King Kong',
    source: 'Carl Denham',
    actor: 'Robert Armstrong',
    year: 1933,
    director: 'Merian C. Cooper and Ernest B. Schoedsack'
  },
  {
    quote: 'Life is a banquet, and most poor suckers are starving to death!',
    citation: 'Auntie Mame',
    source: 'Mame Dennis',
    actor: 'Rosalind Russell',
    year: 1958,
    director: 'Morton DaCosta'
  },
  {
    quote: 'I\'m the King of the World!',
    citation: 'Titanic',
    source: 'Jack Dawson',
    actor: 'Leonardo DiCaprio',
    year: 1997,
    director: 'James Cameron'
  },
  {
    quote: 'Forget it, Jake, it\'s Chinatown.',
    source: 'Lawrence Walsh',
    actor: 'Joe Mantell',
    year: 1974,
    director: 'Roman Polanski'
  },
  {
    quote: 'Keep your friends close, but your enemies closer.',
    citation: 'The Godfather Part II',
    source: 'Michael Corleone',
    actor: 'Al Pacino',
    year: 1974,
    director: 'Francis Ford Coppola'
  },
];
