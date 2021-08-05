import React, { PureComponent } from "react";
import s from "./ProductCard.module.scss";
import Button from "../../shared/Button";
import Shimmer from "../../shared/Shimmer/Shimmer";
import star from "../../star.svg";

class ProductCard extends PureComponent {

  addItemToCart() {
    console.log('in here');
  }

  showProductList(list) {
    const { count, products } = list;
    console.log(count, products);
    return (
      <div className={s.showProductList}>
        {products.map((products, index) => {
          let btnText = products.is_in_stock ? "ADD TO CART" : "OUT OF STOCK";
          return (
            <div key={index} className={s.listWrapper}>
              <div className={s.imageCon}>
                <img src={products.image_urls_webp.x408} alt={products.alt_text} />
              </div>
              <div className={s.infoCon}>
                <h3>{products.name}</h3>
                {products.weight > 0 &&
                  <p>({products.weight}{products.weight_unit})</p>
                }
                <div className={s.priceCon}>
                  <span>&#8377;{products.final_price_new}</span>
                  {products.final_price && <del>&#8377;{products.final_price}</del>}
                </div>
                <div className={s.button}>
                  <Button
                    btnText={btnText}
                    type="primary"
                    size="medium"
                    isDisabled={!products.is_in_stock}
                    onClickHandler={this.addItemToCart}
                  ></Button>
                </div>
              </div>
              {products.rating && <div className={s.ratingCon}>
                <span>{products.rating}</span>
                <img src={star} alt="rating" />
              </div>
              }
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    const { list } = this.props;
    return (
      list ?
        <div className={s.productCard} >
          {this.showProductList(list)}
        </div>
        : <Shimmer />
    )
  }
}

export default ProductCard;