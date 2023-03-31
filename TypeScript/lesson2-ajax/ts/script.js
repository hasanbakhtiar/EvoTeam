var text = document.querySelector('p');
var btn = document.querySelector('button');
var fetchData = function () {
    var http = new XMLHttpRequest();
    http.onload = function () {
        text.innerHTML = this.responseText;
    };
    http.open("GET", '../data/info.txt');
    http.send();
};
btn.onclick = fetchData;
