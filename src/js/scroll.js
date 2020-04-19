var about = document.querySelector("#about");

scrollOffsetPx = 100;

document.onscroll = function(e) {
    var scrollFromBreakpoint = document.querySelector(".user-details").getBoundingClientRect().y;
    
    if (scrollFromBreakpoint + scrollOffsetPx < 0) {
        about.classList.remove("first");
        about.classList.add("second");
    }
    else {
        about.classList.remove("second");
        about.classList.add("first");
    }
};