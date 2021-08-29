import axios from "../api/axios";
import { makeAutoObservable } from "mobx";
import { QuoteData } from "../interfaces/quote.interface";

// MobX Implementation
class QuoteStore {
    recentQuotes: QuoteData[] | null = null;
    likedQuotes: QuoteData[] | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    async getRecentQuotes() {
        await axios.get('quotes/recent').then((res) => {
            this.recentQuotes = res.data;
        })
    }

    async getLikedQuotes() {
        await axios.get('quotes/liked').then((res) => {
            this.likedQuotes = res.data;
        })
    }
}
const quoteStore = new QuoteStore();
export default quoteStore;