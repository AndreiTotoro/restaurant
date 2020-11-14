import "./navbar.css"
import {content} from "../page-load/page-load"
import { menu } from "../menu/menu"

const navbar = () =>{
    const navbar = document.createElement('div')
    navbar.classList.add("navbar")
    content.appendChild(navbar)

    const logo = document.createElement('h1')
    logo.textContent = "Andrew's Restaurant"
    navbar.appendChild(logo)

    const li = document.createElement('li')
    navbar.appendChild(li)

    const homeUl = document.createElement('a')
    homeUl.href = "#navbarSection"
    homeUl.textContent = "Home"
    homeUl.classList.add("current", "links")
    li.appendChild(homeUl)

    const menuUl = document.createElement('a')
    menuUl.href = "#menuSection"
    menuUl.textContent = "Menu"
    menuUl.classList.add("links")
    li.appendChild(menuUl)

    const aboutUl = document.createElement('a')
    aboutUl.href = "#aboutSection"
    aboutUl.textContent = "About"
    aboutUl.classList.add("links")
    li.appendChild(aboutUl)
}

export {navbar}