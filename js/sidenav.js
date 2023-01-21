
function openNav() {
    document.getElementById("mySidenav").style.width = "400px";

}/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
} 

document.getElementById("open_nav").addEventListener("click",(ev)=>{
    const navWidth = document.getElementById("mySidenav").style.width;
    switch(navWidth) {
        case "":
            openNav();
        case "0px":
            openNav();
            break;
        case "400px":
            closeNav();
            break;
    }
});

document.getElementById("ante_icon").addEventListener("click",(ev)=>{
    const navWidth = document.getElementById("mySidenav").style.width;
    switch(navWidth) {
        case "":
            openNav();
        case "0px":
            openNav();
            break;
        case "400px":
            closeNav();
            break;
    }
});


document.getElementById("open_nav").addEventListener("mouseover",(ev)=>{
    console.log("Mouse encima")
    ev.currentTarget.style.cursor = "pointer";
});
document.getElementById("ante_icon").addEventListener("mouseover",(ev)=>{
    console.log("Mouse encima")
    ev.currentTarget.style.cursor = "pointer";
});