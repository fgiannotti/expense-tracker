/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup, Input, Button, FormLabel, TableRow,
} from '@material-ui/core';

const MyForm = ({ onSubmitHandler }) => (
  <form onSubmit={onSubmitHandler} style={{ margin: 10 }}>
    <FormGroup className="row">

      <FormLabel htmlFor="expenseName" sm={2}>
        Name of Expense
      </FormLabel>

      <TableRow sm={4}>
        <Input
          type="text"
          name="expenseName"
          id="expenseName"
          placeholder="Name of expense?"
        />
      </TableRow>
    </FormGroup>
    <FormGroup className="row">
      <FormLabel htmlFor="expenseAmount" sm={2}>
        Expense Amount
      </FormLabel>

      <TableRow sm={4}>
        <Input
          type="number"
          name="expenseAmount"
          id="expenseAmount"
          placeholder="0.00"
        />

      </TableRow>

    </FormGroup>
    <Button type="submit" color="primary">
      Add
    </Button>
  </form>
);

MyForm.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
};
export default MyForm;
