


(() => {

    const filterContainer = document.querySelector(".portfolio-filter");
    const portfolioItemsContainer = document.querySelector(".portfolio-items");
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    filterContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains("filter-item") && !event.target.classList.contains("active")) {

            filterContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            event.target.classList.add("outer-shadow", "active");
            const target = event.target.getAttribute("data-target");
            // console.log(target)
            portfolioItems.forEach((item) => {
                console.log(item.getAttribute("data-target"))
                if (target == item.getAttribute("data-target") || target == "all") {
                    item.classList.remove("hide");
                    item.classList.add("show");
                }
                else {
                    item.classList.add("hide");
                    item.classList.remove("show");
                }

            })

        }
      })
    
})();



// navigatino menu
    const hamburgerBtn = document.querySelector(".hamburger-btn");
    const navMenu = document.querySelector(".nav-manue");
    const closeNavBtn = navMenu.querySelector(".close-nav-menu");
    // const closeNav = navMenu.querySelectorAll('.manu li')
    // console.log(closeNav)
    hamburgerBtn.addEventListener("click",showNavMenu);
    closeNavBtn.addEventListener("click",hideNavMenu);
    // closeNav.addEventListener("click",hideNavMenu);
    
    function showNavMenu(){
        navMenu.classList.add("open");
    }
    function hideNavMenu(){
        console.log("colse")
        navMenu.classList.remove("open");
        fadeOutEffect()
    }
    function fadeOutEffect(){
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(()=>{
            document.querySelector(".fade-out-effect").classList.remove("active");
        },300)
    }
    document.addEventListener("click",(event1)=>{
        if(event1.target.classList.contains('link-item')){
            hideNavMenu();
        }
    })



