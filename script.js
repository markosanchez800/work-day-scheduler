var currentDate = moment();
var currentHour = moment().format("H");
var nineAM = document.getElementById("nineAM");
var tenAM = document.getElementById("tenAM");
var elevenAM = document.getElementById("elevenAM");
var twelvePM = document.getElementById("twelvePM");
var onePM = document.getElementById("onePM");
var twoPM = document.getElementById("twoPM");
var threePM = document.getElementById("threePM");
var fourPM = document.getElementById("fourPM");
var fivePM = document.getElementById("fivePM");
var saveButton = document.getElementById("saveBtn");
console.log(currentHour);

$("#currentDay").text(currentDate.format("LL"));


timeColorCode(currentHour);
function timeColorCode(currentHour){
    if (currentHour > 9){
        nineAM.setAttribute("class","col-sm-8 past");
    }
     else if (currentHour === 9){
        nineAM.setAttribute("class","col-sm-8 present");
    } else if (currentHour < 9){
        nineAM.setAttribute("class","col-sm-8 future");
    }
    if (currentHour > 10){
        tenAM.setAttribute("class","col-sm-8 past");
    }
     else if (currentHour === 10){
        tenAM.setAttribute("class","col-sm-8 present");
    } else if (currentHour < 10){
        tenAM.setAttribute("class","col-sm-8 future");
    }
    if (currentHour > 11){
        elevenAM.setAttribute("class","col-sm-8 past");
    }
     else if (currentHour === 11){
        elevenAM.setAttribute("class","col-sm-8 present");
    } else if (currentHour < 11){
        elevenAM.setAttribute("class","col-sm-8 future");
    }
    if (currentHour > 12){
        twelvePM.setAttribute("class","col-sm-8 past");
    }
     else if (currentHour === 12){
        twelvePM.setAttribute("class","col-sm-8 present");
    } else if (currentHour < 12){
        twelvePM.setAttribute("class","col-sm-8 future");
    }
    if (currentHour > 13){
        onePM.setAttribute("class","col-sm-8 past");
    }
     else if (currentHour === 13){
        onePM.setAttribute("class","col-sm-8 present");
    } else if (currentHour < 13){
        onePM.setAttribute("class","col-sm-8 future");
    }
    if (currentHour > 14){
        twoPM.setAttribute("class","col-sm-8 past");
    }
     else if (currentHour === 14){
        twoPM.setAttribute("class","col-sm-8 present");
    } else if (currentHour < 14){
        twoPM.setAttribute("class","col-sm-8 future");
    }
    if (currentHour > 15){
        threePM.setAttribute("class","col-sm-8 past");
    }
     else if (currentHour === 15){
        threePM.setAttribute("class","col-sm-8 present");
    } else if (currentHour < 15){
        threePM.setAttribute("class","col-sm-8 future");
    }
    if (currentHour > 16){
        fourPM.setAttribute("class","col-sm-8 past");
    }
     else if (currentHour === 16){
        fourPM.setAttribute("class","col-sm-8 present");
    } else if (currentHour < 16){
        fourPM.setAttribute("class","col-sm-8 future");
    }
    if (currentHour > 17){
        fivePM.setAttribute("class","col-sm-8 past");
    }
     else if (currentHour === 17){
        fivePM.setAttribute("class","col-sm-8 present");
    } else if (currentHour < 17){
        fivePM.setAttribute("class","col-sm-8 future");
    }
}


