import { makeAutoObservable } from 'mobx'

class FavouritesStore {
    favourites = []

    constructor() {
        makeAutoObservable(this)
    }

    addFavourite(fav) {
        this.favourites.push(fav)
    }

    deleteFavourite(fav) {
        this.favourites = this.favourites.filter(data => data !== fav)
    }
}

export default new FavouritesStore()
