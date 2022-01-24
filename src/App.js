import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import NavBar from "./NavBar";
import ProductList from "./ProductList";
import alertify from 'alertifyjs'
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import CartList from "./CartList";
import NotFound from "./NotFound";


export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    let addedItem = newCart.find((item) => item.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(product.productName + "added to Cart")
  };
  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(
      (item) => item.product.id !== product.id
    );
    this.setState({ cart: newCart });
    alertify.error(product.productName + "deleted from Cart")
  };

  render() {
    let productInfo = { title: "Urunler" };
    let categoryInfo = { title: "Kategori" };
    let navInfo = { title: "Artul Muhendislik" };
    return (
      <div>
        <Container>
          <NavBar
            removeFromCart={this.removeFromCart}
            cart={this.state.cart}
            info={navInfo}
          />
        </Container>

        <Container>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>

            <Col xs="9">
              <Routes>
                <Route exact path="/" element={
                  <ProductList
                    addToCart={this.addToCart}
                    products={this.state.products}
                    currentCategory={this.state.currentCategory}
                    info={productInfo}
                  />
                } />
                <Route exact path="/cart" element={
                  <CartList
                    removeFromCart={this.removeFromCart}
                    cart={this.state.cart}
                    
                  />
                } />
                <Route path="*" element={<NotFound />} />
              </Routes>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
