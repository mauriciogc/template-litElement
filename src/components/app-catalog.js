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
        this.title = "Men's Outerwear";
        this.image = 'https://shop.polymer-project.org/esm-bundled/images/mens_outerwear.jpg';
        this.catalogItems = [{
            id: 1,
            name: "Men's Tech Shell Full-Zip",
            price: 50.20,
            image: 'https://shop.polymer-project.org/esm-bundled/data/images/10-15068B.jpg',
            url: '/',
        }, {
            id: 1,
            name: "Men's Tech Shell Full-Zip",
            price: 50.20,
            image: 'https://shop.polymer-project.org/esm-bundled/data/images/10-15068B.jpg',
            url: '/',
        }, {
            id: 'men-s-tech-shell-full-zip',
            name: "Men's Tech Shell Full-Zip",
            price: 50.20,
            image: 'https://shop.polymer-project.org/esm-bundled/data/images/10-15068B.jpg',
            url: '/',
        }, {
            id: 1,
            name: "Men's Tech Shell Full-Zip",
            price: 50.20,
            image: 'https://shop.polymer-project.org/esm-bundled/data/images/10-15068B.jpg',
            url: '/',
        }, {
            id: 1,
            name: "Men's Tech Shell Full-Zip",
            price: 50.20,
            image: 'https://shop.polymer-project.org/esm-bundled/data/images/10-15068B.jpg',
            url: '/',
        }, {
            id: 1,
            name: "Men's Tech Shell Full-Zip",
            price: 50.20,
            image: 'https://shop.polymer-project.org/esm-bundled/data/images/10-15068B.jpg',
            url: '/',
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
        @media (max-width: 550px) {
            #image-container {
                height: 220px;
            }
            .image {
                max-height: 100%;
                width: auto;
            }
            #title {
                font-size: 1.5rem
            }
            #items-container {
                flex-direction: column;
                flex-wrap: non-wrap;
            }
            .catalog-item {
                width: 100%;
            }
        }
        `;
    }

	render() {
        return html`
        <div id="main-container">
            <div id='image-container'>
                <img class="image" src="${this.image}" >
            </div>
            <div id="text-container">
                <div id="title">${this.title}</div>
                <div id="items-number">(${this.catalogItems.length}) items</div>
            </div>
            <div id="items-container" @catalog-item-clicked=${this._sendData}>
                ${this.catalogItems.map(item => html`
                <catalog-item
                class="catalog-item"
                .image=${item.image}
                .name=${item.name}
                .price=${item.price}
                .productId=${item.id}></catalog-item>
                `)}
            </div>
        </div>
        `;
    }

    _sendData({detail}) {
        this._sendRoute(detail.title)
    }
    
    _sendRoute(title) {
        this.dispatchEvent(new CustomEvent('route-change', {
            bubbles: true,
            composed: true,
            detail: `product-detail/${title}`
        }))
    }
}
customElements.define("app-catalog", AppCatalog);
