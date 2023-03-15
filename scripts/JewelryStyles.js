import { getOrderBuilder, getStyles, setStyle } from "./dataAccess.js"

const styles = getStyles()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "style") {
//             window.alert(`User chose style ${event.target.value}`)
//         }
//     }
// )

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = styles.map(style => {

    const currentOrder = getOrderBuilder()

    if (currentOrder.styleId === style.id) {        
        return `<li><input type="radio" name="style" value="${style.id}" checked="checked"/> ${style.style}</li>`
    } else {
        return `<li><input type="radio" name ="style" value="${style.id}"/> ${style.style}</li>`
    }
    
    })

    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</ul>"
    return html
}


