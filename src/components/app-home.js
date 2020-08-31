import { LitElement, html, css } from "lit-element";

// Import components
import './app-home-item';

// Import tools
class AppHome extends LitElement {
	static get properties() {
		return {
			appHomeA: {type: Object},
			appHomeB: {type: Object},
			appHomeC: {type: Object},
			appHomeD: {type: Object},
			appHomeItems : {type: Object}
		};
	}
	constructor() {
		super();
		this.appHomeItems = [{
			image: 'https://shop.polymer-project.org/esm-bundled/images/mens_outerwear.jpg',
			title: "Men's Outerwear",
			button: {
				name: 'SHOP NOW',
				event: 'app-home-button-clicked'
			}
		}, {
			image: 'https://shop.polymer-project.org/esm-bundled/images/ladies_outerwear.jpg',
			title: "Ladies Outerwear",
			button: {
				name: 'SHOP NOW',
				event: 'app-home-button-clicked'
			}
		}, {
			image: 'https://shop.polymer-project.org/esm-bundled/images/mens_tshirts.jpg',
			title: "Men's T-Shirts",
			button: {
				name: 'SHOP NOW',
				event: 'app-home-button-clicked'
			}
		}, {
			image: 'https://shop.polymer-project.org/esm-bundled/images/ladies_tshirts.jpg',
			title: "Ladies T-Shirts",
			button: {
				name: 'SHOP NOW',
				event: 'app-home-button-clicked'
			}
		}]
		this.appHomeA = {
			image: 'https://shop.polymer-project.org/esm-bundled/images/mens_outerwear.jpg',
			title: "Men's Outerwear",
			button: {
				name: 'SHOP NOW',
				event: 'ap-home-button-clicked'
			}
		};
		this.appHomeB = {
			image: 'https://shop.polymer-project.org/esm-bundled/images/ladies_outerwear.jpg',
			title: "Ladies Outerwear",
			button: {
				name: 'SHOP NOW',
				event: 'ap-home-button-clicked'
			}
		};
		this.appHomeC = {
			image: 'https://shop.polymer-project.org/esm-bundled/images/mens_tshirts.jpg',
			title: "Men's T-Shirts",
			button: {
				name: 'SHOP NOW',
				event: 'ap-home-button-clicked'
			}
		};
		this.appHomeD = {
			image: 'https://shop.polymer-project.org/esm-bundled/images/ladies_tshirts.jpg',
			title: "Ladies T-Shirts",
			button: {
				name: 'SHOP NOW',
				event: 'ap-home-button-clicked'
			}
		};
	}

	static get styles() {
		return css`
		:host {
			max-width: 100%;
		}
		.half-width {
			width: 50%;
		}
		.wrap-container {
			display: flex;
			flex-wrap: wrap;
		}
		`;
	}

	render() {
		return html`
			<div>
				${typeof this.appHomeItems === 'object' && this.appHomeItems.length ? 
				this.appHomeItems.map(appHomeItem => html`
				<app-home-item
				.image=${appHomeItem.image}
				.title=${appHomeItem.title}
				.button=${appHomeItem.button}>
				</app-home-item>
				`) : ''}
			</div>
		`;
	}
}
customElements.define("app-home", AppHome);