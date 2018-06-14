var api = "http://api.giphy.com/v1/gifs/search?";
//This is GIPHY public key that anyone can use. 
var apiKey = "&api_key=dc6zaTOxFJmzC";
//var query = "&q=rainbow";

function setup() {
    noCanvas();
    var button = select('#submit');
    button.mousePressed(userAsk);
    
    input = select('#city');
}
function userAsk() {
    var url = api + apiKey + '&q=' + input.value();
    loadJSON(url, gotData);
}
function gotData(giphy) {
    for (var i = 0 ; i < giphy.data.length; i++) {
    createImg(giphy.data[i].images.original.url);
}
}


