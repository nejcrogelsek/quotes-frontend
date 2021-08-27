import { makeAutoObservable } from "mobx";
import { VoteData } from "../interfaces/vote.interface";

class VoteStore {
    votes: VoteData[] | null = null;

    constructor() {
        makeAutoObservable(this);
    }
}
const voteStore = new VoteStore();
export default voteStore;