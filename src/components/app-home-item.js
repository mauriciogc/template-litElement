import {LitElement, html, css}from 'lit-element';

class AppHomeItem extends LitElement {
    static get properties() {
        return {
                image: {type: String},
                title: {type: String},
                button: {type: Object}
        }
    }

    constructor() {
        super();
        this.image = '/';
        this.title = '';
        this.button = {
            name: '',
            event: 'button-clicked'
        }
    }

    static get styles() {
        return css`
        :host {
            display: block;
            font-family: 'Roboto', 'Noto', sans-serif;
        }
        #main-container {
            width: 100%;
        }
        #text-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem 0rem;
        }
        #text-container > * {
            margin: 1rem;
        }
        #image-container {
            height: 320px;
            display: flex;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }
        #shop-button {
            background-color: #FFF;
            border: none;
        }
        #shop-button > * {
            display: inline-block;
            box-sizing: border-box;
            border: 2px solid #000;
            background-color: #FFF;
            font-size: 14px;
            font-weight: 500;
            color: var(--app-primary-color);
            margin: 0;
            padding: 8px 44px;
            text-align: center;
            text-decoration: none;
            text-transform: uppercase;
            border-radius: 0;
            outline: none;
        }
        `;
    }

    dispatch(eventName) {
        this.dispatchEvent(new CustomEvent(eventName, {
            bubbles: true,
            composed: true
        }));
    }

    render() {
        return html`
        <div id="main-container">
            <div id="image-container">
                <img src=${this.image} >
            </div>
            <div id="text-container">
                <div id="title">${this.title}</div>
                <button id="shop-button" @click=${() => {this.dispatch(this.button.event)}}>
                    <a href="/">${this.button.name}</a>
                </button>
            </div>
        </div>
        `;
    }
}

customElements.define('app-home-item', AppHomeItem);