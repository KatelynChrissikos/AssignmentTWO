
// Wait for DOM to Load
// jQuery(function($) {

//     // Create New Socket Connection using Socket.io
//     var socket = io();

//     // A Green Box for the Peeps
//     var box = $('.box');
    
//     // Handle device change
//     var orientationChange = function(event) {
//       var x = Math.floor(event.beta);
//       var y = Math.floor(event.gamma);
//       socket.emit('move', [x,y]);

//     };
    
//     // Listen to device orientation event on the window
//     window.addEventListener('deviceorientation', orientationChange);

//     // Recieve Update Event From The Server
//     socket.on('update', function(coord){
//       var str = 'translate3d(' + coord[0] + 'px, ' + coord[1] + 'px, 0)';
//       box.css({ transform: str, webkitTransform: str });
//     });

// });

var cardClicked = "";

var theTiles = [
    'assets/images/tile1.jpg',
    'assets/images/tile2.jpg',
    'assets/images/tile3.jpg',
    'assets/images/tile4.jpg',
    'assets/images/tile5.jpg',
    'assets/images/tile6.jpg',
    'assets/images/tile7.jpg',
    'assets/images/tile8.jpg',
    'assets/images/tile9.jpg',
    'assets/images/tile10.jpg',
    'assets/images/tile11.jpg',
    'assets/images/tile12.jpg',

    'assets/images/tile1.jpg',
    'assets/images/tile2.jpg',
    'assets/images/tile3.jpg',
    'assets/images/tile4.jpg',
    'assets/images/tile5.jpg',
    'assets/images/tile6.jpg',
    'assets/images/tile7.jpg',
    'assets/images/tile8.jpg',
    'assets/images/tile9.jpg',
    'assets/images/tile10.jpg',
    'assets/images/tile11.jpg',
    'assets/images/tile12.jpg'
    ];

var board = document.createElement('div');
    board.id = 'memoryboard';
    board.className = 'memoryboard';
    document.getElementsByTagName('body')[0].appendChild(board);

// Our random number generating function
function randomNum(min, max) {
    return Math.floor(Math.random() * max) + min;
}

// Create a new deck array and Shuffle function
var newDeck = [];
var Shuffle = function(){
    var cards = theTiles.length;
    for (var i = 0; i < cards; i++) {
        var num = randomNum(0, theTiles.length);
        newDeck[i] = theTiles[num];
        theTiles.splice(num, 1);
        console.log(num);
    }    
};

// Execute Shuffle function
Shuffle();



// Our Create Tile Function
function Create(num){
    var tile = document.createElement('img');
    tile.id = 'memorytile';
    tile.className = 'memorytile';
    // tile.setAttribute('src', 'assets/images/blank.jpg');
    tile.src = newDeck[num];
    board.appendChild(tile);
    tile.style.opacity = "0";
};

// Loop through and create all of our tiles
for(var i = 0; i < newDeck.length; i++){ 
  Create(i); 
};

console.log(theTiles.length);
console.log(newDeck);
console.log(newDeck.length);

var lastCardClicked;
var thisCardCliked;
$(function(){
    $(".memorytile").click( function() {
        thisCardCliked = this;
        this.style.opacity = "1";

        // Store first card clicked
        if(!cardClicked){
            lastCardClicked = this;
            cardClicked = this.src;    

        // Otherwise, do a comparison
        } else {
            
            // Check if frst card is equal to second card
            if(cardClicked == this.src){
                console.log('yay! you made a match');
                console.log('.memorytile[src="' + this.src + '"]');
                $('.memorytile[src="' + $(this).attr('src') + '"]').css('opacity',0);
  
            } else {
                console.log('oops.. try again');
                setTimeout(function(){
                    hide();
                }, 1000);
                
            }     

            // Remove cardClicked
            cardClicked = '';
            lastCardClicked = '';

            // Find both images with the same source and remove them
            
            // .memorytile[src="myimage.jpg"]

            var hide = function(){
                lastCardClicked.style.opacity = "0";
                thisCardCliked.style.opacity = "0"; 
                
            }
        }


    });
    
});