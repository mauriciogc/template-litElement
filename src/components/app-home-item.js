import {LitElement, html, css}from 'lit-element';

import './app-button';

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
                <app-button
                .name=${this.button.name}
                .event=${this.button.event}>
                </app-button>
            </div>
        </div>
        `;
    }
}

customElements.define('app-home-item', AppHomeItem)