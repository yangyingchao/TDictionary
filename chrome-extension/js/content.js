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
    '    box-sizing:border-box;'+
    '   width:22em' +
    '}' +
    '#tdict-bubble-main a{'+
    '    color:#11c;'+
    '    text-decoration:none'+
    '}'+
    '#tdict-bubble-main a:hover{'+
    '    text-decoration:underline'+
    '}'+
    '#tdict-bubble-main .display-none{'+
    '    display:none!important'+
    '}'+
    '#tdict-bubble-main table{'+
    'background-color: rgba(0,0,0,0)'+
    '}' +
    '#tdict-bubble-main ol, ul, li{' +
    'line-height: 1.2;' +
    'list-style: none;'+
    'margin: 0;' +
    'padding: 0' +
    '}'+
    '#tdict-bubble-main h2{' +
	'margin-bottom: .25em;' +
	'margin-top: .25em;' +
	'border-bottom: 1px solid lightgrey;' +
    'text-shadow: 2px 2px 2px gray;' +
    'background-color: rgba(0,0,0,0);'+
    'font-size: 1.5em;' +
    'color: rgb(34, 34, 34);' +
    'display: block;' +
    'font-weight: bold;' +
    'height: 27px;' +
    'line-height: 27.2999992370605px;' +
    'padding-bottom: .5em'+
    '}'+
    '#tdict-bubble-main td { ' +
    'border: none;' +
    'display: table-cell;'+
    'vertical-align: inherit;'+
    ' padding: 0 0;' +
    '} ' +
    '#tdict-bubble-main h2 span {' +
    'background-image: url("data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAALGPC/xhBQAACjppQ0NQUGhvdG9zaG9wIElDQyBwcm9maWxlAABIiZ2Wd1RU1xaHz713eqHNMBQpQ++9DSC9N6nSRGGYGWAoAw4zNLEhogIRRUQEFUGCIgaMhiKxIoqFgGDBHpAgoMRgFFFReTOyVnTl5b2Xl98fZ31rn733PWfvfda6AJC8/bm8dFgKgDSegB/i5UqPjIqmY/sBDPAAA8wAYLIyMwJCPcOASD4ebvRMkRP4IgiAN3fEKwA3jbyD6HTw/0malcEXiNIEidiCzclkibhQxKnZggyxfUbE1PgUMcMoMfNFBxSxvJgTF9nws88iO4uZncZji1h85gx2GlvMPSLemiXkiBjxF3FRFpeTLeJbItZMFaZxRfxWHJvGYWYCgCKJ7QIOK0nEpiIm8cNC3ES8FAAcKfErjv+KBZwcgfhSbukZuXxuYpKArsvSo5vZ2jLo3pzsVI5AYBTEZKUw+Wy6W3paBpOXC8DinT9LRlxbuqjI1ma21tZG5sZmXxXqv27+TYl7u0ivgj/3DKL1fbH9lV96PQCMWVFtdnyxxe8FoGMzAPL3v9g0DwIgKepb+8BX96GJ5yVJIMiwMzHJzs425nJYxuKC/qH/6fA39NX3jMXp/igP3Z2TwBSmCujiurHSU9OFfHpmBpPFoRv9eYj/ceBfn8MwhJPA4XN4oohw0ZRxeYmidvPYXAE3nUfn8v5TE/9h2J+0ONciURo+AWqsMZAaoALk1z6AohABEnNAtAP90Td/fDgQv7wI1YnFuf8s6N+zwmXiJZOb+DnOLSSMzhLysxb3xM8SoAEBSAIqUAAqQAPoAiNgDmyAPXAGHsAXBIIwEAVWARZIAmmAD7JBPtgIikAJ2AF2g2pQCxpAE2gBJ0AHOA0ugMvgOrgBboMHYASMg+dgBrwB8xAEYSEyRIEUIFVICzKAzCEG5Ah5QP5QCBQFxUGJEA8SQvnQJqgEKoeqoTqoCfoeOgVdgK5Cg9A9aBSagn6H3sMITIKpsDKsDZvADNgF9oPD4JVwIrwazoML4e1wFVwPH4Pb4Qvwdfg2PAI/h2cRgBARGqKGGCEMxA0JRKKRBISPrEOKkUqkHmlBupBe5CYygkwj71AYFAVFRxmh7FHeqOUoFmo1ah2qFFWNOoJqR/WgbqJGUTOoT2gyWgltgLZD+6Aj0YnobHQRuhLdiG5DX0LfRo+j32AwGBpGB2OD8cZEYZIxazClmP2YVsx5zCBmDDOLxWIVsAZYB2wglokVYIuwe7HHsOewQ9hx7FscEaeKM8d54qJxPFwBrhJ3FHcWN4SbwM3jpfBaeDt8IJ6Nz8WX4RvwXfgB/Dh+niBN0CE4EMIIyYSNhCpCC+ES4SHhFZFIVCfaEoOJXOIGYhXxOPEKcZT4jiRD0ie5kWJIQtJ20mHSedI90isymaxNdiZHkwXk7eQm8kXyY/JbCYqEsYSPBFtivUSNRLvEkMQLSbyklqSL5CrJPMlKyZOSA5LTUngpbSk3KabUOqkaqVNSw1Kz0hRpM+lA6TTpUumj0lelJ2WwMtoyHjJsmUKZQzIXZcYoCEWD4kZhUTZRGiiXKONUDFWH6kNNppZQv6P2U2dkZWQtZcNlc2RrZM/IjtAQmjbNh5ZKK6OdoN2hvZdTlnOR48htk2uRG5Kbk18i7yzPkS+Wb5W/Lf9ega7goZCisFOhQ+GRIkpRXzFYMVvxgOIlxekl1CX2S1hLipecWHJfCVbSVwpRWqN0SKlPaVZZRdlLOUN5r/JF5WkVmoqzSrJKhcpZlSlViqqjKle1QvWc6jO6LN2FnkqvovfQZ9SU1LzVhGp1av1q8+o66svVC9Rb1R9pEDQYGgkaFRrdGjOaqpoBmvmazZr3tfBaDK0krT1avVpz2jraEdpbtDu0J3XkdXx08nSadR7qknWddFfr1uve0sPoMfRS9Pbr3dCH9a30k/Rr9AcMYANrA67BfoNBQ7ShrSHPsN5w2Ihk5GKUZdRsNGpMM/Y3LjDuMH5homkSbbLTpNfkk6mVaappg+kDMxkzX7MCsy6z3831zVnmNea3LMgWnhbrLTotXloaWHIsD1jetaJYBVhtseq2+mhtY823brGestG0ibPZZzPMoDKCGKWMK7ZoW1fb9banbd/ZWdsJ7E7Y/WZvZJ9if9R+cqnOUs7ShqVjDuoOTIc6hxFHumOc40HHESc1J6ZTvdMTZw1ntnOj84SLnkuyyzGXF66mrnzXNtc5Nzu3tW7n3RF3L/di934PGY/lHtUejz3VPRM9mz1nvKy81nid90Z7+3nv9B72UfZh+TT5zPja+K717fEj+YX6Vfs98df35/t3BcABvgG7Ah4u01rGW9YRCAJ9AncFPgrSCVod9GMwJjgouCb4aYhZSH5IbyglNDb0aOibMNewsrAHy3WXC5d3h0uGx4Q3hc9FuEeUR4xEmkSujbwepRjFjeqMxkaHRzdGz67wWLF7xXiMVUxRzJ2VOitzVl5dpbgqddWZWMlYZuzJOHRcRNzRuA/MQGY9czbeJ35f/AzLjbWH9ZztzK5gT3EcOOWciQSHhPKEyUSHxF2JU0lOSZVJ01w3bjX3ZbJ3cm3yXEpgyuGUhdSI1NY0XFpc2imeDC+F15Oukp6TPphhkFGUMbLabvXu1TN8P35jJpS5MrNTQBX9TPUJdYWbhaNZjlk1WW+zw7NP5kjn8HL6cvVzt+VO5HnmfbsGtYa1pjtfLX9j/uhal7V166B18eu612usL1w/vsFrw5GNhI0pG38qMC0oL3i9KWJTV6Fy4YbCsc1em5uLJIr4RcNb7LfUbkVt5W7t32axbe+2T8Xs4mslpiWVJR9KWaXXvjH7puqbhe0J2/vLrMsO7MDs4O24s9Np55Fy6fK88rFdAbvaK+gVxRWvd8fuvlppWVm7h7BHuGekyr+qc6/m3h17P1QnVd+uca1p3ae0b9u+uf3s/UMHnA+01CrXltS+P8g9eLfOq669Xru+8hDmUNahpw3hDb3fMr5talRsLGn8eJh3eORIyJGeJpumpqNKR8ua4WZh89SxmGM3vnP/rrPFqKWuldZachwcFx5/9n3c93dO+J3oPsk42fKD1g/72ihtxe1Qe277TEdSx0hnVOfgKd9T3V32XW0/Gv94+LTa6ZozsmfKzhLOFp5dOJd3bvZ8xvnpC4kXxrpjux9cjLx4qye4p/+S36Urlz0vX+x16T13xeHK6at2V09dY1zruG59vb3Pqq/tJ6uf2vqt+9sHbAY6b9je6BpcOnh2yGnowk33m5dv+dy6fnvZ7cE7y+/cHY4ZHrnLvjt5L/Xey/tZ9+cfbHiIflj8SOpR5WOlx/U/6/3cOmI9cmbUfbTvSeiTB2Ossee/ZP7yYbzwKflp5YTqRNOk+eTpKc+pG89WPBt/nvF8frroV+lf973QffHDb86/9c1Ezoy/5L9c+L30lcKrw68tX3fPBs0+fpP2Zn6u+K3C2yPvGO9630e8n5jP/oD9UPVR72PXJ79PDxfSFhb+BQOY8/wldxZ1AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfeDB0IDQuvDEPBAAADcUlEQVQ4y61VTWhjVRT+7n33vbw+qrWmppPMj1VCf2JMNXTGRRFxViqim9lZnBHUrcMsXAi6FwcEQRFXuhNBQRfSLvxBEBcDaYNxIJgyCkpL+kYbZ0rT9N7zuTAvvLZjGYsf3M0953z3nO+ec6/CETA7O4t6vY5qtQqSBgCUUrZWqw1s+ijE9XodACAixwB8DmBJRKYTW7lcPpy4Wq0eegDJx0TkSZJnSX5SqVRKANBoNOAdVu7KygoWFhbg+35UKBR28/k81tbWBj7j4+OW5LiIFEkWRORkLpdb3NjY6KpbkZbLZTQaDczNzRnn3HkA2wA+Xl5elvn5edXtdvMkb9Zqtb9mZmaGlVLvAXgOgCb5gtb6oz0ZT09PI5/Po9FooFKp3GOtfRXAZZIxyS8LhQJ7vd4xkh+QPLG+vv5dHMe9bDb7U1+OHMmHSL6/hziOY7TbbZRKpQdE5DLJl0hqEflBRJacc4rkBZKvkKzkcrlr7Xb7ahzH10dHR4+TPENyjOQ3ZnJy8iQw0JoATjvnXgPw8H6JjDEUkSskbwIYA/D81NTUV81m808R+RTAeQAnSJ4zzrlvAQy0Vkrd0Q86gGazyWKxWFNKvQ3gdQCzAB4BsLi6uro8MTFxvU98Wjvn7nfO3Zcsa+2YtRa3WgDQarV61trP+nunrLUzycEi8rP8gwdNEnA7KBaLaLVa2N3d7QD4FcC9AO5M7M65PwAIgIxxzt02cRzHAJBkz/12ERns/aeMNzc3E2IfwKhSCgBsitgkTWCstd1UrALgA/8+6tlsVllrSwBGANwA8Ftis9ZOKaUMgN+NiLyVajeQnATwFIBoP6nv+9je3j6utb6UNAqAKwAwMjJyl4jk+/srptPpvJEOzmQyGWPMRZKXAOTSNs/zlIjMicij/Uv6utvtXu0n9LSIjPZdl/aUPDw8jJ2dnZ2tra03ReRl59yP1lo453RyySJyzVrbttZ+LyLvAkAQBEZEzjnn7u632xcHNBwaGkqXXvE8b1Fr/Y7WOpFLK6UeV0qdSfzCMHwxiqLNKIoYRdGH6YE7oGVqEk8ppYoAlOcdfGWDIHgmk8n8EoYhwzDshGE4k07uADzPg9aHfzDGmGd9378RBAF932cQBBeMMUf6lfZAaz2ntW5qrel53kVjTIj/EU8AOOuldPJ9H38DkeHcgtyS8p4AAAAASUVORK5CYII=");'+
    'background-repeat: no-repeat;'+
    'padding: .4em 30px .4em 0;'+
    'background-position: right;' +
    'background-color: rgba(0,0,0,0);'+
    'display: inline ' +
    '}'+
    '#tdict-bubble-main h2 span:hover {' +
    'background-image: url("data:image/png;base64, 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");'+
    'background-repeat: no-repeat;'+
    'padding: .4em 30px .4em 0;'+
    'background-position: right;' +
    'display: inline ' +
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
    '    width:120px'+
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
    '#copyright a {'+
    'font-size: 75%; color: #666;font-weight: lighter'+
    '}';
  return css;
}

