var currentColor;

function changeType() {
    var currentType = document.querySelector("#LoaiXe").value;
    if(currentType=="moto") {
        var arr = document.querySelectorAll(".left img");
        for(var i=0; i<4; i++) {
            var source = String(arr[i].src);
            source = source.substring(29);
            source = source.replace("car","moto");
            arr[i].src = source;
        }
        document.querySelector(".show-img").src = "moto-red.jpeg";
    } else {
        var arr = document.querySelectorAll(".left img");
        for(var i=0; i<4; i++) {
            var source = String(arr[i].src);
            source = source.substring(29);
            source = source.replace("moto","car");
            arr[i].src = source;
        }
        document.querySelector(".show-img").src = "car-red.jpeg";
    }        
}

function changeColor(color) {
    var currentType = document.querySelector("#LoaiXe").value;
    var makeLink = currentType + "-" + color + ".jpeg";
    document.querySelector(".show-img").src = makeLink;
    currentColor = color;
}

function showInfo() {
    var quantity = document.querySelector("#quantity").value;
    var currentType = document.querySelector("#LoaiXe").value;

    var type;
    if(currentType=="car") type="xe hơi"
    else type="xe máy"

    var color;
    if(currentColor=="red") color="đỏ"
    else if(currentColor=="blue") color="xanh"
    else if(currentColor=="yellow") color="vàng"
    else color="trắng"

    var str = `Bạn đặt mua ${quantity} ${type} màu ${color}`;
    document.querySelector(".show-info").innerHTML = str;
}