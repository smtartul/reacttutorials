import React, { Component } from 'react';
import alertify from 'alertifyjs'
import { Button, Form, FormGroup, Label, Input, } from "reactstrap";

export default class FormDemo2 extends Component {
    state = { email: '', password: '', city: '', description: '' }
    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        alertify.success(this.state.email + "added to DB!")
    }
    render() {
        return <div>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for='email'>E-Mail</Label>
                    <Input
                        name='email'
                        id='email'
                        placeholder='enter email'
                        onChange={this.handleChange}
                        type="email" />
                </FormGroup>
                <FormGroup>
                    <Label for='password'>Password</Label>
                    <Input
                        name='password'
                        id='password'
                        placeholder='enter password'
                        onChange={this.handleChange}
                        type="password" />
                </FormGroup>
                <FormGroup>
                    <Label for='description'>Description</Label>
                    <Input
                        name='description'
                        id='description'
                        placeholder='enter description'
                        onChange={this.handleChange}
                        type="textarea" />
                </FormGroup>
                <FormGroup>
                    <Label for='city'>Password</Label>
                    <Input
                        name='city'
                        id='city'
                        placeholder='select city'
                        onChange={this.handleChange}
                        type="select">
                            <option>Giresun</option>
                            <option>İstanbul</option>
                            <option>Ankara</option>
                            <option>Samsun</option>
                        </Input>
                </FormGroup>
                <Button type='submit'>Save</Button>


            </Form>
        </div>;
    }
}
