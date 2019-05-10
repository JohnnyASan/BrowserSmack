chrome.runtime.onInstalled.addListener(function() {
    document.write("Hello! Welcome to my first Extension.");
    //It will always be running while your extension is turned on and is useful for listening to different events, such as keyboard presses, or for navigating to different pages.
});
