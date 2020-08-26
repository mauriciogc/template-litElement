import { LitElement, html, css } from "lit-element";

class AppSelect extends LitElement {
	static get properties() {
		return {
            name: { type: String },
            label: {type: String},
            event: {type: String},
            id: {type: String},
            options: {type: Array}
		};
    }

    static get styles() {
        return css`
        :host {
            display: block;
            font-family: Roboto, Noto, sans-serif;
        }
        .form__group {
            position: relative;
            padding: 15px 0 0;
            margin-top: 10px;
            width: 100%;
        }
        .form__field {
            font-family: inherit;
            width: 100%;
            border: 0;
            border-bottom: 2px solid black;
            outline: 0
            color: black;
            font-weight: 200;
            padding: 7px 0;
            background: transparent;
            transition: border-color 0.2s;
        }
        .form__field::placeholder {
            color: transparent;
        }
        .form__field:placeholder-shown ~ .form__label {
            font-size: 1rem;
            cursor: text;
            top: 20px;
        }
        .form__label {
            position: absolute;
            top: 0;
            display: block;
            transition: 0.2s;
            font-size: 1rem;
            color: black;
        }
        .form__field:focus {
            padding-bottom: 6px;  
            outline-width: 0;
            border-width: 3px;
            border-image: linear-gradient(to right, #11998e, #11998e);
            border-image-slice: 1;
        }

        .form__field:focus ~ .form__label {
            position: absolute;
            top: 0;
            display: block;
            transition: 0.2s;
            font-size: 1rem;
            color: black;
        }
        `;
    }
    
	render() {
        return html`
        <div class="form__group field">
            <select @change=${this._handleChange} class="form__field" placeholder="some placeholder" name=${this.name} id=${this.id} required >
                ${this.options.map(option => html`<option value=${option}>${option}</option>`)}
            </select>
            <label for=${this.name} class="form__label">${this.label}</label>
        </div>
        `;
    }
    
    _handleChange(e) {
        this.dispatchEvent(new CustomEvent(this.event, {
            bubbles: true,
            composed: true,
            detail: {
                origin: this.name,
                value: e.target.value
            }
        }));
    }
}
customElements.define("app-select", AppSelect);