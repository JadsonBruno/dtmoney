import {Summary} from '../Summary';
import {TransactionsTable} from '../TransactionsTable';
import * as Styles from './styles';

function Dashboard ()
{
    return (
        <Styles.Container>
            <Summary />
            <TransactionsTable />
        </Styles.Container>
    );
}

export {Dashboard};
