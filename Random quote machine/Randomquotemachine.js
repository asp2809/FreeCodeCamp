$("button").on("click", function() {
	$(".quote").text(quote[Math.floor(Math.random()*quote.length)]);
});
var quote=[
'"Don\'t cry because it\'s over, smile because it happened." - Dr. Seuss',
'"Be yourself, everyone else is already taken." - Oscar Wilde',
'"Be the change that you wish to see in the world." - Mahatma Gandhi',
'"You only live once, but if you do it right, once is enough." - Mae West',
'"Always forgive your enemies, nothing annoys them so much." - Oscar Wilde',
"\"Without music, life would be a mistake.\" - Friedrich Nietzsche",
"\"The mediator of the inexpressible is the work of art.\" - Johann Goethe",
'"Well done is better than well said." - Benjamin Franklin',
'"Everything you can imagine is real." - Pablo Picasso'
];
$(".quote").text(quote[Math.floor(Math.random()*quote.length)]);