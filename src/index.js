import { LitElement, html, css } from "lit-element";
// import "./components/hello-word";

// import app components
import './components/app-header';
import './components/app-home';

class MyApp extends LitElement {
	static get properties() {
		return {
			appHeaderProps: {type: Object}
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
	}

	static get styles() {
		return css`
		:host {
			max-width: 100%;
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
			</div>
		`;
	}
}
customElements.define("my-app", MyApp);
