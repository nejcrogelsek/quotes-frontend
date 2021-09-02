import { makeAutoObservable } from "mobx";

class AppStore {
    randomQuote: number = 0;

    constructor() {
        makeAutoObservable(this)
    }
}

const appStore = new AppStore();
export default appStore;