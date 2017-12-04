var coderain = document.getElementById("coderain");
var ctx = coderain.getContext("2d");

coderain.height = window.innerHeight;
coderain.width = window.innerWidth;

window.onload = window.onresize = function () {
    //making the canvas full screen
    coderain.height = document.getElementById("home").clientHeight;
    coderain.width = document.getElementById("home").clientWidth;
}

//define character set
var characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
//converting the string into an array of single characters
characters = characters.split("");

var font_size = 15;
var columns = coderain.width / font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++)
    drops[x] = 1;

//drawing the characters
function draw() {
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, coderain.width, coderain.height);

    ctx.fillStyle = "#0F0"; //green text
    ctx.font = font_size + "px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'";
    //looping over drops
    for (var i = 0; i < drops.length; i++) {
        //a random character to print
        var text = characters[Math.floor(Math.random() * characters.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * font_size > coderain.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 66);
