var dx=5;
var dy=7;
var ballH;
var ballW;
var cd;

function ChuyenDong() {
    $(document).ready(function() {
        ballH = $(".ball").height();
        ballW = $(".ball").width();
        cd = setInterval(play,100);
    })
}

function Dung() {
    $(document).ready(function() {
        
        clearInterval(cd);
    })
}

function play() {
    var frameH = $(".right").height();
    var frameW = $(".right").width();
    ballX = parseInt($(".ball").css("left"));
    ballY = parseInt($(".ball").css("top"));
    if(ballX<0 || ballX+ballW>frameW) {
        dx = -dx;
    }
    if(ballY<0 || ballY+ballH>frameH) {
        dy = -dy;
    }

    $(".ball").css("left",ballX + dx + "px");
    $(".ball").css("top",ballY + dy + "px");
}

function changeType(value) {
    if(value=="no") {
        document.querySelector(".ball").style.backgroundColor = "red";
        document.querySelector(".ball").style.backgroundImage = "";
    } else {
        document.querySelector(".ball").style.backgroundImage = "url('hoa1.jpeg')";
    }
}

function changeImg(src) {
    var kt = document.querySelector("input[name='noneImg']").value;
    console.log(kt);
    if (kt == "no") {
        return false;
    } else { 
        document.querySelector(".ball").style.backgroundImage = `url('${src}')`;
    }
    
}

function changeColor(color) {
    document.querySelector(".ball").style.backgroundColor = color;
}