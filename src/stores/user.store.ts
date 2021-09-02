import axios from "../api/axios";
import { makeAutoObservable } from "mobx";
import { UserData } from "../interfaces/auth.interface";
import { QuoteData } from "../interfaces/quote.interface";

// export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
//   todos.map((todo) => ({
//     ...todo,
//     text: todo.id === id ? text : todo.text,
//   }));

// export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
//   todos.map((todo) => ({
//     ...todo,
//     done: todo.id === id ? !todo.done : todo.done,
//   }));

// export const removeTodo = (todos: Todo[], id: number): Todo[] =>
//     todos.filter((todo) => todo.id !== id);

// export const signup = async (newUser: SignUpData): Promise<UserData> => {
//     let data: UserData | null = null;
//     await axios.post('/users/signup', newUser).then(async (res) => {
//         data = res.data.user;
//         localStorage.setItem('user', res.data.access_token);
//         await axios.get(`/quotes/${res.data.user.id}`).then(res => {
//             //setQuoteValue(res.data);
//             console.log('Quote: ', res.data);
//         })
//     });
//     return data!;
// }

// MobX Implementation
class UserStore {
    user: UserData | null = null;
    userQuote: QuoteData | null = null;

    constructor() {
        makeAutoObservable(this);
    }
}
const userStore = new UserStore();
export default userStore;