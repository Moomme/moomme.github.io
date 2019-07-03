function sayHi(){
    alert("Whaddup")
}


// // When the user scrolls the page, execute myFunction 
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

$(document).ready(function() {
    $("#hidden-navbar").hide(); //hide your div initially
    var topOfOthDiv = $("#navbar").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $("#hidden-navbar").show(200); //reached the desired point -- show div
        } else {
        	$("#hidden-navbar").hide(200);
        }
    });
});
