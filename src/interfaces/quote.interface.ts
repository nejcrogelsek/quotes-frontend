export type AddQuoteData = {
    message: string;
}

export type QuoteData = {
    id: number;
    message: string;
    votes: number;
    user_id: number;
    created_at: string;
    updated_at: string;
}
export type QuoteProps = {
    quote: QuoteData;
}