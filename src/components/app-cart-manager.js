import { LitElement, html, css } from "lit-element";

class AppCartManager extends LitElement {
	static get properties() {
		return {
            cartItems: {type: Array}
        };
    }
    
    static get styles() {
        return css`
        :host {
            display: block;
        }
        .container {
            width: 100%;
        }
        `;
    }

    constructor() {
        super();
        const cartItems = window.sessionStorage.getItem('cart-items');
        this.cartItems = cartItems ? JSON.parse(cartItems) : [];
    }

	render() {
		return html`<div class="container" @send-cart-item=${this._receiveCartItem}>
            <slot></slot>
        </div>`;
    }
    
    _receiveCartItem({detail: item}) {
        if (this._itemIsAlreadyinCart(item)) {
            this._increaseItemQuantity(item);
        } else {
            this._sendNewCartItem(item);
        }
    }

    _itemIsAlreadyinCart({name: newItemName, size: newItemSize}) {
        for(const {name: cartItemName, size: cartItemSize} of this.cartItems) {
            if (cartItemName === newItemName && cartItemSize === newItemSize) {
                return true;
            }
        }
        return false;
    }

    _increaseItemQuantity(item) {
        this.dispatchEvent(new CustomEvent('increase-quantity-cart-item', {
            bubbles: true,
            composed: true,
            detail: {
                index: this._getItemIndex(item.name, item.size),
                quantity: item.quantity
            }
        }));
    }

    _sendNewCartItem(item) {
        this.dispatchEvent(new CustomEvent('add-cart-item', {
            bubbles: true,
            composed: true,
            detail: item
        }));
    }

    _getItemIndex(itemName, itemSize) {
        return this.cartItems.findIndex(cartItem => cartItem.name === itemName && cartItem.size === itemSize);
    }
}
customElements.define("app-cart-manager", AppCartManager);
