import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs';
import {App} from './App';

createServer({
    models: {
      transaction: Model,
    },

    seeds(server) {
      server.db.loadData({
        transactions: [
          // {
          //   id: 1,
          //   title: 'Freelancer de website',
          //   type: 'deposit',
          //   category: 'Dev',
          //   amount: 6000,
          //   createdAt: new Date('2021-02-12 09:00:00')
          // },
          // {
          //   id: 2,
          //   title: 'Freelancer de aplicativo',
          //   type: 'deposit',
          //   category: 'Dev',
          //   amount: 8000,
          //   createdAt: new Date('2021-02-22 09:00:00')
          // },
          // {
          //   id: 3,
          //   title: 'Internet',
          //   type: 'withdraw',
          //   category: 'Custos fixos',
          //   amount: 130,
          //   createdAt: new Date('2021-02-10 09:00:00')
          // },
          // {
          //   id: 4,
          //   title: 'Aluguel',
          //   type: 'withdraw',
          //   category: 'Custos fixos',
          //   amount: 500,
          //   createdAt: new Date('2021-02-10 09:00:00')
          // },
        ]
      })
    },

    routes() {
      this.namespace = 'api';

      this.get('/transactions', () =>
      {
        return this.schema.all('transaction');
      })

      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody);

        return schema.create('transaction', data);
      })
    }
  }
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
