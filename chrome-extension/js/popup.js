
var dailySentence = {
  url: 'http://news.iciba.com/dailysentence',
  requestSentence: function() {
    debugger;
    var req = new XMLHttpRequest();
    req.open("GET", this.url, true);
    req.onload = this.showSentence.bind(this);
    req.send(null);
  },

  showSentence: function (e) {
    var h = document.createElement("H1") // Create a <h1> element
    var t = document.createTextNode("Notice!"); // Create a text node
    h.appendChild(t)
    document.body.appendChild(h)

    document.body.appendChild(document.createTextNode("icba"));
    var copyright=document.createElement('div');
    copyright.id = 'copyright';
    var ac = document.createElement('a');
    ac.setAttribute('href', this.url);
    ac.appendChild(document.createTextNode("icba"));
    copyright.appendChild(ac);
    document.body.appendChild(copyright);

    var node = $(e.target.response).find("#pic_fr")[0];
    console.log(node);
    if (node != null){
      document.body.appendChild(node);

      var copyright=document.createElement('div');
      copyright.id = 'copyright';
      var ac = document.createElement('a');
      ac.setAttribute('href', this.url);
      ac.appendChild(document.createTextNode("icba"));
      copyright.appendChild(ac);
      document.body.appendChild(copyright);
    }
    else {
      document.body.appendChild(document.createTextNode("Norhing fond..."));
    }
  }
};

// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
  dailySentence.requestSentence();
  debugger;
});
