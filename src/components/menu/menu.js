import {content} from "../page-load/page-load"
import {meatMenu} from "./meat-menu/meat-menu"
import {pastaMenu} from "./pasta-menu/pasta-menu"
import {fishMenu} from "./fish-menu/fish-menu"
import './menu.css'


const menu = () => {

    const meatM = meatMenu()
    const pastaM = pastaMenu()
    const fishM = fishMenu()

    let currentMenu = meatM
    let previousMenu = meatM

    const menuSection = document.createElement('div')
    menuSection.classList.add('menuSection')
    menuSection.setAttribute('id', 'menuSection')
    content.appendChild(menuSection)

    const menuSectionTitle = document.createElement('h1')
    menuSectionTitle.textContent = "Take a look at our menu!"
    menuSectionTitle.classList.add('menuSectionTitle')
    menuSection.appendChild(menuSectionTitle)

    const menuCard = document.createElement('div')
    menuCard.classList.add('menuCard')
    menuSection.appendChild(menuCard)

    const meatMenuButton = document.createElement('button')
    const fishMenuButton = document.createElement('button')
    const pastaMenuButton = document.createElement('button')
    const menuButtons = document.createElement('div')

    fishMenuButton.addEventListener('click', ()=>{
        if (fishMenuButton.classList.contains("currentButton") == false){
            currentMenu = fishM
            fishMenuButton.classList.add('currentButton')
            meatMenuButton.classList.remove('currentButton')
            pastaMenuButton.classList.remove('currentButton')
            menuCard.removeChild(previousMenu)
            previousMenu = currentMenu
            menuCard.appendChild(currentMenu)
            
        }
    })

    meatMenuButton.addEventListener('click', ()=>{
        if (meatMenuButton.classList.contains("currentButton") == false){
            currentMenu = meatM
            pastaMenuButton.classList.remove('currentButton')
            fishMenuButton.classList.remove('currentButton')
            meatMenuButton.classList.add('currentButton')
            menuCard.removeChild(previousMenu)
            previousMenu = currentMenu
            menuCard.appendChild(currentMenu)
            

            
        }
    })

    pastaMenuButton.addEventListener('click', ()=>{
        if (pastaMenuButton.classList.contains("currentButton") == false){
            currentMenu = pastaM
            meatMenuButton.classList.remove('currentButton')
            fishMenuButton.classList.remove('currentButton')
            pastaMenuButton.classList.add('currentButton')
            menuCard.removeChild(previousMenu)
            previousMenu = currentMenu
            menuCard.appendChild(currentMenu)
            
           
        }
    })

    meatMenuButton.classList.add('menuButton')
    fishMenuButton.classList.add('menuButton')
    pastaMenuButton.classList.add('menuButton')
    menuButtons.classList.add('menuButtons')

    meatMenuButton.classList.add('currentButton')

    meatMenuButton.textContent = "Meat Menu"
    fishMenuButton.textContent = "Fish Menu"
    pastaMenuButton.textContent = "Pasta Menu"

    
    menuCard.appendChild(menuButtons)
    menuButtons.appendChild(meatMenuButton)
    menuButtons.appendChild(fishMenuButton)
    menuButtons.appendChild(pastaMenuButton)


    menuCard.appendChild(meatM)

}

export {menu}