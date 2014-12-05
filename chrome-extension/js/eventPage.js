function notifyStatus(statusCode, data)
{
  chrome.tabs.query({active: true, currentWindow: true},
                    function(tabs){
                      if (tabs.length > 0) {
                        chrome.tabs.sendMessage(tabs[0].id,
                                                {status: statusCode,
                                                 userData: data},
                                                function(response) {});
                      }
                      else {
                        alert("did not find active tab!");
                      }
                    });
}

// Base class for dictionary.
// var Dictionary = new Class({
//   initialize: function() {
//   }
// });

var Definition = {
  createNew: function(name, url, def, raw_content) {
    var instance = {};
    instance.name = name; // source name
    instance.url = url;   // source url
    instance.definition = def; // array of definitions.
    instance.raw_content = raw_content;
    return instance;
  }
};

// Youdao dictionary
var youdaoDictionary = {
  baseUrl : "http://dict.youdao.com/search?q=",
  suffix : "&keyfrom=dict.typo&spc=dictionary&le=eng",
  url:null,
  // TODO: provide a callback to notify when definition is available
  lookup : function(key) {
    var req = new XMLHttpRequest();
    url = this.baseUrl + key + this.suffix;
    req.open("GET", url, true);
    req.onload = this.getDefinations.bind(this);
    notifyStatus("begin", key);
    // chrome.tts.speak("Searching...");
    req.send(null);
  },


  /**
   * Handle the 'onload' event of our kitten XHR request, generated in
   * 'requestKittens', by generating 'img' elements, and stuffing them into
   * the document for display.
   *
   * @param {ProgressEvent} e The XHR ProgressEvent.
   * @private
   */
  getDefinations : function (e) {
    notifyStatus("ok",
                 Definition.createNew("有道词典", url,
                                      $(e.target.response).find(".trans-container")[0].innerHTML,
                                      e.target.response));
  }
};


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.cmd == "speak"){
      if (request.userData){
        chrome.tts.speak(request.userData,
                        {rate:0.8});
      }
      else {
        alert("Nothing to speak...");
      }
    }
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
  });


// The onClicked callback function.
function onClickHandler(info, tab) {
  // console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));

  var a = info.selectionText

  console.log("Text: " + a);

  youdaoDictionary.lookup(a);
  // TODO: it is not allowed to launch native apps in extensions, needs to
  //       use NPAPI plugin which is not encouraged.
  //       I'll need to update mget to start it as server-mode, then listen
  //       to local sockets ...
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  // Create one test item for each context type.
  var id = chrome.contextMenus.create({"title": "Look Up \"%s\"",
                                       "contexts":["selection"],
                                       "id": "context_selection"});
});
