// chrome.runtime.sendMessage({action: "open_dialog_box"},
//                           function(response) {});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(JSON.stringify(request));
    if (request.status == "begin") {
      alert("Staring looking up...");
    }
    else if (request.status == "ok") {
      debugger;
      alert("Finished look up...");
    }
    else if (request.status == "error") {
      alert("Failed to look up...");
    }
    else {
      alert("Unknown..." + request.status);
    }

    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });
