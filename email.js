const composeButton= document.querySelector('.pen')
const composeButton2=document.querySelector('.compose-btn')
const container= document.querySelector('.container')
const topItems=document.querySelector('.topper')


container.addEventListener("scroll", function(){

    if (container.scrollTop>30){
     composeButton.classList.remove('pen')
    composeButton2.classList.add('pen')
} else if( container.scrollTop<30){
    composeButton.classList.add('pen')
    composeButton2.classList.remove('pen')
    topItems.style
}
})
