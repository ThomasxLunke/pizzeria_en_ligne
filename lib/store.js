import {createStore, action} from "easy-peasy"


export const store = createStore({
    cart:[],
    totalPrice: 0.0,
    chosedRestaurant: -1,
    streetName: "",
    streetNumber : "",
    takeAwayOrDelivery : "", //0 = delivery, 1= takeAway
    zipCode: "",
    changeCart: action((state ,payload) => {
        state.cart = payload
    }),
    changeTotalPrice: action((state ,payload) => {
        state.totalPrice = payload
    }),
    changeChosedRestaurant: action((state ,payload) => {
        state.chosedRestaurant = payload
    }),
    changeStreetName: action((state ,payload) => {
        state.streetName = payload
    }),
    changeStreetNumber: action((state ,payload) => {
        state.streetNumber = payload
    }),
    changeTakeAwayOrDelivery: action((state ,payload) => {
        state.takeAwayOrDelivery = payload
    }),
    changeZipCode: action((state ,payload) => {
        state.zipCode = payload
    })
})