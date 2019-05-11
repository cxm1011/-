import React, { Component } from 'react';
import ButtonAct from './ButtonAct';

export default class Counter extends Component {
    constructor(props) {
        super(props);   
    }

    incrementIfOdd = () => {
        if(this.props.value % 2 !== 0){
            this.props.onIncrement();
        }
    }

    incrementAsync = () => {
        setTimeout(this.props.onIncrement,1000);
    }

    render() {
        const {value,onIncrement,onDecrement} = this.props;
        return (
            <p>
                Clicked: {value} times<br/>
                <ButtonAct onClick={onIncrement} text='+' /> &nbsp;&nbsp;
                <ButtonAct onClick={onDecrement} text='-' /> &nbsp;&nbsp;
                <ButtonAct onClick={this.incrementIfOdd()} text='Increment if odd' /> &nbsp;&nbsp;
                <ButtonAct onClick={this.incrementAsync()} text='Increment async' />

            </p> 
        )
    }
}