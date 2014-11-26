// chrome.runtime.sendMessage({action: "open_dialog_box"},
//                           function(response) {});

function generateTag ()
{

}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.status == "begin") {
      document.body.style.backgroundColor="green";
      alert("Staring looking up...");
    }
    else if (request.status == "ok") {
      debugger;
      document.body.style.backgroundColor="yellow";

      var root = document.createElement('div');
      root.id="tdict-root";

      var css = document.createElement('style');
      css.type= "text/css";
      css.appendChild(document.createTextNode(
        '#tdict-bubble-main{    border:1px solid #999;    border-radius:4px;    box-shadow:0 0 20px rgba(0,0,0,0.5);    color:#222;    font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;    font-size:14px;    line-height:normal;    padding:9px;    position:absolute;    width:300px} '      ));
      root.appendChild(css);


     //  a.a.style.left="0";
     //     a.a.style.top="0";
     //     var b=
     //         a.a.offsetWidth,c=a.a.offsetHeight,f=[window.pageXOffset,window.pageYOffset],d=f[0],g=[a.k.left+d,a.k.top+f[1]],n=a.k.bottom-a.k.top,z=g[0]+(a.k.right-a.k.left)/2,f=d+document.documentElement.offsetWidth,l=z-b/2;
     //     l+b>f&&(l=f-b);
     //     l<d&&(l=d);
     //     var r=g[1]-c-12+1,m=g[1]+n+12-1;
     //     i:if(b=new D(r,l+b,r+c,l),b.top<window.pageYOffset)b=!1;
     //     else
     //     {
     //         for(var c=document.getElementsByTagName("embed"),A=document.getElementsByTagName("object"),p=[window.pageXOffset,window.pageYOffset],B=p[0],p=p[1],q=0,K=c.length+A.length;
     //             q<
     //             K;
     //             q++)
     //         {
     //             var h=(q<c.length?c[q]:A[q-c.length]).getBoundingClientRect(),h=new D(h.top+p,h.right+B,h.bottom+p,h.left+B);
     //             if(b.bottom>h.top&&h.bottom>b.top&&b.left<h.right&&h.left<b.right)
     //             {
     //                 b=!1;
     //                 break i
     //             }

     //         }
     //         b=!0
     //     }
     //     b?(m=a.w,m.style.top=g[1]-12+"px"):(r=m,m=a.A,m.style.top=g[1]+n+"px");
     //     g=z-12;
     //     m.style.left=g+"px";
     //     g-5>d&&g+24+5<f&&a.r.appendChild(m);
     //     a.a.style.top=r+"px";
     //     a.a.style.left=l+"px"
     // }
      var main = document.createElement('div');
      main.id = "tdict-bubble-main";
      main.setAttribute("style", "left: 748px; top: 54.5625px;");

      var meaning = document.createElement('div');
      meaning.id = "tdict-bubble-meaning";

      meaning.appendChild(document.createTextNode("AAAAAAAAAAAAAAAAA"));

      main.appendChild(meaning);
      root.appendChild(main);

      document.body.parentNode.appendChild(root);
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
