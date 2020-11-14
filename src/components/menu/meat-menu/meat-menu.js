import {menuMaker} from "../menuMaker"

const meatMenu = () =>{
    const wholeMenu = document.createElement('div')


    const menuTitle = document.createElement('h1')
    menuTitle.classList.add('menuTitle')
    menuTitle.textContent = "Meat Menu"
    wholeMenu.appendChild(menuTitle)


    wholeMenu.appendChild(menuMaker("Gordon Steak", "15$"))
    wholeMenu.appendChild(menuMaker("Ribeye", "10$"))
    wholeMenu.appendChild(menuMaker("Porkchop", "30$"))
    wholeMenu.appendChild(menuMaker("Black Angus", "60$"))
    return wholeMenu
}

export {meatMenu}