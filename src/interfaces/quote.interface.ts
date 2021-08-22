import { UserData } from "./auth.interface"
import { VoteData } from "./vote.interface"

export type AddQuoteData = {
    message: string;
}

export type QuoteData = {
    id: number;
    message: string;
    votes: VoteData[];
    user: UserData;
    created_at: string;
    updated_at: string;
}
export type QuoteProps = {
    quote: QuoteData;
}