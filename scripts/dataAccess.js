//This new data access module will contain all of the get*() functions and set*() functions. It should import the database module so that it can interact with the state directly.

import { database } from './database.js'

export const getMetals = () => {
    return database.metals.map(metal => ({...metal}))
}

export const getSizes = () => {
    return database.sizes.map(size => ({...size}))
}

export const getStyles = () => {
    return database.styles.map(style => ({...style}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const getOrderBuilder = () => {
    return database.orderBuilder
}

/* <explorer-chapter> */
export const getJewelry = () => {
    return database.jewelry.map(jewel => ({...jewel}))
}
/* </explorer-chapter> */

export const setMetal = (id) => {
    database.orderBuilder.metalId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setSize = (id) => {
    database.orderBuilder.sizeId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setStyle = (id) => {
    database.orderBuilder.styleId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

/* <explorer-chapter> */
export const setJewelry = (id) => {
    database.orderBuilder.jewelId = id 
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
/* </explorer-chapter> */

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length 
    newOrder.id = lastIndex + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}