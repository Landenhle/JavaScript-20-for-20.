    const menu =document.getElementById("menu");
    const closeMenu =document.getElementById("closeMenu");
    const links =document.querySelector(".links");


    menu.addEventListener("click", () => {
        links.classList.toggle("hidden");
        links.style.width = '300px'
    })
    closeMenu.addEventListener("click", () => {
        links.classList.toggle("hidden");
        links.style.width = '0px'
    })