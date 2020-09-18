import './App.css';
import React, { useState } from 'react'
import {Container, Jumbotron} from 'reactstrap';
import Form from './components/Form';
import Logo from '*.svg'

const ALL_EXPENSES = [{id:1, name: 'Buy a book', amount:20},{id:2, name: 'Library', amount:200}]

function App() {
  const [expenses, setExpense] = useState(ALL_EXPENSES)
  return (
    <Container className="text-center">
      <Jumbotron fluid>
      <h3 className='display-6 text-center'>
          Expense Tracker React App
          <img src={Logo} style={{ width: 50, height: 50 }} alt='react-logo' />
        </h3>
        <div className='text-center'>
          <p>
            Total Expense:{' '}
            <span className='text-success'>
              ${' '}
              {expenses.reduce((accumulator, currentValue) => {
                return (accumulator += parseInt(currentValue.amount))
              }, 0)}
            </span>
          </p>
        </div>
        {}
        <Form />
      </Jumbotron>
    </Container>
   
  );
}

export default App;
