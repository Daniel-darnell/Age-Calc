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
        alert{"Invalid Year Input"}
    }

}