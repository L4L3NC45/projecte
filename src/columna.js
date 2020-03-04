let toggleNavStatus = false;

document.getElementById("1").onclick = function(){
    let getSideBar = document.querySelector(".columna");
    let getSideBarContent = document.querySelector(".column-content");

    if (toggleNavStatus === false){
        getSideBar.style.width = "300px";
        getSideBarContent.style.opacity = "0.5";
        getSideBarContent.style.visibility = "visible";

        toggleNavStatus = true; 
    }

    else if (toggleNavStatus) {
        getSideBarContent.style.opacity = "0";
        getSideBar.style.width = "0px";
        getSideBarContent.style.visibility = "hidden";

        toggleNavStatus = false;
    }

}