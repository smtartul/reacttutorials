import React, { Component } from 'react'
import {
   
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "reactstrap";

export default class CartSummary extends Component {
    render() {
        return (
            <div>
                <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Options - {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
        )
    }
}
