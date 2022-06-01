window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showHeaderOnSroll()
    enableBrowsingWithPageSize()
}

function showHeaderOnSroll() {
    if(scrollY > 0){
        navigation.classList.add('scroll')
    } else{
        navigation.classList.remove('scroll')
    }
}

function enableBrowsingWithPageSize(){
    const windowWidth = window.innerWidth
    const navigateButton = document.querySelector(".navigate")
    const navigateList = document.querySelector(".primary-menu")

    console.log(`Width: ${windowWidth}`)

    if (windowWidth <= 800){
        
        navigateList.style.display = "none"
        navigateButton.addEventListener("click", (event) => {
            if(navigateList.style.display == "none"){
                navigateList.style.display = "block"
            } else {
                navigateList.style.display = "none"
            }
        }) } 
            if(windowWidth > 800){
                navigateButton.parentNode.removeChild(navigateButton)
    }
}

$('.owl-carousel').owlCarousel({
    center: true,
    items:2,
    loop:true,
    nav:true,
    margin:5,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
});

