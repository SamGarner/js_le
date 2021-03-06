(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("sam-palindrome");

function palindromeTester() {
	event.preventDefault();

	//let string = prompt("Please enter a string for palindrome testing:");
	let phrase = new Phrase(event.target.phrase.value);
	let palindromeResult = document.querySelector("#palindromeResult");

	if (phrase.palindrome()) {
		palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
	} else {
		palindromeResult.innerHTML = `"${phrase.content}" is NOT a palindrome`;
	}
}

document.addEventListener("DOMContentLoaded", function() {
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit", function(event) {
    palindromeTester(event);
  });
});
},{"sam-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// Adds 'reverse' and 'blank' to all strings.
String.prototype.reverse = function() {
	return Array.from(this).reverse().join("");
}
String.prototype.blank = function() {
	return !!this.match(/^\s*$/g);
}

//returns last element of an array:
Array.prototype.last = function() {
	return this.slice(-1);
}

// Defines a Phrase object.
function Phrase(content) {
	this.content = content;

	// Returns content processed for palindrome testing.
	this.processedContent = function processedContent() {
		return this.letters().toLowerCase();
	}

	// Returns the letters in the content.
	// e.g. "Hello, world!" > "Helloworld"
	this.letters = function letters() {
		return (this.content.match(/[a-z]/gi) || [] ).join("");
		//Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
	}
			// this.letters = function letters() {
			// 	let theLetters = [];
			// 	const letterRegex = /[a-z]/i;
			// 	Array.from(this.content).forEach((character) => {
			// 		if (character.match(letterRegex)) {
			// 			theLetters.push(character);
			// 		}
			// 	});
			// 	return theLetters.join("");
			// }


	// Returns true if the phrase is a palindrome, false otherwise.
	this.palindrome = function palindrome() {
		if (this.processedContent()) {
			return this.processedContent () === this.processedContent().reverse();
		} else {
			return false;
		}
	}
}

},{}]},{},[1]);
