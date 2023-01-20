
function openNav() {
    document.getElementById("mySidenav").style.width = "400px";

}/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
} 


document.getElementById("open-nav").addEventListener("mouseover",(ev)=>{
    console.log("Mouse encima")
    ev.currentTarget.style.cursor = "pointer";
});
document.getElementById("ante_icon").addEventListener("mouseover",(ev)=>{
    console.log("Mouse encima")
    ev.currentTarget.style.cursor = "pointer";
});