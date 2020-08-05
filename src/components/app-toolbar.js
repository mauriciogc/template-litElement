import {LitElement, html, css} from 'lit-element';

// import components
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';

class AppToolbar extends LitElement {
    static get properties() {
        return {
            title: {type: String},
            leftIcon: {type: Object},
            rightIcon: {type: Object}
        }
    }

    static get styles() {
        return css`
        :host {
            display: block
        }
        #main-container {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        #title {
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 0.3em;
        }
        `;
    }

    constructor() {
        super();
        this.title = '';
    }

    dispatch(eventName) {
        console.log(eventName);
        this.dispatchEvent(new CustomEvent(eventName, {
            bubbles: true,
            composed: true
        }))
    }

    render() {
        return html`
        <div id="main-container">
            <paper-icon-button 
            @click=${() => {this.dispatch(this.leftIcon.event)}} 
            icon=${this.leftIcon.name}></paper-icon-button>
            <div id="title">${this.title}</div>
            <paper-icon-button 
            @click=${() => {this.dispatch(this.rightIcon.event)}} 
            icon=${this.rightIcon.name}></paper-icon-button>
        </div>
        `;
    }
}

customElements.define('app-toolbar', AppToolbar);