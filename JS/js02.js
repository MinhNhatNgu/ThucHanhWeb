do {
    var checkMonth = Number(prompt("Nhập tháng"));
    if(checkMonth<1 || checkMonth>12) {
        alert("Tháng không hợp lệ!")
    }
} while(checkMonth<1 || checkMonth>12);
do {
    var checkYear = Number(prompt("Nhập năm",2000));
    if(checkYear<1) {
        alert("Năm không hợp lệ!")
    }
} while(checkYear<1);

function checkNamNhuan(checkYear) {
    return (checkYear%400 == 0) || (checkYear%4==0 && checkYear%100!=0);
}
function checkDate(checkMonth, checkYear) {
    switch(checkMonth) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: return 31;
        case 4:
        case 6:
        case 9:
        case 11: return 30;
        case 2: {
            if(checkNamNhuan(checkYear)) return 29
            return 28;
        }
        default: return 0;
    }
}
document.getElementById("check-date").innerHTML = `Tháng ${checkMonth} năm ${checkYear} có ${checkDate(checkMonth,checkYear)} ngày.`;

function handlerClock() {
    var date = new Date();
    var day = date.getDay() + 1;
    var datee = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    document.getElementById("date").innerHTML = `Hôm nay, ${day==0 ? "Chủ nhật " : "thứ " + day} ngày ${datee}/${month}/${year}.`;

    //clock
    setInterval(clock,1000);
}

function clock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    document.getElementById("clock").innerHTML = `${hours<10? '0' + hours : hours}:${minutes<10? '0' + minutes : minutes}:${seconds<10? '0' + seconds : seconds}`;
}