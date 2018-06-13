var api = "http://api.giphy.com/v1/gifs/search?";
//This is GIPHY public key that anyone can use. 
var apiKey = "&api_key=dc6zaTOxFJmzC";
var query = "&q=hi";

function setup() {
    noCanvas();
    var url = api + apiKey + query;
    loadJSON(url, gotData);

}
function gotData(giphy) {
    for (var i = 0 ; i < giphy.data.length; i++) {
    createImg(giphy.data[i].images.original.url);
}
}


