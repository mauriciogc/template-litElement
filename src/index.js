import { LitElement, html, css } from "lit-element";

// import app components
import './components/app-header';
import './components/app-home';
import './components/app-router';
import './components/app-catalog';
import './components/app-detail';
import './components/app-cart';
import './components/app-checkout';

// Import tools
import { router } from 'lit-element-router';

class MyApp extends router(LitElement) {
	static get properties() {
		return {
			appHeaderProps: {type: Object},
			route: { type: String },
			params: { type: Object },
			query: { type: Object },
			appCatalogA: {type: Object},
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
				categoryId: 'men-s-outerwear',
				event: 'menu-link-clicked'
			}, {
				name: 'Ladies Outerwear',
				categoryId: 'ladies-outerwear',
				event: 'menu-link-clicked'
			}, {
				name: "Men's T-Shirts",
				categoryId: 'men-s-t-shirts',
				event: 'menu-link-clicked'
			}, {
				name: 'Ladies T-Shirts',
				categoryId: 'ladies-t-shirts',
				event: 'lmenu-link-clicked'
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
			name: 'products',
			pattern: 'products/:productName'
		}, {
			name: 'product_detail',
			pattern: 'product-detail/:id'
		}, {
			name: 'not-found',
			pattern: '*'
		}, {
			name: 'cart',
			pattern: 'cart'
		}, {
			name: 'checkout',
			pattern: 'purchase/checkout'
		}]
	}

	router(route, params, query, data) {
		this.route = route;
		this.params = params;
		this.query = query;
		console.log(route, params, query);
	  }

	static get styles() {
		return css`
		:host {
			max-width: 100%;
		}
		.main-container {
			width: 100%;
			max-width: 100%;
		}
		`;
	}
	// Cada componente no debe recibir ropiedades
	render() {
		return html`
			<div class="main-container" @route-change=${this._changeRoute}>
				<app-header 
					.title=${this.appHeaderProps.title}
					.leftIcon=${this.appHeaderProps.leftIcon}
					.rightIcon=${this.appHeaderProps.rightIcon}
					.menuOptions=${this.appHeaderProps.menuOptions}>
				</app-header>
				<app-router active-route=${this.route}>
					<app-home route='home'></app-home>
					<app-catalog 
					route='products'></app-catalog>
					<app-detail
					route='product_detail'></app-detail>
					<app-cart route="cart"></app-cart>
					<app-checkout route="checkout"></app-checkout>
				</app-router>
			</div>
		`;
	}

	_changeRoute({detail}) {
		console.log('hehehex')
		window.location.assign(`${window.location.origin}/${detail}`);
	}
}
customElements.define("my-app", MyApp);
