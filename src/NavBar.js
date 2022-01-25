import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarText,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";
export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">ARTUL APP</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <Link to='/form1'>Form1</Link>
              <Link to='/form2'>Form2</Link>
              {/* <NavItem>
                <NavLink href="/form1">Form1</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <CartSummary
                removeFromCart={this.props.removeFromCart}
                cart={this.props.cart}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
