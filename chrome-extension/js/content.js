// chrome.runtime.sendMessage({action: "open_dialog_box"},
//                           function(response) {});

function generateTag ()
{

}

function generate_css ()
{
  var css = '#tdict-bubble-main,#tdict-arrow-container {'+
    '    background-color:#ebebea;'+
    '    z-index:99997'+
    '}'+
    ''+
    '*{'+
    '    box-sizing:border-box'+
    '}'+
    'a{'+
    '    color:#11c;'+
    '    text-decoration:none'+
    '}'+
    'a:hover{'+
    '    text-decoration:underline'+
    '}'+
    '.display-none{'+
    '    display:none!important'+
    '}'+
    '#tdict-bubble-main{'+
    '    border:1px solid #999;'+
    '    border-radius:4px;'+
    '    box-shadow:0 0 20px rgba(0,0,0,0.5);'+
    '    color:#222;'+
    '    font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;'+
    '    font-size:14px;'+
    '    line-height:normal;'+
    '    padding:9px;'+
    '    position:fixed;'+
    '    width:500px'+
    '}'+
    '#tdict-bubble-main:after{'+
    '    clear:both;'+
    '    content:"";'+
    '    display:table'+
    '}'+
    '#tdict-bubble-close{'+
    '    position:absolute;'+
    '    top:0;'+
    '    right:0;'+
    '    width:16px;'+
    '    height:16px;'+
    '    background-image:url("data:image/png;'+
    'base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAYUlEQVQYV12PwQ2AMAwD2w3YBEaAycsIsAkbgC+qowikeyCfHLe31l5xiUM8gm8RQ2x9hmuRECIUNwL2KSwhRCh2BFda4j9CTlbBtQi5ySfy5mzMTXWka3FyEwLPzJv/TR8o8xvGTnBWXwAAAABJRU5ErkJggg==");'+
    '    background-position:center;'+
    '    background-repeat:no-repeat;'+
    '    cursor:pointer;'+
    '    opacity:0.35'+
    '}'+
    '#tdict-bubble-close:hover{'+
    '    opacity:0.8'+
    '}'+
    '#tdict-bubble-query-row{'+
    '    margin-bottom:9px'+
    '}'+
    '#tdict-bubble-query,#tdict-bubble-audio-icon{'+
    '    display:inline-block;'+
    '    height:20px;'+
    '    line-height:20px;'+
    '    vertical-align:top'+
    '}'+
    '#tdict-bubble-query{'+
    '    font-size:16px;'+
    '    font-weight:bold'+
    '}'+
    '#tdict-bubble-audio-icon{'+
    '    background-image:url("data:image/png;'+
    'base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAcUlEQVQ4y2P4//8/AyUYQhAH3gNxA7IAIQPmo/H3g/QA8XkgFiBkwHyoYnRQABVfj88AmGZcTuuHyjlgMwBZM7IE3NlQGhQe65EN+I8Dw8MLGgYoFpFqADK/YUAMwOsFigORatFIlYRElaRMWmaiBAMAp0n+3U0kqkAAAAAASUVORK5CYII=");'+
    '    background-position:center;'+
    '    background-repeat:no-repeat;'+
    '    cursor:pointer;'+
    '    margin-left:8px;'+
    '    opacity:0.5;'+
    '    width:16px'+
    '}'+
    '#tdict-bubble-audio-icon:hover{'+
    '    opacity:1'+
    '}'+
    '#tdict-bubble-meaning{'+
    '    line-height:1.3'+
    '}'+
    '#tdict-bubble-options-tip,#tdict-bubble-more,#tdict-bubble-attribution{'+
    '    font-size:12px;'+
    '    line-height:1.3;'+
    '    margin-top:9px'+
    '}'+
    '#tdict-bubble-options-tip{'+
    '    color:#c04'+
    '}'+
    '#tdict-bubble-more a{'+
    '    float:right;'+
    '    word-break:break-all'+
    '}'+
    '#tdict-bubble-attribution{'+
    '    color:#666;'+
    '    float:left;'+
    '    margin-right:9px;'+
    '    overflow:hidden;'+
    '    text-overflow:ellipsis;'+
    '    white-space:nowrap;'+
    '    width:230px'+
    '}'+
    '#tdict-bubble-attribution a{'+
    '    color:#073'+
    '}'+
    '#tdict-arrow-main{'+
    '    position:absolute;'+
    '    z-index:99998'+
    '}'+
    '#tdict-bubble-arrow-inner-up,#tdict-bubble-arrow-inner-down{'+
    '    background:transparent;'+
    '    border-left:10px solid transparent;'+
    '    border-right:10px solid transparent;'+
    '    left:2px;'+
    '    position:absolute;'+
    '    width:0;'+
    '    z-index:99999'+
    '}'+
    '#tdict-bubble-arrow-inner-up{'+
    '    border-bottom:10px solid #ffd;'+
    '    top:2px'+
    '}'+
    '#tdict-bubble-arrow-inner-down{'+
    '    border-top:10px solid #ffd'+
    '}'+
    '#tdict-bubble-arrow-outer-up,#tdict-bubble-arrow-outer-down{'+
    '    background:transparent;'+
    '    border-left:12px solid transparent;'+
    '    border-right:12px solid transparent;'+
    '    left:0;'+
    '    position:absolute;'+
    '    width:0'+
    '}'+
    '#tdict-bubble-arrow-outer-up{'+
    '    border-bottom:12px solid #999'+
    '}'+
    '#tdict-bubble-arrow-outer-down{'+
    '    border-top:12px solid #999'+
    '}'+
    '.nytd_selection_button{'+
    '    display:none'+
    '}' +
    '.sp {background:url(http://shared.ydstatic.com/dict/v5.15/styles/new-sprite.png) no-repeat;vertical-align:middle;overflow:hidden;display:inline-block;z-index:99998}';

  return css;
}

