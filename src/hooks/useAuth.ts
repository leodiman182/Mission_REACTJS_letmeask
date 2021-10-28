import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext'

// =============================== IMPORTS /\


export function useAuth() {
    const value = useContext(AuthContext)

    return value;
}