let slideDiv = document.getElementById('sec3Slide');

document.getElementById('left').onclick = () => {
    slideChange("left");
}
document.getElementById('right').onclick = () => {
    slideChange("right");
}
let slideNum = 1;

let slide1 = document.getElementById('slide1');
let slide2 = document.getElementById('slide2');
let slide3 = document.getElementById('slide3');

document.getElementById('mobileLinks').innerHTML += "<li><a href='#'>Home</a></li>" + document.getElementById('links').innerHTML;

removeFlex();
slideChange();

// function to change the slides

function slideChange(direction) {

    if (window.innerWidth < 500) {

        if (direction == "left" && slideNum != 1) {
            slideNum -= 1;

        } else if (direction == "right" && slideNum != 3) {
            slideNum += 1;
        }
    } else if (window.innerWidth < 1100) {

        if (direction == "left" && slideNum != 1) {
            slideNum -= 1;

        } else if (direction == "right" && slideNum != 2) {
            slideNum += 1;
        }
    } else {
        slide3.style.display = "inline-block";
        slide2.style.display = "inline-block";
        slide1.style.display = "inline-block";
    }



    if (window.innerWidth < 500) {
        setCircles(slideNum);
        switch (slideNum) {
            case 1:
                slide1.style.display = "inline-block";
                slide2.style.display = "none";
                slide3.style.display = "none";
                break;
            case 2:
                slide2.style.display = "inline-block";
                slide1.style.display = "none";
                slide3.style.display = "none";
                break;
            case 3:
                slide3.style.display = "inline-block";
                slide2.style.display = "none";
                slide1.style.display = "none";
                break;

        }

    } else if (window.innerWidth < 1100) {

        switch (slideNum) {
            case 2:
                slide1.style.display = "none";
                slide2.style.display = "inline-block";
                slide3.style.display = "inline-block";
                circles.style.transform = "rotate(180deg)";
                break;
            case 1:
                slide3.style.display = "none";
                slide2.style.display = "inline-block";
                slide1.style.display = "inline-block";
                circles.style.transform = "rotate(0deg)";
                break;

        }
    }


}
setCircles(slideNum);

window.onresize = () => {
    removeFlex();
    setCircles(slideNum);
    slideChange();
}

//set the circles in the middle section to show slide number

function setCircles(num) {

    let circlesDiv = document.getElementById('cirlcesDiv');

    if (window.innerWidth < 1100 && window.innerWidth > 500) {
        circlesDiv.innerHTML = '<img id="circles" src="assets/cirles.svg">';
    } else if (window.innerWidth < 500) {
        switch (num) {
            case 1:
                circlesDiv.innerHTML = '<img id="circles" src="assets/circleOn.svg">';
                circlesDiv.innerHTML += '<img id="circles" src="assets/circleOff.svg">';
                circlesDiv.innerHTML += '<img id="circles" src="assets/circleOff.svg">';
                break;
            case 2:
                circlesDiv.innerHTML = '<img id="circles" src="assets/circleOff.svg">';
                circlesDiv.innerHTML += '<img id="circles" src="assets/circleOn.svg">';
                circlesDiv.innerHTML += '<img id="circles" src="assets/circleOff.svg">';
                break;
            case 3:
                circlesDiv.innerHTML = '<img id="circles" src="assets/circleOff.svg">';
                circlesDiv.innerHTML += '<img id="circles" src="assets/circleOff.svg">';
                circlesDiv.innerHTML += '<img id="circles" src="assets/circleOn.svg">';
                break;
        }
    }
}


function removeFlex() {
    if (window.innerWidth < 1100) {
        slideDiv.classList.remove('flexHoriz');
    } else if (!slideDiv.classList.contains('flexHoriz')) {
        slideDiv.classList.add('flexHoriz');
    }
}

//open and close links div for mobile

function showMobileLinks() {
    let linksDiv = document.getElementById('mobileLinks');

    let r = -300;
    let animate = setInterval(() => {
        r += 5;
        linksDiv.style.right = r + "px";
        if (r == 0) {
            clearInterval(animate);
        }
    }, 1);

    console.log(r);
}
function closeMobileLinks() {
    let linksDiv = document.getElementById('mobileLinks');

    let r = 0;
    let animate = setInterval(() => {
        r -= 5;
        linksDiv.style.right = r + "px";
        if (r == -300) {
            clearInterval(animate);
        }
    }, 1);

    console.log(r);
}

//some basic form validation

let submitButton = document.getElementById('submit');
let nameInput = document.getElementById('nameInput');
let emailInput = document.getElementById('emailInput');
let termsCheck = document.getElementById('checkbox');

nameInput.onchange = () => {
    validateForm();
}
emailInput.onchange = () => {
    validateForm();
}
termsCheck.onchange = () => {
    validateForm();
}

function validateForm() {

    let name = nameInput.value;
    let email = emailInput.value;
    let terms = termsCheck.checked;

    if (validateName(name) && validateEmail(email) && validateTerms(terms)) {
        submitButton.disabled = false;
        console.log('valid');
    } else {
        submitButton.disabled = true;
    }
}
function validateName(name) {

    if (name != "") {
        return true;
    }
}
function validateEmail(email) {

    if (email != "") {
        if (email.includes("@")) {
            return true;
        }
    }
}
function validateTerms(terms) {
    if (terms == "true" || terms == true) {
        return true;
    }
}