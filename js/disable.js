function loadScriptOnlyNonMobileDevices() {
        let matchMedia = window.matchMedia("(min-width:550px)");
        if(!matchMedia.matches){
           let myNonMobileScript = document.createElement("script");
           myNonMobileScript.src="https://unpkg.com/aos@2.3.1/dist/aos.js" 
           document.body.insertAdjacentElement("beforeend", myNonMobileScript);
           AOS.init();
        }
}
// on page load checks the screen size
loadScriptOnlyNonMobileDevices(); 
// when screen size changes checks the screen size again to load js file if needed.
window.onresize = loadScriptOnlyNonMobileDevices; 