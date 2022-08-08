// 1. Box Appear/Disappear----------------------

function boxDisappear(){
    let box = $("#square-remove");
    box.animate({
        opacity: '0',
    }, 100)
}

function boxAppear(){
    let box = $("#square-remove");
    box.animate({
        opacity: '1',
    }, 100)
}

$("#invisibility").click(function(){
    boxDisappear();
})

$("#invisibility").dblclick(function(){
    boxAppear();
})

// 2. Box Manipulation------------------------

$(".plotis").click(function(){
    $(".changing-square").animate({
        width: '20%',
    })
})

$(".aukstis").click(function(){
    $(".changing-square").animate({
        height: '50%',
    })
})

$(".centravimas").click(function(){
    $(".inner-block2")
    .css({
        alignItems: "center",
    })
})

$(".pozicija").click(function(){
    $(".changing-square")
    .css({
        left: "938px",
        top: "0px",
    })
})


$(".reset").click(function(){
    $(".changing-square")
    .css({
        width: "100px",
        height: "100px",
        left: "0px",
        top: "100px",
    });
})

$(".reset").click(function(){
    $(".inner-block2").css({
        alignItems: "flex-end",
    })
})

// 4. Hex Color Generator

const colors = document.querySelectorAll('.color-box');

function generateColors(){
    colors.forEach((color) => {
        let hexcode = '#' +  Math.random().toString(16).substring(2,8);
        color.style.backgroundColor = hexcode;
        color.innerHTML = hexcode;
    })
}

generateColors();


// 5. Forma and Table


let row = 1;

function displayDetails(){
    let firstName = document.getElementById("name").value;
    let lastName = document.getElementById("last-name").value;
    let birthYear = document.getElementById("birth-year").value;

    let table = document.getElementById("show-table");
    table.style.display = "block";

    let newPerson = table.insertRow(row);

    const d = new Date();
    let year = d.getFullYear();
    let age = year - birthYear;

    let cell1 = newPerson.insertCell(0);
    let cell2 = newPerson.insertCell(1);
    let cell3 = newPerson.insertCell(2);
    let cell4 = newPerson.insertCell(3);

    cell1.innerHTML = row;
    cell2.innerHTML = firstName;
    cell3.innerHTML = lastName;
    cell4.innerHTML = age;

    row++;
}

$("#reset-form").click(function(){
    $("#show-table").empty();
})

// 6. Burger Menu------------------------------------------

$(".burger").click(function(){
    $(".navigation-bar").toggleClass("show");
})















