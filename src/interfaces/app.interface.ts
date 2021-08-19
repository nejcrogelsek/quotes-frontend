import { UserData } from "./auth.interface";
import { QuoteData } from "./quote.interface";

export interface AppProps {
    user: UserData
    quote: QuoteData
}

export type IQuotes = {
    quotes: QuoteData[]
}