import {menuMaker} from "../menuMaker"

const pastaMenu = () =>{
    const wholeMenu = document.createElement('div')


    const menuTitle = document.createElement('h1')
    menuTitle.classList.add('menuTitle')
    menuTitle.textContent = "Pasta Menu"
    wholeMenu.appendChild(menuTitle)


    wholeMenu.appendChild(menuMaker("Carbonara", "30$"))
    wholeMenu.appendChild(menuMaker("Pane", "10$"))
    wholeMenu.appendChild(menuMaker("Squid Pasta", "50$"))
    return wholeMenu
}

export {pastaMenu}