import logoImg from '../../assets/logo.svg';
import * as Styles from './styles';

interface IHeaderProps
{
    onOpenNewTransactionModal: () => void;
}

function Header ({onOpenNewTransactionModal}: IHeaderProps)
{
    return (
        <Styles.Container>
            <Styles.Content>
                <img src={logoImg} alt="dt money"/>
                <button
                    onClick={onOpenNewTransactionModal}
                >
                    Nova transação
                </button>
            </Styles.Content>
        </Styles.Container>
    );
}

export {Header};
