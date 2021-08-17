import { createContext, Dispatch, SetStateAction } from 'react'
import { UserData } from '../interfaces/auth.interface';

export const UserContext = createContext<any>(null);