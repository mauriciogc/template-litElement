import { LitElement, html, css } from "lit-element";

import './app-input';
import './app-select';
import './app-button';

class AppCheckout extends LitElement {
	static get properties() {
		return {
            countryOptions: {type: Array},
            months: {type: Array},
            years: {type: Array},
            form: {type: Object},
            summary: {type: Array}
		};
    }

    static get styles() {
        return css``;
    }
    
    static get styles() {
        return css`
        :host {
            display: block;
            font-family: Roboto, Noto, sans-serif;
        }
        .main-contaainer {
            margin-top
        }
        .head {
            text-align: center;
        }
        .form-container {
            width: 100%;
            display: flex;
        }
        .horizontal-container {
            width: 50%;
            max-width: 50%;
        }
        .sub-container {
            padding: 1rem;
        }
        .summary li{
            display: flex;
            justify-content: space-between;
        }
        `;
    }

    constructor() {
        super();
        this.countryOptions = ['México', 'United States'];
        this.months = ['January', 'Febrary', 'March', 'April'];
        this.years = [2020, 2021, 2022, 2023, 2024];
        this.form = {};
        this.summary = [{
            name: 'Anvil L/S Crew Neck - Grey',
            price: 22.3
        }, {
            name: "Green Flex Fleece Zip Hoodie",
            price: 13.3
        }]
    }

	render() {
		return html`
        <div class="main-container">
            <div class="head">CHECKOUT</div>
            <div class="form-container" @input-changed=${this._handleFormChange}>
                <div class="horizontal-container">
                    <div class="sub-container">
                        <h4>Account information</h4>
                        <app-input
                        name="email"
                        label="Email"
                        id="email",
                        type="text"
                        event="input-changed"></app-input>
                        <app-input
                        name="phone"
                        label="Phone Number"
                        id="phone"
                        type="number"
                        event="input-changed"></app-input>
                        <h4>Shipping Address</h4>
                        <app-input
                        name="address"
                        label="Address"
                        id="address"
                        type="text"
                        event="input-changed"></app-input>
                        <app-input
                        name="city"
                        label="City"
                        id="city"
                        type="text"
                        event="input-changed"></app-input>
                        <div class="form-container">
                            <div class="horizontal-container">
                                <div class="sub-container">
                                    <app-input
                                    name="state"
                                    label="State/Province"
                                    id="state"
                                    type="text"
                                    event="input-changed"></app-input>
                                </div>
                            </div>
                            <div class="horizontal-container">
                                <div class="sub-container">
                                    <app-input
                                    name="cp"
                                    label="Zip/Postal Code"
                                    id="cp"
                                    type="number"
                                    event="input-changed"></app-input>
                                </div>
                            </div>
                        </div>
                        <app-select
                        name="country"
                        label="Country"
                        id="country"
                        event="input-changed"
                        .options=${this.countryOptions}></app-select>
                    </div>
                </div>
                <div class="horizontal-container">
                    <div class="sub-container">
                        <h4>Payment Method</h4>
                        <app-input
                        name="card-holder"
                        label="Card Holder Name"
                        id="card-holder"
                        type="text"
                        event="input-changed"></app-input>
                        <app-input
                        name="card"
                        label="Card Number"
                        id="card"
                        type="number"
                        event="input-changed"></app-input>
                        <div class="form-container">
                            <div class="horizontal-container">
                                <div class="sub-container">
                                    <app-select
                                    name="cardMonth"
                                    label="Expiry"
                                    id="cardMonth"
                                    event="input-changed"
                                    .options=${this.months}></app-select>
                                </div>
                            </div>
                            <div class="horizontal-container">
                                <div class="sub-container">
                                <app-select
                                    name="cardyear"
                                    label="Year"
                                    id="cardYear"
                                    event="input-changed"
                                    .options=${this.years}></app-select>
                                </div>
                            </div>
                        </div>
                        <div class="form-container">
                            <div class="horizontal-container">
                                <div class="sub-container">
                                    <app-input
                                    name="cvv"
                                    label="CVV"
                                    id="cvv"
                                    type="number"
                                    event="input-changed"></app-input>
                                </div>
                            </div>
                        </div>
                        <h4>Order Summary</h4>
                        <div class="summary" >
                            <ul>
                                ${this.summary.map(item => html`<li>
                                    <div>${item.name}</div>
                                    <div>${item.price}</div>
                                </li>`)}
                            </ul>
                        </div>
                        <app-button name="PlACE ORDER" @click=${this._handleSubmit}></app-button>
                    </div>
                </div>
            </div>
        </div>`;
    }
    
    _handleFormChange({detail}) {
        this.form = {
            ...this.form,
            [detail.origin]: detail.value
        }
        console.log(this.form);
    }

    _handleSubmit() {
        console.log(this.form);
    }
}
customElements.define("app-checkout", AppCheckout);
