import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import {Container, RadioBox, TransactionTypeContainer} from './styles';
import {useTransactions} from '../../hooks/useTransactions';

interface INewTransactionModalProps
{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal ({isOpen, onRequestClose}: INewTransactionModalProps)
{
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState(0);
    const [title, setTitle] = useState('');
    const [type, setType] = useState<'deposit' | 'withdraw'>('deposit');

    const {createTransaction} = useTransactions();

    async function handleCreateTransaction (e: FormEvent)
    {
        e.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        });

        onRequestClose();

        setCategory('');
        setAmount(0);
        setTitle('');
        setType('deposit');
    }

    return (
        <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
      >
          <button
            type="button"
            onClick={onRequestClose}
            className="react-modal-close"
          >
              <img src={closeImg} alt="Fechar modal"/>
          </button>
          <Container
            onSubmit={handleCreateTransaction}
          >
            <h2>Cadastrar transação</h2>

            <input
                placeholder="Título"
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <input
                type="number"
                placeholder="Valor"
                onChange={event => setAmount(Number(event.target.value))}
            />

            <TransactionTypeContainer>
                <RadioBox
                    type="button"
                    onClick={() => {
                        setType('deposit')
                    }}
                    isActive={type === 'deposit'}
                    activeColor="green"
                >
                    <img src={incomeImg} alt="Entrada"/>
                    <span>Entrada</span>
                </RadioBox>
                <RadioBox
                    type="button"
                    onClick={() => {
                        setType('withdraw')
                    }}
                    isActive={type === 'withdraw'}
                    activeColor='red'
                    data-test-id="withdraw"
                >
                    <img src={outcomeImg} alt="Saída"/>
                    <span>Saída</span>
                </RadioBox>
            </TransactionTypeContainer>

            <input
                placeholder="Categoria"
                value={category}
                onChange={event => setCategory(event.target.value)}
            />

            <button type="submit">
                Cadastrar
            </button>
          </Container>
      </Modal>
    );
}