function createTbody (eleHtml, source, sourceUrl)
{
  var tbody = document.createElement('tbody');
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.appendChild($(eleHtml)[0]);
  tr.appendChild(td);
  tbody.appendChild(tr);

  tr = document.createElement('tr');
  td = document.createElement('td');

  var copyright=document.createElement('div');
  copyright.id = 'copyright';
  var ac = document.createElement('a');
  ac.setAttribute('href', sourceUrl);
  ac.appendChild(document.createTextNode(source));
  copyright.appendChild(ac);

  td.appendChild(copyright);
  tr.appendChild(td);
  tbody.appendChild(tr);

  return tbody;
}

var injected = null;
var key = null;

function remove_injected_node ()
{
  if (injected){
    injected.remove();
  }
  key = null;
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
  $("#tdict-bubble-close").bind("click",remove_injected_node);
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    inject_tdict();

    if (request.status == "begin") {
      var opts = {
        lines: 6, // The number of lines to draw
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
      key = request.userData;
      var title = document.createElement('h2');
      title.appendChild(document.createTextNode('Looking up "' + key + '"...'));
      target.appendChild(title);

      var spinner = document.createElement('div');
      spinner.appendChild(new Spinner(opts).spin().el);
      target.appendChild(spinner);
    }
    else if (request.status == "ok") {
      var target =  document.getElementById('tdict-replacement');

      // clear all children..
      while (target.firstChild) {
        target.removeChild(target.firstChild);
      }

      var tbl = document.createElement('table');
      var tr = document.createElement('tr');
      var td = document.createElement('td');
      var title = document.createElement('h2');
      title.appendChild(document.createTextNode(key));
      var a = document.createElement('a');
      var span = document.createElement('span');
      a.appendChild(span);
      title.appendChild(a);
      td.appendChild(title);
      tr.appendChild(td);
      tbl.appendChild(tr);

      // @todo: parse and find proper node. this should be a part of backend.
      //
      var def = request.userData;
      var ele = def.definition;
      if (ele == null){
        ele = def.raw_content;
      }

      var tbody = createTbody(ele, def.name, def.url);
      tbl.appendChild(tbody);
      target.appendChild(tbl);

      $(".img-list").remove();
      $("#tdict-replacement span").bind("click",function(){
        chrome.runtime.sendMessage({cmd: "speak",
                                    userData: key});
        //@todo: add a progress bar for tts, and remove it after "speak" finished.
      });
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
