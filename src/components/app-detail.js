import { LitElement, html, css } from "lit-element";

import './app-button';

class AppDetail extends LitElement {
	static get properties() {
		return {
			productId: {type: Number},
			image: {type: String},
			name: {type: String},
			price: {type: String},
			size: {type: String},
			sizeOptions: {type: String},
			quantity: {type: Number},
			description: {type: String},
			features: {type: Object},
		};
	}

	constructor() {
		super();
		this.image = 'https://shop.polymer-project.org/esm-bundled/data/images/10-14154A.jpg';
		this.name = "Anvil L/S Crew Neck - Grey";
		this.price = 22.15;
		this.size = 'XS';
		this.sizeOptions = ['XS', 'S', 'M', 'L', 'XL'];
		this.quantity = 1;
		this.description = "You'll be swooning over this crew neck as soon as you feel how soft it is.";
		this.features = [
			"40% preshrunk ring-spun cotton, 60% polyester terry fleece. ",
			"Available in dark heather charcoal with the white Google logo screen printed across center chest."
		];
	}

	static get styles() {
		return css`
		:host {
			display: block;
			font-family: Roboto, Noto, sans-serif;
		}
		#main-container {
			width: 100%;
		}
		#container {
			display: flex;
			justify-content: center;
		}
		#name {
			font-size: 24px;
			font-weight: 500;
			line-height: 28px;
		}
		#price {
			margin: 16px 0 40px;
			font-size: 16px;
			color: #757575;
		}
		#image-container {
			position: relative;
			margin: 64px 32px;
			width: 50%;
			max-width: 600px;
		}
		#image {
			width 90%;
		}
		#detail-container {
			margin: 64px 32px;
    		width: 50%;
    		max-width: 400px;
		}
		#form-container {
			width: 100%;

		}
		#description-title {
			font-size: 13px;
			line-height: 1.5;
		}
		#features-title {
			color: #757575;
			font-size: 13px;
			line-height: 1.5;
		}
		.product-detail {
			color: #757575;
			font-size: 13px;
			line-height: 1.5;
		}
		@media (max-width: 550px) {
			#container {
				flex-direction: column;
				justify-content: flex-start;
			}
			#image-container {
				width: 100%;
				margin: 64px 0px;
				display: flex;
				justify-content: center;
			}
			#image {
				width: 90%
			}
			#detail-container {
				width: 100%;
				max-width: 100%;
				margin: 64px 0px;
				box-sizing: border-box;
				padding: 0rem 1rem;
			}
			#form {
				font-size: 1.3rem;
			}
			#description-title {
				font-size: 1.3rem;
			}
			#description-title ~ div {
				font-size: 1rem;
			}
			#features-title {
				font-size: 1.3rem;
			}
			#features-title ~ div {
				font-size: 1rem;
			}
		}
		`;
	}

	quantitySelected(origin) {
		this.quantity = Number(origin.options[origin.selectedIndex].value);
	}

	sizeSelected(origin) {
		this.size = origin.options[origin.selectedIndex].value
	}

	render() {
		return html`
		<div id="main-container">
			<div id="container">
				<div id="image-container">
					<img id="image" src=${this.image} >
				</div>
				<div id="detail-container">
					<div id="form-container">
						<div id="name">${this.name || ''}</div>
						<div id="price">$${this.price}</div>
						<div id="form">
							<label for="size">Size:</label>
							<select name="size" @change=${(e) => {this.sizeSelected(e.target)}}>
								<option value="XS">XS</option>
								<option value="S">S</option>
								<option value="M">M</option>
								<option value="XS">L</option>
								<option value="XS">XL</option>
							</select>
							<label for="quantity">Quantity: </label>
							<select name="quantity" @change=${(e) =>this.quantitySelected(e.target)}>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
							</select>
						</div>
						<div>
							<h6 id="description-title">Description:</h6>
							<div class="product-detail">
								${this.description || 'Info not available.'}
							</div>
						</div>
						<div>
							<h6 id="features-title">Features</h6>
							<div class="product-detail">
								${typeof this.features === 'object' && this.features.length ? 
								html`<ul>
									${this.features.map(feature => html`<li>${feature}</li>`)}
								</ul>` : 'Info not available'}
							</div>
						</div>
						<app-button name="ADD TO CAR" ></app-button>
					</div>
				</div>
			</div>
		</div>
		`;
	}
}

customElements.define("app-detail", AppDetail);
