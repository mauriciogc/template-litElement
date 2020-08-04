import { LitElement, html, css } from "lit-element";

class CatalogItem extends LitElement {
	static get properties() {
		return {
            image: {type: String},
            name: {type: String},
            price: {type: Number}
		};
    }
    
    constructor() {
        super();
        this.image = '/';
        this.name = '';
        this.price = 0;
    }

    static get styles() {
        return css`
        :host {
            display: flex;
            justify-content: center;
        }
        #main-container {
            max-width: 300px;
        }
        #text-container {
            font-size: 12px;
            text-align: center;
            margin-top: 2rem;
        }
        #name {
            font-weight: bold;
        }
        #price {
            color: #757575;
            margin: 0.5rem 0rem;
        }
        `;
    }
	render() {
        return html`
            <div id="main-container">
                <div id="image-container">
                    <img src="${this.image}" >
                </div>
                <div id="text-container">
                    <div id='name'>
                        ${this.name}
                    </div>
                    <div id='price'>
                        $${this.price}
                    </div>
                </div>
            </div>
            `;
	}
}
customElements.define("catalog-item", CatalogItem);
