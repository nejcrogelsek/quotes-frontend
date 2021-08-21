import { UserData } from "./auth.interface"

export type AddQuoteData = {
    message: string;
}

export type QuoteData = {
    id: number;
    message: string;
    votes: number;
    user: UserData;
    created_at: string;
    updated_at: string;
}
export type QuoteProps = {
    quote: QuoteData;
}