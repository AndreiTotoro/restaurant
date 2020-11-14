import "./about.css"
import {content} from "../page-load/page-load"

const about = () => {
    const aboutUsSection = document.createElement('div')
    aboutUsSection.classList.add("aboutUsSection")
    aboutUsSection.setAttribute('id', 'aboutSection')
    content.appendChild(aboutUsSection)

    const aboutUsCard = document.createElement('div')
    aboutUsCard.classList.add('aboutUsCard')
    aboutUsSection.appendChild(aboutUsCard)

    const aboutUsTitle = document.createElement('h1')
    aboutUsTitle.textContent = "About Us"
    aboutUsCard.appendChild(aboutUsTitle)

    const aboutUsDescription = document.createElement('p')
    aboutUsDescription.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi et error officiis expedita quia autem minima id voluptate nostrum atque, aperiam laboriosam! Quo tempore excepturi eius voluptate sed, commodi voluptatem."
    aboutUsCard.appendChild(aboutUsDescription)
}

export {about}