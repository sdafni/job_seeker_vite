

var ifrm = document.createElement("iframe");
ifrm.id = "myFrame"
ifrm.setAttribute("src", "http://localhost:3000/content_script");
ifrm.style.width = "640px";
ifrm.style.height = "480px";
ifrm.style.zIndex = "99999999999";

ifrm.style.border ="1px";
ifrm.style.position="fixed";
ifrm.style.bottom="0";
ifrm.style.right="0";
ifrm.style.marginLeft="100px";
ifrm.style.marginRight="3px";
ifrm.style.marginBottom="17px";


document.body.appendChild(ifrm);


