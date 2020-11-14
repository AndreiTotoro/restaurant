

const menuMaker = (itemName, itemPrice) => {
   const menuItem = document.createElement("div")
   menuItem.classList.add("menuItem")


    const item = document.createElement('p')
    item.textContent = itemName
    menuItem.appendChild(item)

    const price = document.createElement('p')
    price.textContent = itemPrice
    menuItem.appendChild(price)

    return menuItem

}

export {menuMaker}