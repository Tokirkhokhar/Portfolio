
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



