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

// querySelector - selects a pre-specified query(question) i.e CSS Selector in the document.
// It also creates a link between the specified CSS Selector & and the JS Variable/Object.
// Hence whatever we do with that variable is then displayed on the UI/View of the application, i.e., 
// (whenever the variable value is updated either by using innerText or InnerHTMlor textContent, etc.) It will get updated on the Screen as well or can be mani pulated by using 
// any of the mentioned JS DOM Tags.


var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector('#output');
console.log(txtInput);

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranlationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("Error occured!", error);
    alert("Something wrong with server! Try again after sometime");
};

function clickHandler() {
    // console.log("clicked!");
    // console.log("Input", txtInput.value);
    // outputDiv.innerText = "adsffef " + txtInput.value;

    var inputText = txtInput.value; //taking Input

    // calling server for processing our input
    fetch(getTranlationURL(inputText))
        .then(Response => Response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
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


// SERVER CALL FROM JS

//     var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I am Yash Malhotra";
// fetch(url).then(Response => Response.json()).then(json => console.log(json));

// // calling many requests

// //  (Non-Working Solution)

// const text1 = "IronMan";
// const text2 = "BatMan";
// const text3 = "ShaktiMan";

// function cosntructURL(text) {
//     var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" "?text="+ text;
//     return fetch(url).then(Response => Response.json()).then(json => console.log(json));
// };

// constructURL(text1);

// OR (Working Solution)

// function constructURL(text){
//     var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" 
//     return serverURL + "?" + "text="+ text;
// }

// fetch(constructURL(text1)).then(response => response.json()).then( json => console.log(json));

// ERROR HANDLING  -- VERY IMPORTANT CONCEPT

// .catch() - is a callback function so whenever it is called 
// inside it is called with a anather function and inside catch(), catch itself passes the error 
// as an argument to the called function, as shown below.

// function catch(Callbackfn) { 
//     //  Do Something...
//     // Something More...
//     Callbackfn(error);
// }
