import { LitElement, html, css } from "lit-element";
// import "./components/hello-word";

// import app components
import './components/app-header';
import './components/app-home';

class MyApp extends LitElement {
	static get properties() {
		return {
			appHeaderProps: {type: Object},
			appHomeA: {type: Object},
			appHomeB: {type: Object},
			appHomeC: {type: Object},
			appHomeD: {type: Object}
		};
	}
	constructor() {
		super();
		this.appHeaderProps = {
			title: 'SHOP',
			leftIcon: {
				name: 'reorder',
				event: 'left-icon-clicked'
			},
			rightIcon:{
				name: 'shopping-cart',
				event: 'right-icon-clicked'
			},
			menuOptions: [{
				name: "Men's Outerwear",
				link: 'link-1'
			}, {
				name: 'Ladies Outerwear',
				link: 'link-2'
			}, {
				name: "Men's T-Shirts",
				link: 'link-3'
			}, {
				name: 'Ladies T-Shirts',
				link: 'link-4'
			}]
		};
		this.appHomeA = {
			image: 'https://shop.polymer-project.org/esm-bundled/images/mens_outerwear.jpg',
			title: "Men's Outerwear",
			button: {
				name: 'SHOP NOW',
				event: 'ap-home-button-clicked'
			}
		}
		this.appHomeB = {
			image: 'https://shop.polymer-project.org/esm-bundled/images/ladies_outerwear.jpg',
			title: "Ladies Outerwear",
			button: {
				name: 'SHOP NOW',
				event: 'ap-home-button-clicked'
			}
		}
		this.appHomeC = {
			image: 'https://shop.polymer-project.org/esm-bundled/images/mens_tshirts.jpg',
			title: "Men's T-Shirts",
			button: {
				name: 'SHOP NOW',
				event: 'ap-home-button-clicked'
			}
		}
		this.appHomeD = {
			image: 'https://shop.polymer-project.org/esm-bundled/images/ladies_tshirts.jpg',
			title: "Ladies T-Shirts",
			button: {
				name: 'SHOP NOW',
				event: 'ap-home-button-clicked'
			}
		}
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
				<app-header 
				.title=${this.appHeaderProps.title}
				.leftIcon=${this.appHeaderProps.leftIcon}
				.rightIcon=${this.appHeaderProps.rightIcon}
				.menuOptions=${this.appHeaderProps.menuOptions}></app-header>
				<app-home 
				.image=${this.appHomeA.image}
				.title=${this.appHomeA.title}
				.button=${this.appHomeA.button}></app-home>
				<app-home 
				.image=${this.appHomeB.image}
				.title=${this.appHomeB.title}
				.button=${this.appHomeB.button}></app-home>
				<div class="wrap-container">
					<app-home
					class="half-width"
					.image=${this.appHomeC.image}
					.title=${this.appHomeC.title}
					.button=${this.appHomeC.button}></app-home>
					<app-home 
					class="half-width"
					.image=${this.appHomeD.image}
					.title=${this.appHomeD.title}
					.button=${this.appHomeD.button}></app-home>
				</div>
			</div>
		`;
	}
}
customElements.define("my-app", MyApp);
