import React, { Component } from 'react';
import {Button} from 'antd';

export default class ButtonAct extends Component {

    render () {
        return (
            <Button onClick={this.props.onClick}>{this.props.text}</Button>
        )
    }
}