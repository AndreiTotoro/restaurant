import "./footer.css"
import {content} from "../page-load/page-load"

const footer = () =>{
    const footerSection = document.createElement('div')
    footerSection.classList.add("footerSection")
    content.appendChild(footerSection)

    const footerDescription = document.createElement('h1')
    footerSection.textContent = "Made with ❤️ by "
    footerSection.appendChild(footerDescription)

    const footerLink = document.createElement('a')
    footerLink.textContent = " Andrei Totoro"
    footerLink.href = "https://github.com/AndreiTotoro"
    footerSection.appendChild(footerLink)
}

export {footer}