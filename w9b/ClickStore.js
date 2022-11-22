import {makeAutoObservable} from "mobx";

class ClickStore {
    count = 0

    constructor() {
        makeAutoObservable(this)
    }

    increment() {
        this.count += 1
    }
}

export default new ClickStore()
