document.querySelectorAll(".enlace").forEach(link => {
    link.addEventListener("click",(ev)=>{
        const clickedLink = ev.currentTarget;

        document.querySelectorAll(".popupContent").forEach(popup =>{
            popup.classList.add("d-none");

            if(clickedLink.id == popup.id) {
                popup.classList.remove("d-none");
            }
        });
    })
});