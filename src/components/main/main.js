import "./main.css"
import {content} from "../page-load/page-load"

const main = () =>{
    const main = document.createElement('div')
    main.classList.add("main")
    content.appendChild(main)

    const mainCard = document.createElement('div')
    mainCard.classList.add('mainCard')
    main.appendChild(mainCard)

    const mainText = document.createElement('h1')
    mainText.classList.add('primaryText')
    mainText.textContent = "Food."
    mainCard.appendChild(mainText)

    const secondaryText = document.createElement('h1')
    secondaryText.classList.add('secondaryText')
    secondaryText.textContent = "To remember..."
    mainCard.appendChild(secondaryText)

    const orderButton = document.createElement('button')
    orderButton.classList.add('orderButton')
    orderButton.textContent = "Order Now!"
    mainCard.appendChild(orderButton)
    
}

export {main}