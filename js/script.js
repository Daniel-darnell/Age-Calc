$(document).ready(function () {
    $("#dev-img").click(function () {
        $("#dev-img").toggle();
        $("#development").toggle();
    });
    $("#development").click(function () {
        $("#development").slideUp("1000");
        $("#dev-img").fadeIn("1000");
    });
});

$(document).ready(function () {
    $("#design-img").click(function () {
        $("#design-img").toggle();
        $("#design").toggle();
    });
    $("#design").click(function () {
        $("#design").slideUp("1000");
        $("#design-img").fadeIn("1000");
    });
})

$(document).ready(function () {
    $("#product-img").click(function () {
        $("#product-img").toggle();
        $("#product").toggle();
    });
    $("#product").click(function () {
        $("#product").slideUp("1000");
        $("#product-img").fadeIn("1000");
    });
});
