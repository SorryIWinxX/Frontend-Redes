let toggleNavStatus = false;

let toggleNav = function(){
    let getSidebar = document.querySelector(".hamburger-menu");
    let getSidebarUl = document.querySelector(".hamburger-menu ul");
    let getSidebarLinks = document.querySelectorAll(".hamburger-menu a");

    if(toggleNavStatus === false){
        getSidebar.style.visibility = "visible";
        getSidebar.style.width =  "200px";
        getSidebar.style.border =  " 1px solid #fff";
        getSidebar.style.borderRadius =  "5px";
        

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++){
        getSidebarLinks[i].style.opacity = "1"
    }
    toggleNavStatus = true;
    } else if (toggleNavStatus === true){
        getSidebar.style.visibility = "hidden";
        

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++){
        getSidebarLinks[i].style.opacity = "0"
    }
    getSidebar.style.visibility = "hidden"
    toggleNavStatus = false;
    }
}
