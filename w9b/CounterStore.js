import {makeAutoObservable} from "mobx";

export default class CounterStore {
    count = 0
    logger = null

    constructor(logger) {
        makeAutoObservable(this)
        this.logger = logger
    }

    increment() {
        this.count += 1
        this.logger.log()
    }

    decrement() {
        this.count -= 1
        this.logger.log()
    }

    reset() {
        this.count = 0
        this.logger.log()
    }
}
