import { LitElement, html, css } from "lit-element";
// import "./components/hello-word";

// import app components
import './components/app-header';
import './components/app-home';
import './components/app-router';

// Import tools
import { router } from 'lit-element-router';

class MyApp extends router(LitElement) {
	static get properties() {
		return {
			appHeaderProps: {type: Object},
			route: { type: String },
			params: { type: Object },
			query: { type: Object }
		};
	}
	constructor() {
		super();
		this.route = '';
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

	// ------------------------
	// Using lit-element-router
	// ------------------------
	static get routes() {
		return [{
			name: 'home',
			pattern: '',
		}, {
			name: 'mens_outerwear',
			pattern: 'mens_outerwear/'
		}, {
			name: 'not-found',
			pattern: '*'
		}]
	}

	router(route, params, query, data) {
		this.route = route;
		this.params = params;
		this.query = query;
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
			<app-header 
				.title=${this.appHeaderProps.title}
				.leftIcon=${this.appHeaderProps.leftIcon}
				.rightIcon=${this.appHeaderProps.rightIcon}
				.menuOptions=${this.appHeaderProps.menuOptions}></app-header>
			<app-router active-route=${this.route}>
				<app-home route='home'></app-home>
				<h2 route='mens_outerwear'>mens_outerwear</h2>
			</app-router>
		`;
	}
}
customElements.define("my-app", MyApp);
