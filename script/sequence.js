// Sequence 1
var imgNum = 0;
var img = new Image();
var canvas = document.getElementById('screen1');
var ctx = canvas.getContext('2d');

img.src = "./img/main_bg/main (1).gif";

playSequence();

function playSequence() {
    var timer = setInterval(function() {
        if (imgNum > 70) {
            imgNum = 1;
        }
        
        player(imgNum);
        imgNum++;
    }, 28);
}

function player(num) {
    img.src = "./img/main_bg/main (" + num + ").gif";
}

img.addEventListener('load' ,function(e) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(img, 0, 0);
});

// Sequence 2
var imgNum2 = 0;
var img2 = new Image();
var canvas2 = document.getElementById('screen1');
var ctx2 = canvas2.getContext('2d');
var scrollYPos;

img2.src = "./img/sequence/main (1).png";

window.addEventListener('scroll', function(e) {
    scrollYPos = Math.round(window.scrollY/18);
    
    // play once
    if (scrollYPos == 1) scrollYPos = 1;
    if (scrollYPos > 240) scrollYPos = 240;
    
    // play continuously
    scrollYPos = scrollYPos % 240;
    player2(scrollYPos);
})

function player2(num) {
    img2.src = "./img/sequence/main (" + num + ").png";
}

img2.addEventListener('load' ,function(e) {
    ctx2.clearRect(0, 0, ctx2.canvas.width, ctx2.canvas.height);
    ctx2.drawImage(img2, 0, 0);
});





