import { LitElement, html, css } from "lit-element";
import {repeat} from 'lit-html/directives/repeat';

// Import components
import './app-home-item';

// Import tools
class AppHome extends LitElement {
	static get properties() {
		return {
			appHomeItems : {type: Object}
		};
	}
	constructor() {
		super();
		this.appHomeItems = [{
			id: 1,
			image: 'https://shop.polymer-project.org/esm-bundled/images/mens_outerwear.jpg',
			title: "Men's Outerwear",
			button: {
				name: 'SHOP NOW',
				event: 'app-home-button-clicked'
			}
		}, {
			id: 2,
			image: 'https://shop.polymer-project.org/esm-bundled/images/ladies_outerwear.jpg',
			title: "Ladies Outerwear",
			button: {
				name: 'SHOP NOW',
				event: 'app-home-button-clicked'
			}
		}, {
			id: 3,
			image: 'https://shop.polymer-project.org/esm-bundled/images/mens_tshirts.jpg',
			title: "Men's T-Shirts",
			button: {
				name: 'SHOP NOW',
				event: 'app-home-button-clicked'
			}
		}, {
			id: 4,
			image: 'https://shop.polymer-project.org/esm-bundled/images/ladies_tshirts.jpg',
			title: "Ladies T-Shirts",
			button: {
				name: 'SHOP NOW',
				event: 'app-home-button-clicked'
			}
		}];
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
			<div @app-home-button-clicked=${this._sendRoute}>
				${typeof this.appHomeItems === 'object' && this.appHomeItems.length ? 
				repeat(this.appHomeItems, (item) => item.id,
				(appHomeItem, index) => html`
				<app-home-item
				.image=${appHomeItem.image}
				.title=${appHomeItem.title}
				.button=${appHomeItem.button}>
				</app-home-item>
				`) : ''}
			</div>
		`;
	}

	_sendRoute({detail}) {
		this.dispatchEvent(new CustomEvent('route-change', {
			bubbles: true,
			composed: true,
			detail:`products/${detail.title}`
		}));
	}
}
customElements.define("app-home", AppHome);