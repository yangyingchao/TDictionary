chrome.extension.onMessage.addListener(
  function(msg, sender, sendResponse) {
    alert("Message recieved!");
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    alert("AAA");
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });