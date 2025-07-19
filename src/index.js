import './style.css'

import homePage from './welcomePage'
import menu  from './menuPage'
import info from './aboutUsPage'


const navButtons = document.getElementById("nav") 

function clear() 
{
    //console.log("pressed")

    //supposed to clear the #container
}

function homePages() {
    //homePage()
}

const handlers = {
    homePage: homePage, 
    menu: menu,
    info: info
};



navButtons.addEventListener("click", e => {
    clear()

    let button = e.target.id 
    
    const handler = handlers[button]

    if (handler)
    { 
        handler()
    } 

})

