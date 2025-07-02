/* 
For only displaying the page after it has fully loaded.

Reference: jhaiso.github.io
*/

window.addEventListener("load", (event) => {
    console.log("loaded")
    document.querySelector("body").style.visibility = "visible";
});