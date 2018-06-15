var api = "http://api.giphy.com/v1/gifs/search?";
//This is GIPHY public key that anyone can use. 
var apiKey = "&api_key=dc6zaTOxFJmzC";
var test = 0;
function setup() {
    noCanvas();
    var button = select('#submit');
    button.mousePressed(userAsk); 
    input = select('#keyword');
}
//wil remove the 

function buttonPressed() {
    
  

}


function userAsk() {
    var url = api + apiKey + '&q=' + input.value();
    loadJSON(url, gotData);

}
function gotData(giphy) {
    
    if (test === 0){
         var images = document.getElementsByTagName('img');
        var l = images.length;
        for (var i = 0; i < l; i++) {
            images[0].parentNode.removeChild(images[0]);

        }
//   for (var i = 0 ; i < giphy.data.length; i++) {
    createImg(giphy.data[0].images.original.url);
            test = 1;
    }
    else{
        var images = document.getElementsByTagName('img');
        var l = images.length;
        for (var i = 0; i < l; i++) {
            images[0].parentNode.removeChild(images[0]);

        }

            test = 0;
            createImg(giphy.data[0].images.original.url);

        
    }
}


