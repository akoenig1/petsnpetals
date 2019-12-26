$(document).ready(function() {
    
    var scrolllink = $('.scroll');

    // Smooth scrolling
    scrolllink.click(function(e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 700);
    });

    // Sticky navbar
    // When the user scrolls the page, execute my function
    window.onscroll = function() {myFunction()};

    // Get the navbar
    var navbar = document.getElementById("navbar");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove sticky when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    };

    // Highlight active section in navbar
    // Cache selectors
    var lastId,
        topMenu = $("#navbar"),
        topMenuHeight = topMenu.outerHeight()+40,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu itmes
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) {return item}; 
        });

    // Bind to scroll
    $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+topMenuHeight;
        // Get ID of current scroll item
        var cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the ID of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems  
                .removeClass("active")
                .filter("[href='#"+id+"']").addClass("active");
        }
    });


});