// Sequence 1
var imgNum = 0;
var img = new Image();
var canvas = document.getElementById('js_main');
var ctx = canvas.getContext('2d');

img.src = "./img/main/main (1).jpg";

playSequence();

function playSequence() {
    var timer = setInterval(function() {
        if (imgNum > 499) {
            imgNum = 1;
        }
        
        player(imgNum);
        imgNum++;
    }, 28);
}

function player(num) {
    img.src = "./img/main/main (" + num + ").jpg";
}

img.addEventListener('load' ,function(e) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(img, 0, 0);
});

/////////// main_text3 ////////////

var imgNum3 = 0;
var img3 = new Image();
var canvas3 = document.getElementById('main_text');
var ctx3 = canvas3.getContext('2d');

img3.src = "./img/main_text/main_text (1).png";

playSequence2();

function playSequence2() {
    var timer3 = setInterval(function() {
        if (imgNum3 > 90) {
            imgNum3 = 91;
        }
        
        player3(imgNum3);
        imgNum3++;
    }, 30);
}

function player3(num) {
    img3.src = "./img/main_text/main_text (" + num + ").png";
}

img3.addEventListener('load' ,function(e) {
    ctx3.clearRect(0, 0, ctx3.canvas.width, ctx3.canvas.height);
    ctx3.drawImage(img3, 0, 0);
});

////////// page5_2 //////////

var imgNum2 = 0;
var img2 = new Image();
var canvas2 = document.getElementById('page5');
var ctx2 = canvas2.getContext('2d');
var scrollYPos;

img2.src = "./img/page5/page5 (1).jpg";

window.addEventListener('scroll', function(e) {
    scrollYPos = Math.round((window.scrollY/20)-190);
    
    // play once
    if (scrollYPos == 1) scrollYPos = 1;
    if (scrollYPos > 100) scrollYPos = 100;
    
    // play continuously
    scrollYPos = scrollYPos % 100;
    
    player2(scrollYPos);
})

function player2(num) {
    img2.src = "./img/page5/page5 (" + num + ").jpg";
}

img2.addEventListener('load' ,function(e) {
    ctx2.clearRect(0, 0, ctx2.canvas.width, ctx2.canvas.height);
    ctx2.drawImage(img2, 0, 0);
});

/*
// Sequence 2
var imgNum2 = 0;
var img2 = new Image();
var canvas2 = document.getElementById('screen2');
var ctx2 = canvas2.getContext('2d');
var scrollYPos;

img2.src = "./images/text/0.jpg";

window.addEventListener('scroll', function(e) {
    scrollYPos = Math.round(window.scrollY/20);
    
    // play once
//    if (scrollYPos == 0) scrollYPos = 0;
//    if (scrollYPos > 63) scrollYPos = 63;
    
    // play continuously
    scrollYPos = scrollYPos % 63;
    player2(scrollYPos);
})

function player2(num) {
    img2.src = "./images/text/" + num + ".jpg";
}

img2.addEventListener('load' ,function(e) {
    ctx2.clearRect(0, 0, ctx2.canvas.width, ctx2.canvas.height);
    ctx2.drawImage(img2, 0, 0);
});
*/











