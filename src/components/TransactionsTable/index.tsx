import {useTransactions} from '../../hooks/useTransactions';
import * as Styles from './styles';

function TransactionsTable ()
{
    const {transactions} = useTransactions();

    return (
        <Styles.Container>
            <table>
                <thead>
                    <tr>
                        <th>
                            Titulo
                        </th>
                        <th>
                            Valor
                        </th>
                        <th>
                            Categoria
                        </th>
                        <th>
                            Data
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map(transaction =>
                            (
                                <tr key={transaction.title}>
                                    <td>{transaction.title}</td>
                                    <td className={transaction.type}>
                                        {
                                            new Intl.NumberFormat('pt-BR', {
                                                style: 'currency',
                                                currency: 'BRL'
                                            }).format(transaction.amount)
                                        }
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.createdAt.split('T')[0]}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </Styles.Container>
    );
}

export {TransactionsTable};
