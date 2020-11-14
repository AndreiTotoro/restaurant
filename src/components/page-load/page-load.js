import "./page-load.css"
import {navbar} from "../navbar/navbar"
import {main} from "../main/main"
import {about} from "../about/about"
import {footer} from "../footer/footer"
import {menu} from "../menu/menu"

const content = document.querySelector("#content")

const pageLoad = () =>{
    navbar()
    main()
    about()
    menu()
    footer()
    
}

export {pageLoad, content}