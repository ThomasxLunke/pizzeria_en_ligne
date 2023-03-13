import {createStore, action} from "easy-peasy"


export const store = createStore({
    cart:[],
    totalPrice: 0.0,
    chosedRestaurant: "-1", //-1 is the default value (no restaurant chosed)
    streetName: "",
    streetNumber : "",
    takeAwayOrDelivery : "", //0 = delivery, 1= takeAway
    zipCode: "",
    city: "",
    district: "",
    isAdress: false,
    longitudeRestaurant: 0.0,
    latitudeRestaurant: 0.0,
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
    }),
    changeCity: action((state ,payload) => {
        state.city = payload
    }),
    changeDistrict: action((state ,payload) => {
        state.district = payload
    }),
    changeIsAdress: action((state ,payload) => {
        state.isAdress = payload
    }),
    changeLongitudeRestaurant: action((state ,payload) => {
        state.longitudeRestaurant = payload
    }),
    changeLatitudeRestaurant: action((state ,payload) => {
        state.latitudeRestaurant = payload
    }),
})