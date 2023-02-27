import {createStore, action} from "easy-peasy"


export const store = createStore({
    cart:[],
    totalPrice: 0.0,
    chosedRestaurant: -1,
    changeCart: action((state ,payload) => {
        state.cart = payload
    }),
    changeTotalPrice: action((state ,payload) => {
        state.totalPrice = payload
    }),
    changeChosedRestaurant: action((state ,payload) => {
        state.chosedRestaurant = payload
    })
})