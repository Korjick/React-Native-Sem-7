import {makeAutoObservable} from "mobx";

class ClickStore {
    count = 0

    constructor() {
        makeAutoObservable(this)
        setInterval(() => this.increase(), 1000)
    }

    log(){
        this.count = 0
    }

    increase(){
        this.count += 1
    }
}

export default new ClickStore()
