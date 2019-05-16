import {html, PolymerElement} from '../assets/@polymer/polymer/polymer-element.js';


/**
 * `xf-button`
 * a button triggering Fore actions
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class XfButton extends PolymerElement {
    static get template() {
        return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <button id="button" on-click="performActions">
        [[label]]
        <slot></slot>
      </button>
    `;
    }

    static get properties() {
        return {
            label: {
                type: String
            }
        };
    }

    connectedCallback() {
        super.connectedCallback();
        console.log('xf-button attached');

    }


    performActions(e) {
        console.log('performActions ', this.children);

        for (let i = 0; i < this.children.length; i++) {
            console.log('child ', this.children[i]);
            const child = this.children[i];
            if(typeof child.execute === 'function' ){
                child.execute();
            }else{
                console.warn('child has no "execute" function ', child);
            }
        }
    }


}

window.customElements.define('xf-button', XfButton);
