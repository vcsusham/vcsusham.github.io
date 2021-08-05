import React, { PureComponent } from "react";
import s from "./ProductDetail.module.scss";
import { getHomeMenuCategories, getProductDetails } from './actions';
import Shimmer from "../../shared/Shimmer/Shimmer";
import ProductCard from "../ProductCard/ProductCard";

class ProductDetail extends PureComponent {
  constructor() {
    super()
    this.state = {
      homeMenuResp: null,
      productList: null,
      categoryId: "185"
    }
  }

  async componentDidMount() {
    let response = await getHomeMenuCategories();
    this.setState({
      homeMenuResp: response,
      productList: response.product_list
    })
  }

  setSelectedCategory(categories) {
    const { category_id } = categories;
    const { categoryId } = this.state;
    this.setState({
      categoryId: category_id
    })
    //stopping multiple api hit for same data 
    if (String(category_id) !== categoryId) {
      this.getNewProductDetails(category_id);
    }
  }

  async getNewProductDetails(categoryId) {
    let newProductList = await getProductDetails(categoryId);
    console.log(newProductList);
    this.setState({
      productList: newProductList
    })
  }

  showCategories(categoryList) {
    return (
      <div className={s.homeCategories}>
        {categoryList.map((categories, index) => (
          <div key={index} className={s.categoriesDescription}>
            <div style={{
              backgroundImage: `url(${categories.category_image})`
            }} onClick={this.setSelectedCategory.bind(this, categories)}>
              <p>{categories.category_name}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  render() {
    const { homeMenuResp, productList } = this.state;
    const { category_list, heading } = homeMenuResp || {};
    return (
      homeMenuResp ?
        <div className={s.productDetail}>
          <h1>{heading}</h1>
          {this.showCategories(category_list)}
          <ProductCard list={productList} />
        </div> : <Shimmer />
    )
  }
}

export default ProductDetail;
