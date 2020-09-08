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
            quantityEvent: {type: String},
            size: {type: String},
            price: {type: Number},
            icon: {type: String},
            event: {type: String},
            index: {type: Number}
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
		return html`<div id="main-container" >
            <div id="left-container" >
                <img id="image" src=${this.image}  />
                <div id="name">${this.name}</div>
            </div>
            <div id="right-container">
                <div id="quantity">
                    <label for="select-quantity">Qty: </label>
                    <select @change=${({target}) => this.dispatch(this.quantityEvent, target.value)} name="select-quantity">
                        ${this._printOptions()}
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
                    @click=${() => this.dispatch(this.event)} 
                    icon=${this.icon}></paper-icon-button>
                </div>
            </div>
        </div>`;
    }

    _printOptions() {
        const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        return options.map(option => {
            if (option == this.quantity) return html`<option value=${option} selected> ${option}</option>`;
            return html`<option value=${option}> ${option}</option>`;
        });
    }
    
    dispatch(event, ...rest) {
        this.dispatchEvent(new CustomEvent(event, {
            bubbles: true,
            composed: true,
            detail: {
                index: this.index,
                ...rest
            }
        }));
    }
}
customElements.define("cart-item", CartItem);
