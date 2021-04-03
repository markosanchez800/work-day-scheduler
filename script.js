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
var saveyNine = $('#saveyNine');
var saveyTen = $('#saveyTen');
var saveyEleven = $('#saveyEleven');
var saveyTwelve = $('#saveyTwelve');
var saveyOne = $('#saveyOne');
var saveyTwo = $('#saveyTwo');
var saveyThree = $('#saveyThree');
var saveyFour = $('#saveyFour');
var saveyFive = $('#saveyFive');
var storedNine = localStorage.getItem("firstTask");
var storedTen = localStorage.getItem("secondTask");
var storedEleven = localStorage.getItem("thirdTask");
var storedTwelve = localStorage.getItem("fourthTask");
var storedOne = localStorage.getItem("fifthTask");
var storedTwo = localStorage.getItem("sixthTask");
var storedThree = localStorage.getItem("seventhTask");
var storedFour = localStorage.getItem("eigthTask");
var storedFive = localStorage.getItem("ninthTask");

console.log(currentHour);

$("#currentDay").text(currentDate.format("LL"));


renderTasks();

timeColorCode(currentHour);
function timeColorCode(currentHour){
    if (currentHour > 9){
        nineAM.setAttribute("class","col-sm-8 past");
    }
     else if (currentHour == 9){
        nineAM.setAttribute("class","col-sm-8 present");
    } else if (currentHour < 9){
        nineAM.setAttribute("class","col-sm-8 future");
    }
    if (currentHour > 10){
        tenAM.setAttribute("class","col-sm-8 past");
    }
     else if (currentHour == 10){
        tenAM.setAttribute("class","col-sm-8 present");
    } else if (currentHour < 10){
        tenAM.setAttribute("class","col-sm-8 future");
    }
    if (currentHour > 11){
        elevenAM.setAttribute("class","col-sm-8 past");
    }
     else if (currentHour == 11){
        elevenAM.setAttribute("class","col-sm-8 present");
    } else if (currentHour < 11){
        elevenAM.setAttribute("class","col-sm-8 future");
    }
    if (currentHour > 12){
        twelvePM.setAttribute("class","col-sm-8 past");
    }
     else if (currentHour == 12){
        twelvePM.setAttribute("class","col-sm-8 present");
    } else if (currentHour < 12){
        twelvePM.setAttribute("class","col-sm-8 future");
    }
    if (currentHour > 13){
        onePM.setAttribute("class","col-sm-8 past");
    }
     else if (currentHour == 13){
        onePM.setAttribute("class","col-sm-8 present");
    } else if (currentHour < 13){
        onePM.setAttribute("class","col-sm-8 future");
    }
    if (currentHour > 14){
        twoPM.setAttribute("class","col-sm-8 past");
    }
     else if (currentHour == 14){
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
     else if (currentHour == 16){
        fourPM.setAttribute("class","col-sm-8 present");
    } else if (currentHour < 16){
        fourPM.setAttribute("class","col-sm-8 future");
    }
    if (currentHour > 17){
        fivePM.setAttribute("class","col-sm-8 past");
    }
     else if (currentHour == 17){
        fivePM.setAttribute("class","col-sm-8 present");
    } else if (currentHour < 17){
        fivePM.setAttribute("class","col-sm-8 future");
    }
}

saveyNine.on('click', function(event){
    localStorage.setItem("firstTask",JSON.stringify(nineAM.value));
})

saveyTen.on('click', function(event){
    localStorage.setItem("secondTask",JSON.stringify(tenAM.value));
})

saveyEleven.on('click', function(event){
    localStorage.setItem("thirdTask",JSON.stringify(elevenAM.value));
})

saveyTwelve.on('click', function(event){
    localStorage.setItem("fourthTask",JSON.stringify(twelvePM.value));
})

saveyOne.on('click', function(event){
    localStorage.setItem("fifthTask",JSON.stringify(onePM.value));
})

saveyTwo.on('click', function(event){
    localStorage.setItem("sixthTask",JSON.stringify(twoPM.value));
})

saveyThree.on('click', function(event){
    localStorage.setItem("seventhTask",JSON.stringify(threePM.value));
})

saveyFour.on('click', function(event){
    localStorage.setItem("eigthTask",JSON.stringify(fourPM.value));
})

saveyFive.on('click', function(event){
    localStorage.setItem("ninthTask",JSON.stringify(fivePM.value));
})

function renderTasks(){
    nineAM.value = storedNine;
    tenAM.value = storedTen;
    elevenAM.value = storedEleven;
    twelvePM.value = storedTwelve;
    onePM.value = storedOne;
    twoPM.value = storedTwo;
    threePM.value = storedThree;
    fourPM.value = storedFour;
    fivePM.value = storedFive;
}