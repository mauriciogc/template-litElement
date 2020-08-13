import { LitElement, html, css } from "lit-element";

import './cart-item';

class AppCart extends LitElement {
	static get properties() {
		return {
            items: {type: Array, hasChanged(newVal, oldval) {
                if(JSON.stringify(oldval) === JSON.stringify(newVal)) {
                    return false;
                }
                // console.log(oldval, newVal);
                // this.getTotal(newVal.map(item => item.price));
                return true;
            }},
            total: {type: Number},
		};
    }

    constructor() {
        super();
        const items = [{
            image: 'https://shop.polymer-project.org/esm-bundled/data/images/10-14154B.jpg',
            name: "Anvil L/S Crew Neck - Grey",
            productId: 1,
            quantity: 1,
            size: 'M',
            price: 22.15,
            icon: 'clear',
            event: 'icon-clicked'
        }, {
            image: 'https://shop.polymer-project.org/esm-bundled/data/images/10-14154B.jpg',
            name: "Anvil L/S Crew Neck - Grey",
            productId: 1,
            quantity: 1,
            size: 'M',
            price: 22.15,
            icon: 'clear',
            event: 'icon-clicked'
        }];
        this.items = items;
        this.total = this.getTotal(items.map(item => item.price));
    }
    
    static get styles() {
        return css`
        :host {
            font-family: 'Roboto', 'Noto', sans-serif;
            width: 100%
        }
        #main-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        #cart-items-container {
            width: 60%;
        }
        .header {
            text-align: center;
        }
        .title {
            margin: 0 0 4px 0;
            font-size: 1.3em;
            font-weight: 500;
        }
        .gray-text {
            font-size: 13px;
            line-height: 1.5;
            color: #757575;
        }
        .footer {
            display: flex;
            width: 60%;
            justify-content: flex-end;
            align-items: center;
        }
        .total {
            font-size: 13px;
            line-height: 1.5;
            margin-right: 2rem
        }
        .checkout {
            display: inline-block;
            box-sizing: border-box;
            border: 2px solid #000;
            background-color: #FFF;
            font-size: 14px;
            font-weight: 500;
            color: black;
            margin: 0;
            padding: 8px 44px;
            text-align: center;
            text-decoration: none;
            text-transform: uppercase;
            border-radius: 0;
            outline: none;
        }
        `;
    }

	render() {
		return html`<div id="main-container">
            <div class="header">
                <div class="title">Your Cart</div>
                <div class="gray-text">(${this.items.length} items)</div>
            </div>
            <div id="cart-items-container" @icon-clicked=${this.deleteItem}>
                ${this.items.map((item, index) => html`
                    <cart-item
                    .image=${item.image}
                    .name=${item.name}
                    .productId=${item.productId}
                    .quantity=${item.quantity}
                    .size=${item.size}
                    .price=${item.price}
                    .icon=${item.icon}
                    .event=${item.event}
                    .index=${index}></cart-item>
                `)}
            </div>
            <div class="footer">
                <div class="total">Total: $${this.total}</div>
                <button class="checkout">Checkout</button>
            </div>
        </div>`;
    }
    
    getTotal(items) {
        return items.reduce((acc, cv) => acc + cv, 0);
    }

    deleteItem({detail}) {
        this.items.splice(detail, 1);
        console.log(this.items);
        this.total = this.getTotal(this.items.map(item => item.price));
    }
}
customElements.define("app-cart", AppCart);
