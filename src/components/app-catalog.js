import { LitElement, html, css } from "lit-element";

// Import components
import './catalog-item';

class AppCatalog extends LitElement {
	static get properties() {
		return {
            title: { type: String },
            image: {type: String},
            catalogItems: {type: Array}
		};
    }
    
    constructor() {
        super();
        this.title = '';
        this.image = '/';
        this.catalogItems = [{
            image: '/',
            name: "Men's Tech Shell Full-Zip",
            price: 50.20
        }];
    }

    static get styles() {
        return css`
        :host {
            width: 100%;
            font-family: 'Roboto', 'Noto', sans-serif;
        }
        #image-container {
            height: 320px;
            display: flex;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }
        #text-container {
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        #items-number {
            color: #757575;
            font-size: 12px;
            margin: 0.5rem 0rem;

        }
        #items-container{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }

        .catalog-item {
            margin: 1rem 0rem;
            width: 30%
        }
        `;
    }

	render() {
        return html`
        <div id="main-container">
            <div id='image-container'>
                <img src="${this.image}" >
            </div>
            <div id="text-container">
                <div>${this.title}</div>
                <div id="items-number">(${this.catalogItems.length}) items</div>
            </div>
            <div id="items-container">
                ${this.catalogItems.map(item => html`
                <catalog-item
                class="catalog-item"
                .image=${item.image}
                .name=${item.name}
                .price=${item.price}></catalog-item>
                `)}
            </div>
        </div>
        `;
	}
}
customElements.define("app-catalog", AppCatalog);