function printPage() {
    window.print();
}

$(document).ready(function() {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    // Show or hide the sticky footer button
    // $(window).scroll(function() {
    $('html, body').on('scroll', function () {
        console.log("scrolling");
        // console.log("scrollTop: ", $(this).scrollTop());
        // console.log("h: ", h);
        if ($(this).scrollTop() > 200) {
            // console.log("IF");
            $('.go-top').fadeIn(400);


        } else {
            // console.log("ELSE");
            $('.go-top').fadeOut(400);
        }
    });
    
    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({scrollTop: 0}, 300);
    })
});