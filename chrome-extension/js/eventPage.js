// Base class for dictionary.
// var Dictionary = new Class({
//   initialize: function() {
//   }
// });

// Youdao dictionary
var youdaoDictionary = {
  baseUrl : "http://dict.youdao.com/search?q=",
  suffix : "&keyfrom=dict.typo&spc=dictionary&le=eng",

  // TODO: provide a callback to notify when definition is available
  lookup : function(key) {
    var req = new XMLHttpRequest();
    req.open("GET", this.baseUrl + key + this.suffix, true);
    req.onload = this.getDefinations.bind(this);
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
    var answer = e.target.response;
    // chrome.tabs.create({
    //   url: chrome.extension.getURL('html/defination.html'),
    //   active: false
    // }, function(tab) {
    //      // After the tab has been created, open a window to inject the tab
    //      chrome.windows.create({
    //        tabId: tab.id,
    //        type: 'popup',
    //        focused: true
    //        // incognito, top, left, ...
    //      });
    //    });

    chrome.tabs.query({active: true, currentWindow: true},
                      function(tabs){
                        chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) {});
                      });

    chrome.tabs.query({active: true, currentWindow: true},
                      function(tabs) {
                        chrome.tabs.sendMessage(tabs[0].id,
                                                {greeting: "hello",
                                                 content: answer},
                                                function(response) {
                                                  console.log(response);
                                                });
                      });
    chrome.tabs.query({active: true},
                      function(tabs){chrome.tabs.sendMessage(tabs.id,
                                                             {action:
                                                              "open_dialog_box"},
                                                             function(response) { }); });
  }
};


// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log(sender.tab ?
//                 "A: from a content script:" + sender.tab.url :
//                 "A: from the extension");
//     // console.log(request.content);
//     chrome.tabs.executeScript({
//       file: 'js/defination.js'
//   });
//   })


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
  var id = chrome.contextMenus.create({"title": "Look up \"%s\" ...",
                                       "contexts":["selection"],
                                       "id": "context_selection"});
});
