import { getMetals, setMetal, getOrderBuilder } from "./dataAccess.js"

const metals = getMetals()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "metal") {
//             window.alert(`User chose metal ${event.target.value}`)
//         }
//     }
// )

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)

export const Metals = () => {
    let html = "<ul>"

    const currentOrder = getOrderBuilder()
    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {

        if (currentOrder.metalId === metal.id) {        
            html += `<li><input type="radio" name="metal" value="${metal.id}" checked="checked"/> ${metal.type}</li>`
        } else {
            html += `<li><input type="radio" name ="metal" value="${metal.id}"/> ${metal.metal}</li>`
        }

    }

    html += "</ul>"
    return html
}
