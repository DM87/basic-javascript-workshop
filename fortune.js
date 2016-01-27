//read a random quote from a list of ten
var quotes = [
'We see a lot of feature-driven product design in which the cost of features is not properly accounted. Features can have a negative value to customers because they make the products more difficult to understand and use. We are finding that people like products that just work. It turns out that designs that just work are much harder to produce that designs that assemble long lists of features. -Douglas Crockford, JavaScript: The Good Parts',
'Software testing is a sport like hunting, it is bughunting.',
'Reusability is key in reducing bugs and coding quickly. The more I use a piece of code, the more confident and familiar I become with it, which in turn significantly speeds up my development time.',
'It is a jackpot when you get to know javascript can be debugged.',
'Java is to JavaScript what Car is to Carpet.',
'JavaScript\’s global scope is like a public toilet. You can\’t avoid going in there, but try to limit your contact with surfaces when you do.',
'The best method for accelerating a computer is the one that boosts it by 9.8 m/s2.',
'Walking on water and developing software from a specification are easy if both are frozen.',
'First, solve the problem. Then, write the code.',
'Software sucks because users demand it to.'
]

console.log(quotes[Math.floor(Math.random() * quotes.length)]);