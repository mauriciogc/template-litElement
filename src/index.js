import { LitElement, html, css } from "lit-element";
// import "./components/hello-word";

// import app components
import './components/app-header';
import './components/app-home';
import './components/app-router';
import './components/app-catalog';
import './components/app-detail';

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
		this.appCatalogA = {
			title: "Men's Outerwear",
			image: 'https://shop.polymer-project.org/esm-bundled/images/mens_outerwear.jpg',
			catalogItems: [{
				name: "Men's Tech Shell Full-Zip",
				price: 50.20,
				image: 'https://shop.polymer-project.org/esm-bundled/data/images/10-15068B.jpg',
				url: '/',
			}, {
				name: "Men's Tech Shell Full-Zip",
				price: 50.20,
				image: 'https://shop.polymer-project.org/esm-bundled/data/images/10-15068B.jpg',
				url: '/',
			}, {
				name: "Men's Tech Shell Full-Zip",
				price: 50.20,
				image: 'https://shop.polymer-project.org/esm-bundled/data/images/10-15068B.jpg',
				url: '/',
			}, {
				name: "Men's Tech Shell Full-Zip",
				price: 50.20,
				image: 'https://shop.polymer-project.org/esm-bundled/data/images/10-15068B.jpg',
				url: '/',
			}, {
				name: "Men's Tech Shell Full-Zip",
				price: 50.20,
				image: 'https://shop.polymer-project.org/esm-bundled/data/images/10-15068B.jpg',
				url: '/',
			}, {
				name: "Men's Tech Shell Full-Zip",
				price: 50.20,
				image: 'https://shop.polymer-project.org/esm-bundled/data/images/10-15068B.jpg',
				url: '/',
			}]
		}
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
			pattern: 'products/:productId'
		}, {
			name: 'product_detail',
			pattern: 'product_detail/:id'
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
				<app-catalog 
				route='mens_outerwear'
				.image=${this.appCatalogA.image}
				.title=${this.appCatalogA.title}
				.catalogItems=${this.appCatalogA.catalogItems}></app-catalog>
				<app-detail
				route='product_detail'></app-detail>
			</app-router>
		`;
	}
}
customElements.define("my-app", MyApp);
