import React, {createContext, useContext, useEffect, useState} from 'react';
import {api} from '../services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    category: string;
    type: 'deposit' | 'withdraw';
    createdAt: string;
}

interface TransactionsProviderProps
{
    children: React.ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

type TransactionInput = Omit<Transaction, 'id' | "createdAt">;

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider ({children}: TransactionsProviderProps)
{
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() =>
    {
        api.get('/transactions')
           .then(response => setTransactions(response.data.transactions));
    }, []);

    async function createTransaction (transaction: TransactionInput)
    {
        const response = await api.post('/transactions', {
            ...transaction,
            createdAt: new Date()
        });

        const transactionValue = response.data.transaction;

        setTransactions([...transactions, transactionValue]);
    }

    return (
        <TransactionsContext.Provider value={{
            transactions,
            createTransaction
        }}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions ()
{
    return useContext(TransactionsContext);
}
