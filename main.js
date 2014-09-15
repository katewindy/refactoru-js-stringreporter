var userWord = prompt("Please enter a word.  Any word.  Really.");

alert("You entered: " + userWord + ".  This word has " + userWord.length + " characters.  The third character is \"" 
	+ userWord.charAt(2)  + "\".  In lowercase, it looks like this: " + userWord.toLowerCase() + ".  In uppercase, like this: " 
	+ userWord.toUpperCase() + ". As an example, in a sentence it would work like this: I have always liked " + userWord + " a lot!  A sub word of this word is \""
	+ userWord.substring(1,4) + "\".  NOW YOU KNOW!!!");