import {menuMaker} from "../menuMaker"

const fishMenu = () =>{
    const wholeMenu = document.createElement('div')


    const menuTitle = document.createElement('h1')
    menuTitle.classList.add('menuTitle')
    menuTitle.textContent = "Fish Menu"
    wholeMenu.appendChild(menuTitle)


    wholeMenu.appendChild(menuMaker("Salmon", "30$"))
    wholeMenu.appendChild(menuMaker("Big Expensive Fish", "60$"))
    wholeMenu.appendChild(menuMaker("Tuna", "1$"))
    return wholeMenu
}

export {fishMenu}