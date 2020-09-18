import './App.css';
import React, { useState } from 'react'
import {Container, Jumbotron} from 'reactstrap';
import {Logo} from './logo.png'
import Form from './components/Form'


const ALL_EXPENSES = [{id:1, name: 'Buy a book', amount:20},{id:2, name: 'Library', amount:200}]

function App() {
  const [expenses, setExpense] = useState(ALL_EXPENSES)
  const total_expense = expenses.reduce((acc,expense)=>{return (acc += parseInt(expense.amount))},0)
  return (
    <Container className="text-center">
      <Jumbotron fluid>
        <h3 className="display-6">
          Expense Tracker React App
          <img src={Logo} alt="react-logo"></img>
        </h3>
      <div>
        <p>
          Total Expense:{total_expense}
          
        </p>
      </div>
      <Form />
      </Jumbotron>
    </Container>
   
  );
}

export default App;
