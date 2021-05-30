var menuItem = {
    "id": "speak",
    "title": "Speak",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClick.addListener(function(clickData){
    if (clickData.menuItemId == "speak" && clickData.selectionText){
        chrome.tts.speak(clickData.selectionText, {'rate': 0.7});    
    }
});