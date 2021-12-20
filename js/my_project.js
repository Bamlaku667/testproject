
var nav_links = document.querySelector('#nav-links')
var see_more_btn = document.querySelector('#see-more-btn')
var see_more_content = document.querySelector('#see-more-content');
var isSeeMoreDisplay;
var isMenuDisplay ;
var window_width = window.innerWidth;
var menu = document.querySelector("#open_menu")

console.log(window_width)
menu.addEventListener('click', display_menu)

if (window_width > 700) {
   
    nav_links.style.display = "flex";
    isMenuDisplay = false;
    console.log("hellow")
}


function display_menu() {
   if (isMenuDisplay == true) {
       nav_links.style.display = "flex";
       return isMenuDisplay = false;
   }
   else {
       nav_links.style.display = "none"
       return isMenuDisplay = true;
   }
}


function show_see_more() {
    if(isSeeMoreDisplay == true) {
        see_more_content.style.display = "grid";
        return isSeeMoreDisplay = false;
    }
    else {
        see_more_content.style.display = "none";
        return isSeeMoreDisplay = true;
    }

}


