import { UserData } from "./auth.interface";

export interface VoteData {
    id: number;
    quote_id: number;
    user: UserData;
}
export type IVotes = {
    quote: VoteData[];
}