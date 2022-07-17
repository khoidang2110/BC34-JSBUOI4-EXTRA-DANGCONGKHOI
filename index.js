//Bai tap 5:
document.getElementById("showDay").onclick = function () {
  //input
  var day = document.getElementById("day").value * 1;
  var month = document.getElementById("month").value * 1;
  var year = document.getElementById("year").value * 1;
  //process
  var yesterday = "";
  var tomorrow = "";
  if (month == 2 && day == 28) {
    yesterday = day - 1 + "/" + (month - 1) + "/" + year;
    tomorrow = (day = 1) + "/" + (month + 1) + "/" + year;
  } else if (month == 2 && day <= 28) {
    yesterday = day - 1 + "/" + month + "/" + year;
    tomorrow = day + 1 + "/" + month + "/" + year;
  } else if (month == 12 && day == 31) {
    yesterday = day - 1 + "/" + month + "/" + year;
    tomorrow = 1 + "/" + 1 + "/" + (year + 1);
  } else if (month == 1 && day == 1) {
    yesterday = (day = 31) + "/" + (month = 12) + "/" + (year - 1);
    tomorrow = 2 + "/" + 1 + "/" + year;
  } else if (
    day == 30 &&
    (month == 4 || month == 6 || month == 9 || month == 11)
  ) {
    yesterday = day - 1 + "/" + month + "/" + year;
    tomorrow = 1 + "/" + (month + 1) + "/" + year;
  } else if (
    day == 31 &&
    (month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10 ||
      month == 12)
  ) {
    yesterday = day - 1 + "/" + month + "/" + year;
    tomorrow = 1 + "/" + (month + 1) + "/" + year;
  } else {
    yesterday = day - 1 + "/" + month + "/" + year;
    tomorrow = day + 1 + "/" + month + "/" + year;
  }

  //output
  document.getElementById("yesterday").innerHTML =
    "<p>Ngày hôm qua là " + yesterday + "</p>";
  document.getElementById("tomorrow").innerHTML =
    "<p>Ngày mai là " + tomorrow + "</p>";
};