var injected = null;

function remove_injected_node ()
{
  if (injected){
    injected.remove();
  }

}

function inject_tdict ()
{
  if (injected != null){
    injected.remove();
  }
  injected = document.createElement('div');
  injected.id="tdict-root";

  var css = document.createElement('style');
  css.type= "text/css";
  css.appendChild(document.createTextNode(generate_css()));
  injected.appendChild(css);

  var main = document.createElement('div');
  main.id = "tdict-bubble-main";
  //TODO: calculate position based on current selection.
  main.setAttribute("style", "left: 748px; top: 54.5625px;");

  var close = document.createElement('div');
  close.id="tdict-bubble-close";
  // @todo: close injected window when clicked "X"..
  main.appendChild(close);

  var meaning = document.createElement('div');
  meaning.id = "tdict-bubble-meaning";

  var replacement = document.createElement('div');
  // this will be replaced with proper nodes based on conditions...
  replacement.id = 'tdict-replacement';
  meaning.appendChild(replacement);

  main.appendChild(meaning);
  injected.appendChild(main);

  document.body.parentNode.appendChild(injected);
  $(".img-list").remove();
  $("#tdict-bubble-close").bind("click",remove_injected_node);
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    inject_tdict();

    if (request.status == "begin") {
      debugger;

      var opts = {
        lines: 7, // The number of lines to draw
        length: 10, // The length of each line
        width: 10, // The line thickness
        radius: 15, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 0, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: '#000', // #rgb or #rrggbb or array of colors
        speed: 1, // Rounds per second
        trail: 60, // Afterglow percentage
        shadow: false, // Whether to render a shadow
        hwaccel: false, // Whether to use hardware acceleration
        className: 'spinner', // The CSS class to assign to the spinner
        zIndex: 2e9, // The z-index (defaults to 2000000000)
        top: '50%', // Top position relative to parent
        left: '50%' // Left position relative to parent
      };

      var target =  document.getElementById('tdict-replacement');

      var title = document.createElement('h2');
      title.appendChild(document.createTextNode('Looking up "' + request.userData + '"...'));
      target.appendChild(title);

      var spinner = document.createElement('div');
      spinner.appendChild(new Spinner(opts).spin().el);
      target.appendChild(spinner);
    }
    else if (request.status == "ok") {
      debugger;

      var target =  document.getElementById('tdict-replacement');

      // clear all children..
      while (target.firstChild) {
        target.removeChild(target.firstChild);
      }

      // @todo: parse and find proper node. this should be a part of backend.
      //
      ele = $(request.userData).find("#phrsListTab")[0]
      target.appendChild(ele);
      $(".img-list").remove();
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
