// chrome.runtime.sendMessage({action: "open_dialog_box"},
//                           function(response) {});
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(JSON.stringify(request));
    if (request.status == "begin") {
      document.body.style.backgroundColor="green";
      alert("Staring looking up...");
      var p = document.createElement('p');
      var txt = document.createTextNode('Simple Test');
      p.appendChild(txt);
      document.body.appendChild(p);
    }
    else if (request.status == "ok") {
      debugger;
      document.body.style.backgroundColor="yellow";

      var i=document.createElement('div');
      i.id="gdbx-bubble-main";
      i.style="left: 748px; top: 54.5625px;";
      document.body.appendChild(i);

      var p = document.createElement('p');
      var txt = document.createTextNode('Simple TestTOOO');
      p.appendChild(txt);
      document.body.appendChild(p);
      alert("Finished look up...");
    }
    else if (request.status == "error") {
      document.body.style.backgroundColor="red";
      alert("Failed to look up...");
    }
    else {
      alert("Unknown..." + request.status);
    }

    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });
