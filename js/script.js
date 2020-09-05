// Akan Names 


function getInput() {
    century = parseInt(document.getElementById)("century").value;
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    dayOfTheMonth = parseInt(document.getElementById("date").value);

    if (century < 19 || century > 20) {
        alert("Invalid Century Input")

    }
    else if (dayOfTheMonth < 1 || dayOfTheMonth > 32) {
        alert("Invalid Date Input")

    }
    else if (monrh < 1 || month > 12) {
        alert("Invalid Month Input")

    }
    else if (year < 1910 || year > 2020) {
        alert("Invalid Year Input")
    }

}

// function that gets the current year
// function getYear() {
//     var d = new Date();
//     var n = d.getFullYear();
//     document.getElementById("year").innerHTML = n ;   
// }

// function with the formula that calculates the days, month and Year 
function calculateDay() {
    getInput();
    dayOfTheWeek = ((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + dayOfTheMonth) % 7) - 1;
    return (Math.floor(dayOfTheWeek));
}
console.log(calculateDay);



//a function that checks the akan name of the day with the help of the above function
function output() {
    day = calculateDay();
    checkGender();
}


let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let boysNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let girlsNames = [ "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


//the function that checks the gender
function checkGender() {
    var gen = document.getElementsByName("genders");
    if (gen[0].checked == true) {
        var gender = "male";
    }
    else if (gen[1].checked == true) {
        var gender = "female";
    }
}


switch (gender) {
    case gender = "male":
        switch (day) {
            case 0 || -0:
                document.getElementById("generate").innerHTML = "Born on Sunday." + "" + "Your Akan name is" + boysNames[0];
                break;
            case 1 || -1:
                document.getElementById("generate").innerHTML = "Born on Monday." + "" + "Your Akan Name is" + boysNames[1];
                break;
            case 2 || -2:
                document.getElementById("generate").innerHTML = "Born on Tuesday." + "" + "Your Akan Name is" + boysNames[2];
                break;
            case 3 || -3:
                document.getElementById("generate").innerHTML = "Born on Wednesday." + "" + "Your Akan Name is" + boysNames[3]
                break;
            case 4 || -4:
                document.getElementById("generate").innerHTML = "Born on Thursday." + "" + "Your Akan Name is" + boysNames[4]
                break;
            case 5 || -5:
                document.getElementById("generator").innerHTML = "Born on Friday." + "" + "Your AKan Name is" + boysNames[5]
                break;
            case 6 || -6:
                document.getElementById("generate").innerHTML = "Born on Saturday." + "" + "Your Akan Name is" + boysNames [6]
                break;
            default:

        }
        break;
        switch (day) {
            case 0 || -0:
                document.getElementById("generate").innerHTML = "Born on Sunday." + "" + "Your Akan name is" + girlsNames[0];
                break;
            case 1 || -1:
                document.getElementById("generate").innerHTML = "Born on Monday." + "" + "Your Akan Name is" + girlsNames[1];
                break;
            case 2 || -2:
                document.getElementById("generate").innerHTML = "Born on Tuesday." + "" + "Your Akan Name is" + girlsNames[2];
                break;
            case 3 || -3:
                document.getElementById("generate").innerHTML = "Born on Wednesday." + "" + "Your Akan Name is" + girlsNames[3]
                break;
            case 4 || -4:
                document.getElementById("generate").innerHTML = "Born on Thursday." + "" + "Your Akan Name is" + girlsNames[4]
                break;
            case 5 || -5:
                document.getElementById("generator").innerHTML = "Born on Friday." + "" + "Your AKan Name is" + girlsNames[5]
                break;
            case 6 || -6:
                document.getElementById("generate").innerHTML = "Born on Saturday." + "" + "Your Akan Name is" + girlsNames [6]
                break;
            default:
                                       
        }
}