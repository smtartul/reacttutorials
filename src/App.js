import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import NavBar from "./NavBar";
import ProductList from "./ProductList";

import React, { Component } from "react";

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
    let newCart=this.state.cart;
    let addedItem=newCart.find(item=>item.product.id===product.id)
    if (addedItem) {
      addedItem.quantity+=1
    }else{
      newCart.push({product:product,quantity:1})
    }
   
    this.setState({cart:newCart});
  };

  render() {
    let productInfo = { title: "Urunler" };
    let categoryInfo = { title: "Kategori" };
    let navInfo = { title: "Artul Muhendislik" };
    return (
      <div>
        <Container>
          <NavBar 
          cart={this.state.cart}
          info={navInfo} />
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
              <ProductList
                addToCart={this.addToCart}
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
