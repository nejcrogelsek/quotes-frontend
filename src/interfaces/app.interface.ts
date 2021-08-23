import { UserData } from "./auth.interface";
import { QuoteData } from "./quote.interface";

export interface AppProps {
    user: UserData
    quote: QuoteData
}

export type IQuotes = {
    quotes: QuoteData[]
}

export type IAllow = {
    allow: boolean;
}

export type IStaticData = { id: number; votes: { id: number; quote_id: number; user: { id: number; first_name: string; last_name: string; profile_image: string; email: string; }; }[]; message: string; user: { id: number; first_name: string; last_name: string; profile_image: string; email: string; }; }[];