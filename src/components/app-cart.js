import { LitElement, html, css } from "lit-element";

import './cart-item';
import './app-button';

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
            quantityEvent: 'quantity-changed',
            size: 'M',
            price: 22.15,
            icon: 'clear',
            event: 'icon-clicked'
        }, {
            image: 'https://shop.polymer-project.org/esm-bundled/data/images/10-14154B.jpg',
            name: "Anvil L/S Crew Neck - Grey",
            productId: 1,
            quantity: 1,
            quantityEvent: 'quantity-changed',
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
        @media (max-width: 550px) {
            #cart-items-container {
                width: 90%;
            }
        }
        `;
    }

	render() {
		return html`<div id="main-container">
            <div class="header">
                <div class="title">Your Cart</div>
                <div class="gray-text">(${this.items.length} items)</div>
            </div>
            <div id="cart-items-container" 
            @icon-clicked=${this._deleteItem}
            @quantity-changed=${this._quantityChanged}>
                ${this.items.map((item, index) => html`
                    <cart-item
                    .image=${item.image}
                    .name=${item.name}
                    .productId=${item.productId}
                    .quantity=${item.quantity}
                    .quantityEvent=${item.quantityEvent}
                    .size=${item.size}
                    .price=${item.price}
                    .icon=${item.icon}
                    .event=${item.event}
                    .index=${index}></cart-item>
                `)}
            </div>
            <div class="footer">
                <div class="total">Total: $${this.total}</div>
                <app-button @click=${this._goToCheckout} name="Checkout"></app-button>
            </div>
        </div>`;
    }
    
    getTotal(items) {
        return Number(items.reduce((acc, cv) => acc + cv, 0).toFixed(2));
    }

    _deleteItem({detail}) {
        this.items.splice(detail.index, 1);
        this.total = this.getTotal(this.items.map(item => item.price * item.quantity));
    }
    _quantityChanged({detail}) {
        this.items.splice(detail.index, 1, {
            ...this.items[detail.index],
            quantity: Number(detail["0"])
        });
        this.total = this.getTotal(this.items.map(item => item.price * item.quantity));
    }

    _goToCheckout() {
        this.dispatchEvent(new CustomEvent('route-change', {
            bubbles: true,
            composed: true,
            detail: 'purchase/checkout'
        }))
    }
}
customElements.define("app-cart", AppCart);
