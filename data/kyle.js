
const kyleMovies = [
    {
        points: 50,
        title: 'Inglourious Basterds',
        director: 'Quentin Tarantino',
        year: 2009,
        submitter: 'kyle'
    },
    {
        points: 49,
        title: 'The Royal Tenenbaums',
        director: 'Wes Anderson',
        year: 2001,
        submitter: 'kyle'
    },
    {
        points: 48,
        title: 'Before Sunset',
        director: 'Richard Linklater',
        year: 2004,
        submitter: 'kyle'
    },
    {
        points: 47,
        title: 'Children of Men',
        director: 'Alfonso Cuaron',
        year: 2006,
        submitter: 'kyle'
    },
    {
        points: 46,
        title: 'Amelie',
        director: 'Jean-Pierre Jeunet',
        year: 2001,
        submitter: 'kyle'
    },
    {
        points: 45,
        title: 'Memento',
        director: 'Christopher Nolan',
        year: 2001,
        submitter: 'kyle'
    },
    {
        points: 44,
        title: 'I Heart Huckabees',
        director: 'David O. Russell',
        year: 2004,
        submitter: 'kyle'
    },
    {
        points: 43,
        title: 'Adaptation',
        director: 'Spike Jonze',
        year: 2002,
        submitter: 'kyle'
    },
    {
        points: 42,
        title: 'The Wrestler',
        director: 'Darren Aronofsky',
        year: 2008,
        submitter: 'kyle'
    },
    {
        points: 41,
        title: 'The Squid and the Whale',
        director: 'Noah Baumbach',
        year: 2005,
        submitter: 'kyle'
    },
    {
        points: 40,
        title: 'Little Miss Sunshine',
        director: 'Valerie Faris, Jonathan Dayton',
        year: 2006,
        submitter: 'kyle'
    },
    {
        points: 39,
        title: 'School of Rock',
        director: 'Richard Linklater',
        year: 2003,
        submitter: 'kyle'
    },
    {
        points: 38,
        title: 'Gladiator',
        director: 'Ridley Scott',
        year: 2000,
        submitter: 'kyle'
    },
    {
        points: 37,
        title: 'No Country for Old Men',
        director: 'Joel Coen, Ethan Coen',
        year: 2007,
        submitter: 'kyle'
    },
    {
        points: 36,
        title: 'Idiocracy',
        director: 'Mike Judge',
        year: 2006,
        submitter: 'kyle'
    },
    {
        points: 35,
        title: 'Zombieland',
        director: 'Ruben Fleischer',
        year: 2009,
        submitter: 'kyle'
    },
    {
        points: 34,
        title: 'Gangs of New York',
        director: 'Martin Scorsese',
        year: 2002,
        submitter: 'kyle'
    },
    {
        points: 33,
        title: 'Bowling for Columbine',
        director: 'Michael Moore',
        year: 2002,
        submitter: 'kyle'
    },
    {
        points: 32,
        title: 'Up in the Air',
        director: 'Jason Reitman',
        year: 2009,
        submitter: 'kyle'
    },
    {
        points: 31,
        title: 'Mulholland Drive',
        director: 'David Lynch',
        year: 2001,
        submitter: 'kyle',
    },
    {
        points: 30,
        title: 'The Life Aquatic with Steve Zissou',
        director: 'Wes Anderson',
        year: 2004,
        submitter: 'kyle'
    },
    {
        points: 29,
        title: 'Zodiac',
        director: 'David Fincher',
        year: 2007,
        submitter: 'kyle'
    },
    {
        points: 28,
        title: 'Requiem for a Dream',
        director: 'Darren Aronofksy',
        year: 2000,
        submitter: 'kyle'
    },
    {
        points: 27,
        title: 'The 40-Year-Old Virgin',
        director: 'Judd Apatow',
        year: 2005,
        submitter: 'kyle',
    },
    {
        points: 26,
        title: 'Matchstick Men',
        director: 'Ridley Scott',
        year: 2003,
        submitter: 'kyle'
    },
    {
        points: 25,
        title: 'Lost in Translation',
        director: 'Sofia Coppola',
        year: 2003,
        submitter: 'kyle'
    },
    {
        points: 24,
        title: 'Punch Drunk Love',
        director: 'Paul Thomas Anderson',
        year: 2002,
        submitter: 'kyle'
    },
    {
        points: 23,
        title: 'The Dark Knight',
        director: 'Christopher Nolan',
        year: 2008,
        submitter: 'kyle'
    },
    {
        points: 22,
        title: 'Adventureland',
        director: 'Greg Mottola',
        year: 2009,
        submitter: 'kyle'
    },
    {
        points: 21,
        title: 'Paranormal Activity',
        director: 'Oren Peli',
        year: 2007,
        submitter: 'kyle'
    },
    {
        points: 20,
        title: 'Cloverfield',
        director: 'Matt Reeves',
        year: 2008,
        submitter: 'kyle'
    },
    {
        points: 19,
        title: 'The Fog of War',
        director: 'Errol Morris',
        year: 2003,
        submitter: 'kyle'
    },
    {
        points: 18,
        title: 'O Brother, Where Art Thou?',
        director: 'Joel Coen, Ethan Coen',
        year: 2000,
        submitter: 'kyle'
    },
    {
        points: 17,
        title: 'Fantastic Mr. Fox',
        director: 'Wes Anderson',
        year: 2009,
        submitter: 'kyle'
    },
    {
        points: 16,
        title: 'Meet the Parents',
        director: 'Jay Roach',
        year: 2000,
        submitter: 'kyle'
    },
    {
        points: 15,
        title: 'Team America: World Police',
        director: 'Trey Parker',
        year: 2004,
        submitter: 'kyle'
    },
    {
        points: 14,
        title: 'Donnie Darko',
        director: 'Richard Kelly',
        year: 2001,
        submitter: 'kyle'
    },
    {
        points: 13,
        title: 'Fahrenheit 9/11',
        director: 'Michael Moore',
        year: 2004,
        submitter: 'kyle'
    },
    {
        points: 12,
        title: 'Mystic River',
        director: 'Clint Eastwood',
        year: 2003,
        submitter: 'kyle'
    },
    {
        points: 11,
        title: 'Superbad',
        director: 'Greg Mottola',
        year: 2007,
        submitter: 'kyle'
    },
    {
        points: 10,
        title: 'Catch Me If You Can',
        director: 'Steven Spielberg',
        year: 2002,
        submitter: 'kyle'
    },
    {
        points: 9,
        title: 'Elizabethtown',
        director: 'Cameron Crowe',
        year: 2005,
        submitter: 'kyle'
    },
    {
        points: 8,
        title: 'Best in Show',
        director: 'Christopher Guest',
        year: 2000,
        submitter: 'kyle'
    },
    {
        points: 7,
        title: 'City of God',
        director: 'Fernando Meirelles',
        year: 2003,
        submitter: 'kyle'
    },
    {
        points: 6,
        title: 'Talk to Her',
        director: 'Pedro Almodovar',
        year: 2002,
        submitter: 'kyle'
    },
    {
        points: 5,
        title: 'Closer',
        director: 'Mike Nichols',
        year: 2004,
        submitter: 'kyle'
    },
    {
        points: 4,
        title: 'War of the Worlds',
        director: 'Steven Spielberg',
        year: 2005,
        submitter: 'kyle'
    },
    {
        points: 3,
        title: 'Apocalypto',
        director: 'Mel Gibson',
        year: 2006,
        submitter: 'kyle'
    },
    {
        points: 2,
        title: 'Lord of the Rings: Fellowship of the Ring',
        director: 'Peter Jackson',
        year: 2001,
        submitter: 'kyle'
    },
    {
        points: 1,
        title: 'The Prestige',
        director: 'Mel Gibson',
        year: 2006,
        submitter: 'kyle'
    }
]

