import React from 'react';
import { BTForm,Col, FormGroup, Label,Input,Button } from 'reactstrap';

const Form = () => (
    <BTForm style={{margin:10}}>
        <FormGroup className="row">

            <Label for="exampleEmail" sm={2}>
                Name of Expense
            </Label>

            <Col sm={4}>
                <Input 
                    type="text"
                    name="name"
                    id="expenseName"
                    placeHolder="Name of expense?">
                </Input>
            </Col>
        </FormGroup>
        <FormGroup className="row">
            <Label for="exampleEmail" sm={2}>
                $Amount
            </Label>
            <Col sm={4}>
                <Input 
                    type="number"
                    name="amount"
                    id="expenseAmount"
                    placeHolder="0.00"/>
                    
            </Col>
        </FormGroup>
        <Button type="submit" color="primary">
            Add
        </Button>
    </BTForm>
)

export default Form