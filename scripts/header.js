
document.body.innerHTML+='<div id="top" style="position:absolute; top:0; left:50%"></div>    <h1 id="header">    <span id="title"><a href="https://themuslimgarden.github.io">The Muslim Garden</a></span>    <br>    <div class="selectionBar"><a href="https://themuslimgarden.github.io/Videos" id="Videos">|Videos|</a>     <a href="https://themuslimgarden.github.io/Islamic History" id="islamic-history">|Islamic History|</a>     <a href="https://themuslimgarden.github.io/Daily Reminder" id="daily-r">|Daily Reminder|</a>    <a href="https://themuslimgarden.github.io/Daily Ayah" id="daily-a">|Daily Ayah|</a>    <a href="https://themuslimgarden.github.io/Islamic Fun" id="i-games">|Islamic Fun|</a>    <a href="https://themuslimgarden.github.io/Help%20The%20Ummah" id="help-the-ummah">|Help the Ummah|</a></div>    </h1>';
document.getElementsByTagName("head")[0].innerHTML+='<link rel="shortcut icon" href="https://themuslimgarden.github.io/images/The%20Muslim%20Garden%20logo.png">';
var footer=document.createElement("footer");
var a1=document.createElement("a");
a1.setAttribute("href","https://themuslimgarden.github.io/About Us");
a1.appendChild(document.createTextNode("|About Us|"));

footer.appendChild(a1);

document.getElementById("content").appendChild(footer);
