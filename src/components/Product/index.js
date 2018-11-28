import React, {Component} from 'react';
import './Product.sass'

class Product extends Component {
  state = {
    product: this.props.product.state,
  };
  render() {
    const {product} = this.props;
    const state = this.state.product;
    const showBuyLink = () => {
      if (state === 'default' || state === 'default_hover') {
        return <span onClick={this.changeState} className="product__buy-link">{product.buy_link}</span>        
      }
    };
    return (
      <div className={"product product_" + state}>

        <div onMouseEnter={this.changeState} onMouseLeave={this.changeState} onClick={this.changeState} className="product__item">
          
          <div className="product__top-block">
            <div className="product__cut-corner"><div className="product__cut-corner-bgc"></div></div>          
            <p className="product__note">{product.note[state] || product.note.default}</p>
          </div>
          
          <div className="product__bottom-block">
            <h2 className="product__name">{product.name}</h2>
            <p className="product__type">{product.type}</p>
            <p className="product__portions">{product.portions}</p>
            <p className="product__gift">{product.gift}</p>
            <div className="product__weight">
              <span className="product__weight-number">{product.weight}</span>
              <span className="product__weight-units">{product.units}</span>
            </div>
          </div>

        </div>

        <p className="product__slogan">
          {product.slogan[state]}
          {showBuyLink()}          
        </p>

      </div>
    );
  };

  changeState = (e) => {
    const event = e.type;
    const currentState = this.state.product;
    if (currentState === 'disabled') return;

    const eRouter = {
      click: {
        default: 'selected_hover',
        default_hover: 'selected',
        selected: 'default_hover',
        selected_hover: 'default_hover',
      },
      mouseenter: {
        default: 'default_hover',
        default_hover: 'default_hover',
        selected: 'selected',
        selected_hover: 'selected',
      },
      mouseleave: {
        default: 'default',
        default_hover: 'default',
        selected: 'selected_hover',
        selected_hover: 'selected_hover',
      },
    };

    const newState = eRouter[event][currentState];

    this.setState({
      product: newState,
    });

  };
}

export default Product;