//Bai tap 6:
document.getElementById("totalDay").onclick = function () {
  //input:
  var month1 = document.getElementById("month1").value * 1;
  var year1 = document.getElementById("year1").value * 1;
  var showTotalDay = 0;
  //process:
  if (
    (year1 % 400 == 0 || (year1 % 4 == 0 && year1 % 100 >= 1)) &&
    month1 == 2
  ) {
    showTotalDay += 29;
  } else if (month1 == 4 || month1 == 6 || month1 == 9 || month1 == 11) {
    showTotalDay += 30;
  } else if (
    month1 == 1 ||
    month1 == 3 ||
    month1 == 5 ||
    month1 == 7 ||
    month1 == 8 ||
    month1 == 10 ||
    month1 == 12
  ) {
    showTotalDay += 31;
  } else {
    showTotalDay += 28;
  }
  //output:
  document.getElementById("showTotalDay").innerHTML =
    "<p>Tháng " +
    month1 +
    " năm " +
    year1 +
    " có " +
    showTotalDay +
    " ngày</p>";
};
//Bai tap 7:
document.getElementById("read").onclick = function () {
  //input
  var numxyz = document.getElementById("numxyz").value * 1;

  //process
  var read = "";
  var numx = 0;
  var numy = 0;
  var numz = 0;
  var readx = "";
  var ready = "";
  var readz = "";

  if (numxyz == 11) {
    read = "mười một";
  } else if (numxyz < 10) {
    numz = numxyz;
    switch (numz) {
      case 1:
        readz = "một";
        break;
      case 2:
        readz = "hai";
        break;
      case 3:
        readz = "ba";
        break;
      case 4:
        readz = "bốn";
        break;
      case 5:
        readz = "năm";
        break;
      case 6:
        readz = "sáu";
        break;
      case 7:
        readz = "bảy";
        break;
      case 8:
        readz = "tám";
        break;
      case 9:
        readz = "chín";
        break;
    }
    read = readz;
  } else if (numxyz < 100) {
    numy += Math.floor(numxyz / 10);
    numz = numxyz % 10;
    switch (numy) {
      case 1:
        ready = "mười";
        break;
      case 2:
        ready = "hai mươi";
        break;
      case 3:
        ready = "ba mươi";
        break;
      case 4:
        ready = "bốn mươi";
        break;
      case 5:
        ready = "năm mươi";
        break;
      case 6:
        ready = "sáu mươi";
        break;
      case 7:
        ready = "bảy mươi";
        break;
      case 8:
        ready = "tám mươi";
        break;
      case 9:
        ready = "chín mươi";
        break;
    }

    switch (numz) {
      case 1:
        readz = "mốt";
        break;
      case 2:
        readz = "hai";
        break;
      case 3:
        readz = "ba";
        break;
      case 4:
        readz = "bốn";
        break;
      case 5:
        readz = "lăm";
        break;
      case 6:
        readz = "sáu";
        break;
      case 7:
        readz = "bảy";
        break;
      case 8:
        readz = "tám";
        break;
      case 9:
        readz = "chín";
        break;
    }

    read = ready + " " + readz;
  } else if (numxyz < 1000) {
    numy += Math.floor(numxyz / 10) % 10;
    numz = numxyz % 10;
    numx += Math.floor(numxyz / 100);
    switch (numz) {
      case 1:
        readz = "mốt";
        break;
      case 2:
        readz = "hai";
        break;
      case 3:
        readz = "ba";
        break;
      case 4:
        readz = "bốn";
        break;
      case 5:
        readz = "lăm";
        break;
      case 6:
        readz = "sáu";
        break;
      case 7:
        readz = "bảy";
        break;
      case 8:
        readz = "tám";
        break;
      case 9:
        readz = "chín";
        break;
    }
    switch (numy) {
      case 1:
        ready = "mười";
        break;
      case 2:
        ready = "hai mươi";
        break;
      case 3:
        ready = "ba mươi";
        break;
      case 4:
        ready = "bốn mươi";
        break;
      case 5:
        ready = "năm mươi";
        break;
      case 6:
        ready = "sáu mươi";
        break;
      case 7:
        ready = "bảy mươi";
        break;
      case 8:
        ready = "tám mươi";
        break;
      case 9:
        ready = "chín mươi";
        break;
    }
    switch (numx) {
      case 1:
        readx = "một trăm";
        break;
      case 2:
        readx = "hai trăm";
        break;
      case 3:
        readx = "ba trăm";
        break;
      case 4:
        readx = "bốn trăm";
        break;
      case 5:
        readx = "năm trăm";
        break;
      case 6:
        readx = "sáu trăm";
        break;
      case 7:
        readx = "bảy trăm";
        break;
      case 8:
        readx = "tám trăm";
        break;
      case 9:
        readx = "chín trăm";
        break;
    }
    read = readx + " " + ready + " " + readz;
  } else {
    alert("Chỉ nhập tối đa ba chữ số!!!");
  }

  //output
  document.getElementById("readNumber").innerHTML = read;
};

//Bài tập 8
document.getElementById("search").onclick = function () {
  //input
  var x1 = document.getElementById("x1").value*1;
  var x2 = document.getElementById("x2").value*1;
  var x3 = document.getElementById("x3").value*1;
  var x4 = document.getElementById("x4").value*1;

  var y1 = document.getElementById("x1").value*1;
  var y2 = document.getElementById("x2").value*1;
  var y3 = document.getElementById("x3").value*1;
  var y4 = document.getElementById("x4").value*1;

  var name1 = document.getElementById("name1").value;
  var name2 = document.getElementById("name2").value;
  var name3 = document.getElementById("name3").value;
  //process
var xy41= 0;
var xy42=0;
var xy43=0;
var show='';
xy41+=Math.sqrt(Math.pow(x4-x1,2)+Math.pow(y4-y1,2));
xy42+=Math.sqrt(Math.pow(x4-x2,2)+Math.pow(y4-y2,2));
xy43+=Math.sqrt(Math.pow(x4-x3,2)+Math.pow(y4-y3,2));
if(xy41>xy42&&xy41>xy43){
  show+=name1;
}else if(xy42>xy41&&xy42>xy43){
  show+=name2;
}else {
  show+=name3;
}

  //output
  document.getElementById("showSearch").innerHTML = "<p>Sinh viên xa trường nhất :" +show;
};
