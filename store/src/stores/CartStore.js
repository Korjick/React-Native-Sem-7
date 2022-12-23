import { makeAutoObservable } from 'mobx'

class CartStore {
    cart = {}

    constructor() {
        makeAutoObservable(this)
    }

    addCart(fav) {
        this.cart[fav.id] = {
            item: fav,
            count: 1
        }
    }

    increaseCart(fav) {
        console.log(fav.id)
        console.log(this.cart)
        console.log(this.cart[fav.id])
        this.cart[fav.id].count++;
    }

    decreaseCount(fav) {
        this.cart[fav.id].count--;

        if(this.cart[fav.id].count <= 0) {
            this.deleteCart(fav);
        }
    }

    deleteCart(fav) {
        delete this.cart[fav.id]
    }
}

export default new CartStore()
