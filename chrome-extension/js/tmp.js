/* Copyright 2011 Google Inc. All Rights Reserved. */ (function(){var f="\" ' ( ) , - . / 0 1 2 : ? a about and are as be but com for from have i in is it like may more my next not of on search that the this to was when with you your".split(" "),m=!1,p={},q={},r=0,s=-1,v=-1,w=function(a){a=a.replace(/<[^>]*>/g,"");return a=a.replace(/[<>]/g,"")},x=function(a){a=w(a);return a=a.substring(0,100).toLowerCase()},y=function(a){for(var b=0,c=f.length;b<c;b++)if(a===f[b])return!0;return!1},z=function(a,b,c){"initialize"===a.type&&c({instanceId:r++})},A=function(a){"openOptionsPage"===
a.type&&chrome.tabs.create({url:chrome.runtime.getURL("options.html")})},B=function(a,b,c){"options"===a.type&&c({options:p})},F=function(a,b,c){if("fetch_raw"!==a.type&&"fetch_html"!==a.type)return!1;_gaq&&_gaq.push(["_trackEvent","lookup",a.type]);-1!==s&&v!==a.instanceId&&chrome.tabs.sendMessage(s,{type:"hide",instanceId:v});"fetch_raw"===a.type?(s=b.tab.id,v=a.instanceId):v=s=-1;var d=x(a.query),e=function(){var b={request:a,sanitizedQuery:d,dictRes:null,enDictRes:null,tranRes:null,tabLangTranRes:null,
tabLangTranReqTimedOut:!1,tabLang:null,numResponses:0,callback:c,incognito:!1};C(d,p.language,function(a){b.dictRes=a;D(b)});"en"!==p.language?C(d,"en",function(a){b.enDictRes=a;D(b)}):D(b);E(d,"auto",function(a){b.tranRes=a;D(b)});chrome.tabs.getSelected(null,function(a){b.incognito=a.incognito;var c=window.setTimeout(function(){console.assert(null===b.tabLangTranRes);b.tabLangTranReqTimedOut=!0;D(b)},800);chrome.tabs.detectLanguage(a.id,function(a){b.tabLangTranReqTimedOut||(window.clearTimeout(c),
"und"!==a?(b.tabLang="he"===a?"iw":a,E(d,b.tabLang,function(a){b.tabLangTranRes=a;D(b)})):D(b))})})};if(m)e();else{var k=function(b){m?e():10<b?c({eventKey:a.eventKey,sanitizedQuery:d}):window.setTimeout(function(){k(b+1)},200)};k(0)}return!0},C=function(a,b,c){a={path:"dictionaryextension/v1/knowledge/search",params:{term:a,language:b}};(b=window["gdx.LANG_TO_COUNTRY"][b])&&(a.params.country=b);gapi.client.request(a).execute(function(a){a=G(a,"dictionaryData[0]");if(!a)return c(null);var b=function(a){if(!a.senseFamilies)return 0;
a=a.senseFamilies;for(var b=a.length,c=0;c<a.length;c++)a[c].senses&&(b+=0.1*a[c].senses.length);return b},k=function(a,c){return b(c)-b(a)};a.entries&&(a.entries=a.entries.sort(k));a.webDefinitions&&(a.hasWebDefinitions=!0);c(a)})},E=function(a,b,c){var d=new XMLHttpRequest;d.open("GET","https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl="+b+"&tl="+p.language+"&q="+encodeURIComponent(a),!0);d.onload=function(){var a=null;if(200===this.status)try{a=JSON.parse(d.response)}catch(b){}return c(a)};
d.send()},D=function(a){a.numResponses++;if(4===a.numResponses){var b=H(a.dictRes),c=b;"en"!==p.language&&(c=H(a.enDictRes));var d=I(a.tranRes,!0),e=I(a.tabLangTranRes,!0),k=p.language.toLowerCase(),g=!1,n=null,l=null;e&&a.tabLang!==k?(g=!0,n=a.tabLangTranRes,l=e):!b&&d&&(g=!0,n=a.tranRes,l=d);g&&c&&c.audio&&"en"===l.srcLang.toLowerCase()&&(l.audio=c.audio);c=g?"translation":"definition";b||l||(c="none");_gaq&&_gaq.push(["_trackEvent","lookup","type_"+c]);e=encodeURIComponent(a.sanitizedQuery);c=
"";g&&(c="http://translate.google.com/translate_t?source=dict-chrome-ex&sl="+l.srcLang+"&tl="+p.language+"&q="+e);d="http://www.google.com/search?source=dict-chrome-ex&defl="+p.language+"&hl="+p.language+"&q="+e+"&tbo=1&tbs=dfn:1";"en"===p.language&&(d="http://www.google.com/search?q=define+"+e);if("fetch_html"===a.request.type)b="",b=g?J(n,l.audio,c):K(a.dictRes,d),g={eventKey:a.request.eventKey,sanitizedQuery:a.sanitizedQuery,html:b};else{var h=null,t=null;g?(h=l,h.moreUrl=c):b&&(h=b,h.moreUrl=
d,h.srcLang=p.language);h&&"true"===p.storeHistory&&!a.incognito&&chrome.storage.local.get("word-history",function(b){t=h.srcLang+"<"+p.language+"<"+a.sanitizedQuery;b["word-history"][t]=h.meaningText;chrome.storage.local.set(b)});h&&!h.prettyQuery&&(h.prettyQuery=a.sanitizedQuery);g=!1;("true"===p.popupDblclick&&"none"===p.popupDblclickKey||"true"===p.popupSelect&&"none"===p.popupSelectKey)&&y(a.sanitizedQuery)&&(g=!0);g={eventKey:a.request.eventKey,sanitizedQuery:a.sanitizedQuery,meaningObj:h,showOptionsTip:g}}a.callback(g)}},
I=function(a,b){if(!a||a.sentences[0].orig.toLowerCase()==a.sentences[0].trans.toLowerCase())return null;var c;c=a.sentences[0].orig.toLowerCase();var d=a.sentences[0].trans.toLowerCase(),e=d;if(b&&a.dict&&0<a.dict.length)for(var k=0,g=a.dict.length;k<g;k++)for(var n=a.dict[k],l=0,h=0,t=n.terms.length;h<t&&2>l;h++){var u=n.terms[h].toLowerCase();0<u.length&&u!==c&&u!==d&&(e+=", "+u,l++)}c=w(e);(d=window["gdx.LANG_TO_NAME"][a.src.toLowerCase()])||(d=a.src);return{type:"translation",meaningText:c,attribution:"Translated from "+
d,srcLang:a.src}},G=function(a,b){for(var c=b.split("."),d=0;d<c.length;d++){var e=c[d];console.assert(e);if("]"===e.charAt(e.length-1)){e=e.split("[");console.assert(2===e.length);var k=parseInt(e[1].slice(0,-1),10);a=a[e[0]];if(!a)return null;a=a[k]}else a=a[e];if(!a)return null}return a},L=function(a){return"//"===a.substr(0,2)?"https:"+a:a},H=function(a){if(!a||a.error)return null;var b=null,c=null;if(b=G(a,"entries[0]"))c={prettyQuery:b.syllabifiedHeadword||b.headword,meaningText:G(b,"senseFamilies[0].senses[0].definition.text"),
attribution:"",audio:G(b,"phonetics[0].drEyeAudio"),type:"licensedDef"},c.meaningText?c.audio&&(c.audio=L(c.audio)):c=null;!c&&(b=G(a,"webDefinitions[0]"))&&(c=b.sourceUrl,c={meaningText:b.definition,attribution:'<a href="'+c+'">'+c+"</a>",type:"webDef"});if(!c)return null;b=c.meaningText;c.meaningText=b.charAt(0).toUpperCase()+b.slice(1);return c},J=function(a,b,c){var d=I(a,!1);if(!d)return"";b&&(d.audio=b);a.tranResSummary=d;a.moreUrl=c;a.hasDict=Boolean(a.dict)&&a.dict.length;return q.browser_action_tran(a)},
K=function(a,b){if(!a||a.error)return"";a.moreUrl=b;a.makeAudioUrl=function(){var a=this.drEyeAudio;return a?L(a):""};var c={};a.showOnlyOnce=function(){return function(a,b){var k=b(a);if(c[k])return"";c[k]=!0;return k}};return q.browser_action_dict(a)},M=function(a){var b={};b.language=a.language||"en";var c=function(c,d){var g=a[c];b[c]=d;"true"===g||"false"===g?b[c]=g:"boolean"===typeof g&&(b[c]=String(g))},d=function(c,d){b[c]=a[c]||d};c("popupDblclick","true");c("popupSelect","false");c("enableHttps",
"true");d("popupDblclickKey","none");d("popupSelectKey","ctrl");c("storeHistory","false");c("allowCrossExtensionHistory","false");"pt"===a.language&&(b.language="pt-BR");return b},N=function(a,b,c){if("false"===p.allowCrossExtensionHistory||"false"===p.storeHistory||!a||!a.getHistory)return!1;chrome.storage.local.get("word-history",function(a){c(a["word-history"])});return!0},O=function(a,b){var c=new XMLHttpRequest;c.open("GET",a,!0);c.onload=function(){var a=null;200===this.status&&(a=c.response);
return b(a)};c.send()},P=function(){var a=window.localStorage.options,b={};a&&(b=JSON.parse(a));p=M(b);window.localStorage.options=JSON.stringify(p);chrome.storage.local.get("word-history",function(a){a["word-history"]||chrome.storage.local.set({"word-history":{}})});chrome.runtime.onMessage.addListener(z);chrome.runtime.onMessage.addListener(A);chrome.runtime.onMessage.addListener(B);chrome.runtime.onMessage.addListener(F);chrome.runtime.onMessageExternal.addListener(N)};
window["gdx.updateOptions"]=function(){p=JSON.parse(window.localStorage.options)};window.initBackgroundPageAsync=function(a){gapi.client.setApiKey("AIzaSyC9PDwo2wgENKuI8DSFOfqFqKP2cKAxxso");var b=function(){2>Object.keys(q).length||(m=!0,a&&a())};O("templates/browser_action_dict.html",function(a){q.browser_action_dict=Mustache.compile(a);b()});O("templates/browser_action_tran.html",function(a){q.browser_action_tran=Mustache.compile(a);b()})};window.initBackgroundPage=P;var Q=Q||!1;Q||P();})();