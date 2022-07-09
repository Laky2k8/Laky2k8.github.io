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
    document.getElementById("eur").innerHTML = "A jelenlegi Euró-Forint árfolyam: " + obj.EUR_HUF + " Ft";
}