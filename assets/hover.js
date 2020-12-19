src="https://code.jquery.com/jquery-3.2.1.min.js"

$(document).ready(function() {
    $("nav li").hover(function() { 
        $(this).find("dropdown").slideToggle("slow"); 
     });
});