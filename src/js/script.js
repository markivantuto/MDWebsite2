function hamburgerMenu () {
    const elementClicked = document.querySelector("#hamburger_btn");
    const elementYouWantToShow = document.querySelector("#nav_links");
    
    elementClicked.addEventListener("click", ()=>{
      elementYouWantToShow.classList.toggle("show");
    });
}
hamburgerMenu();