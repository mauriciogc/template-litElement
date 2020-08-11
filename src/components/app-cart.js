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
        `;
    }

	render() {
		return html`<div id="main-container">
            (${this.items.length} items)
            <div id="cart-items-container">
                ${this.items.map(item => html`
                    <cart-item
                    .image=${item.image}
                    .name=${item.name}
                    .productId=${item.productId}
                    .quantity=${item.quantity}
                    .size=${item.size}
                    .price=${item.price}
                    .icon=${item.icon}
                    .event=${item.event}></cart-item>
                `)}
            </div>
            Total: $${this.total}
        </div>`;
    }
    
    getTotal(items) {
        return items.reduce((acc, cv) => acc + cv, 0);
    }

    get
}
customElements.define("app-cart", AppCart);
