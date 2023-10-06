const getScreenSize = () =>{
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

// Get the height of the browser window
var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

console.log("Browser window width: " + windowWidth + " pixels");
console.log("Browser window height: " + windowHeight + " pixels");
}

export default getScreenSize