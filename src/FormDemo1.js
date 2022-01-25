import React, { Component, useState } from 'react';

export default class FormDemo1 extends Component {
    state = { userName: '', city: '' }
    onChangeHandler = (e) => {
        // this.setState({ userName: e.target.value })
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value })
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        alert(this.state.userName)
    }
    render() {

        return <div>
            <form onSubmit={this.onSubmitHandler}>
                <h3>User Name</h3>
                <input
                    name='userName'
                    onChange={this.onChangeHandler}
                    type="text" />
                <h3>Username:{this.state.userName}</h3>
                <br />
                <h3>City</h3>
                <input
                    name='city'
                    onChange={this.onChangeHandler}
                    type="text" />
                <h3>City:{this.state.city}</h3>
                <input
                    value="save"
                    type="submit"
                />
            </form>
        </div>;
    }
}
