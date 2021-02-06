import './App.css';
import React from 'react';
import { Container, Card } from '@material-ui/core';
import MyForm from './components/Form';
import Logo from './logo.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expenses: [{ id: 1, name: 'Buy a book', amount: 20 }, { id: 2, name: 'Library', amount: 200 }] };
    this.totalExpenses = this.totalExpenses.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    const { expenses } = this.state;
    console.log(expenses);
    const name = event.target.expenseName.value;
    const amount = event.target.expenseAmount.value;

    const id = expenses[expenses.length - 1].id + 1;
    const newExpense = { id, name, amount };

    this.setState({ expenses: [...expenses, newExpense] });
  }

  totalExpenses() {
    const { expenses } = this.state;
    // eslint-disable-next-line max-len
    return expenses.reduce((accumulator, currentValue) => (accumulator + parseInt(currentValue.amount, 10)), 0);
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <Container className="text-center">
        <Card fluid>
          <h3 className="display-6 text-center">
            Expense Tracker React App
            <img src={Logo} alt="react-logo" />
          </h3>
          <div className="text-center">
            <p>
              Total Expense:
              <span className="text-success">
                $
                {this.totalExpenses()}
              </span>
            </p>
          </div>
          <MyForm onSubmitHandler={this.onSubmitHandler} />
        </Card>
      </Container>
    );
  }
}

export default App;
