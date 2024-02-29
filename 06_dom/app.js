/*
        ****** Return type is HTML Collection *******
document.getElementsByClassName
document.getElementsByTagName
*/



const title = document.getElementById("title");

// title.textContent; /// display only text(complete) either it is visible on screen or not
// title.innerText;   /// display text that is visible on screen
// title.innerHTML;   /// display complete text with html of inner tag if any


// title.className;   /// display class names of that element
// title.id;          /// dispaly id of that element
// title.baseURI;     /// display url of page from which that tag is extracted
// title.outerHTML;   /// returns a string containing an HTML serialization of the element and its descendants


// *********** Return single value *************
// document.querySelector("h1");         /// display first h1 tag
// document.querySelector("#title");     /// display element having id="title"
// document.querySelector(".heading");   /// display element having class="heading"


const myul = document.querySelector("ul");
const turnGreen = myul.querySelector("li");  /// querySelector select first li element only

// turnGreen.style.backgroundColor = "green";
// turnGreen.innerText = "five";



// ******************** Return type is NodeList ******************
const liTags = myul.querySelectorAll("li");  /// querySelector select all li element in that ul tag and return nodeList
// liTags.style.color = "green";    /// Wrong syntax because we didn't selected any li in that NodeList
// liTags[0].style.color = "red";   /// Correct syntax because we have selected specific li tag in that NodeList

// liTags.forEach( (l) => {
//     l.style.backgroundColor = "blue";
// })                               /// for Each loop is applicable for NodeList



// ****************** Return type is HTML Collection *********************
const tempClassList = document.getElementsByClassName("item-list");
// Array.from(tempClassList);              /// Converting HTML Collection to array
