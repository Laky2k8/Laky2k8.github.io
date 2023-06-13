function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = "A jelenlegi idő: " + h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function loadDate()
{
    const weekday = ["Vasárnap","Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat"];

    var d = new Date();
    var utc = d.toJSON().slice(0,10).replace(/-/g,'.');
    let day = weekday[d.getDay()];
    document.getElementById("date").innerHTML = "A mai nap: " + utc + ", " + day + ".";
}

function initDateAndTime()
{
    startTime();
    loadDate();
}



function getAPIresp(url)
{
    fetch(url)
  .then( response => response.json() )
  .then( json => parseResponse(json) )
  .catch( error => console.error(`Error fetching data: ${error.message}`) );
}

function parseResponse(resp)
{
    const obj = resp;
    console.log(obj.rates.HUF);
    document.getElementById("eur").innerHTML = "A jelenlegi Euró-Forint árfolyam: " + obj.rates.HUF + " Ft";
}

function randomBG()
{
    var images = ["bg/bg.png", "bg/bg2.png", "bg/bg3.png","bg/bg4.png","bg/bg5.png"];
    document.body.style.backgroundImage = "url(" + images[Math.floor(Math.random() * images.length)] + ")";
}

function init()
{
    randomBG();
    initDateAndTime();
    getAPIresp('https://api.exchangerate-api.com/v4/latest/eur');
}

function showDialog(dialogName) { 
    const dialog = document.getElementById(dialogName); 
    dialog.show();
    const mapDiv = document.getElementById("map");
    const map = L.map(mapDiv);
    map.invalidateSize();
  } 
  
  function closeDialog(dialogName) {
    const dialog = document.getElementById(dialogName); 
    dialog.close(); 
  } 