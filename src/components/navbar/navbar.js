import "./navbar.css"
import {content} from "../page-load/page-load"

const navbar = () =>{
    const navbar = document.createElement('div')
    navbar.classList.add("navbar")
    content.appendChild(navbar)

    const logo = document.createElement('h1')
    logo.textContent = "Andrew's Restaurant"
    navbar.appendChild(logo)

    const li = document.createElement('li')
    navbar.appendChild(li)

    const homeUl = document.createElement('ul')
    homeUl.textContent = "Home"
    homeUl.classList.add("current")
    li.appendChild(homeUl)

    const menuUl = document.createElement('ul')
    menuUl.textContent = "Menu"
    li.appendChild(menuUl)

    const contactUl = document.createElement('ul')
    contactUl.textContent = "Contact"
    li.appendChild(contactUl)
}

export {navbar}