export type AddQuoteData = {
    message: string;
}

export type QuoteData = {
    id: number;
    message: string;
    votes: number;
}
export type QuoteProps = {
    quote: QuoteData;
}