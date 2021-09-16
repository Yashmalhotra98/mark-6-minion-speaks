// console.log('script is working from a different file');

// alert("This script Works");

// NOTE:- Alert is Not a good way to show messages and such things works on questionable websites.


// // Input
// var username = prompt('What is your Username ?');

// // Processing
// var welcomeMessage = 'this script works!! ' + username;

// // Output
// alert(welcomeMessage);

// Wiring a BUTTON & a TEXT AREA

var btnTranslate = document.querySelector("#btn-translate"); // making connection between the HTML
// button and the JS variable  btnTranslate. or assigning the HTML button tag(event) having the 
// specified button-id (#btn-translate) with the JS variable btnTranslate.

// querySelector("") -  It returns the first CSS Selector that matches a specified
// CSS Selecotr(s) in the document. 

// querySelector - selects a pre-specified query(question)

var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector('#output');
console.log(txtInput);

function clickHandler() {
    // console.log("clicked!");
    // console.log("Input", txtInput.value);
    outputDiv.innerText = "adsffef " + txtInput.value;

};

// The clickHandler is our Callback
// Callback - Any function or method which takes another function as an input is called a calback

btnTranslate.addEventListener("click", clickHandler);

// "click", "scroll", etc. are predefined events.

// addEventListener - takes an HTML event(like touch, scroll, click, etc) for a specified object
// whenever the described event gets called(fired) and executes the specified function.

// addEventListener - adds an event to an HTML element

// Whenever the JS variable btnTranslate listens the value(event) "click",
//  it calls the following specified function.

// querySelector() for -  Input element with an attribute name = 'translator' 
// input element- attribute "name = "translator"" - "input(element)[name(attribute)= "translator()value"]"