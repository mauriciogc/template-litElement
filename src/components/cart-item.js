import { LitElement, html, css } from "lit-element";

// import components
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';

class CartItem extends LitElement {
	static get properties() {
		return {
            image: {type: String},
            name: {type: String},
            productId: {type: Number},
            quantity: {type: Number},
            size: {type: String},
            price: {type: Number},
            icon: {type: String},
            event: {type: String}
		};
    }

    static get styles() {
        return css`
        :host {
            font-family: 'Roboto', 'Noto', sans-serif;
            font-size: 13px
        }
        #main-container {
            width: 100%;
            height: 70px;
            display: flex;
            justify-content: space-between
        }
        #left-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 40%;
        }
        #right-container {
            color: #757575;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 50%;
        }
        #image{
            max-height: 100%;
        }
        `;
    }

	render() {
		return html`<div id="main-container">
            <div id="left-container" >
                <img id="image" src=${this.image}  />
                <div id="name">${this.name}</div>
            </div>
            <div id="right-container">
                <div id="quantity">
                    <label for="select-quantity">Qty: </label>
                    <select name="select-quantity">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div id="size">
                    size: ${this.size}
                </div>
                <div id="price">
                    $${this.price}
                </div>
                <div id="icon">
                <paper-icon-button 
                    @click=${this.dispatch} 
                    icon=${this.icon}></paper-icon-button>
                </div>
            </div>
        </div>`;
    }
    
    dispatch() {
        this.dispatchEvent(new CustomEvent(this.event, {
            bubbles: true,
            composed: true
        }));
    }
}
customElements.define("cart-item", CartItem);
