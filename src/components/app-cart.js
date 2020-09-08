import { LitElement, html, css } from "lit-element";
import {repeat} from 'lit-html/directives/repeat';
import {nothing} from 'lit-html'

import './cart-item';
import './app-button';

class AppCart extends LitElement {
	static get properties() {
		return {
            items: {type: Array},
            total: {type: Number},
		};
    }

    constructor() {
        super();
        this.items = [];
        this.total = this.getTotal();
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
        this.total = this.getTotal();
		return html`<div id="main-container">
            <div class="header">
                <div class="title">Your Cart</div>
                <div class="gray-text">(${this.items.length} items)</div>
            </div>
            <div id="cart-items-container" 
            @icon-clicked=${this._deleteItem}
            @quantity-changed=${this._quantityChanged}>
                ${repeat(this.items, item => item.productId,
                    (item, index) => html`
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
                ${this.items.length ? html`<div class="total">Total: $${this.total}</div>
                <app-button @click=${this._goToCheckout} name="Checkout"></app-button>`: nothing}
            </div>
        </div>`;
    }
    
    getTotal() {
        return this.items ? Number(this.items.reduce((acc, cv) => acc + (cv.price * cv.quantity), 0).toFixed(2)) : 0;
    }

    _deleteItem({detail}) {
        this.items.splice(detail.index, 1);
        this.total = this.getTotal();
        this.dispatchEvent(new CustomEvent('save-cart-status', {
            bubbles: true,
            composed: true
        }));
    }
    _quantityChanged({detail}) {
        this.items.splice(detail.index, 1, {
            ...this.items[detail.index],
            quantity: Number(detail["0"])
        });
        this.total = this.getTotal();
    }

    _goToCheckout() {
        this.dispatchEvent(new CustomEvent('route-change', {
            bubbles: true,
            composed: true,
            detail: 'purchase/checkout'
        }));
    }
}
customElements.define("app-cart", AppCart);
