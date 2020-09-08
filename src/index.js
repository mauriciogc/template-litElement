import { LitElement, html, css } from "lit-element";

// import app components
import './components/app-header';
import './components/app-home';
import './components/app-router';
import './components/app-catalog';
import './components/app-detail';
import './components/app-cart';
import './components/app-checkout';
import './components/app-navigator';

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
			cartItems: {type: Array}
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
				event: 'menu-link-clicked'
			}]
		};
		const sessionCartItems = window.sessionStorage.getItem('cart-items');
		this.cartItems = sessionCartItems ? JSON.parse(sessionCartItems) : [];
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
			<div class="main-container"
			@increase-quantity-cart-item=${this._increaseQuantityCartItem}
			@add-cart-item=${this._addCartItem}
			@save-cart-status=${this._saveCartItems}>
				<app-navigator>
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
						route='product_detail'
						.cartItems=${this.cartItems}></app-detail>
						<app-cart route="cart"
						.items=${this.cartItems}></app-cart>
						<app-checkout route="checkout"></app-checkout>
					</app-router>
				</app-navigator>
			</div>
		`;
	}

	_increaseQuantityCartItem({detail: item}) {
		this.cartItems[item.index] = {
			...this.cartItems[item.index],
			quantity: this.cartItems[item.index].quantity + item.quantity
		}
		this.cartItems = [...this.cartItems];
		this._saveCartItems();
		this.requestUpdate();
	}

	_addCartItem({detail: item}) {
		this.cartItems.push(item);
		this.cartItems = [...this.cartItems];
		this._saveCartItems();
		this.requestUpdate();
	}

	_saveCartItems() {
		window.sessionStorage.setItem('cart-items', JSON.stringify(this.cartItems));
	}

	// _deleteCartItem({detail: itemIndex}) {
	// 	console.log('delete item', this.cartItems);
	// 	this.cartItems.splice(itemIndex, 1);
	// 	this.requestUpdate();
	// }
}
customElements.define("my-app", MyApp);
