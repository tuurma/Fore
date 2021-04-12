import { html, css } from 'lit-element';

import XfAbstractControl from './fx-abstract-control.js';

export class FxOutput extends XfAbstractControl {
  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
      #control {
        display: inline-block;
      }
      [name='label'] {
        display: inline;
      }
    `;
  }

  static get properties() {
    return {
      ...super.properties,
    };
  }

  render() {
    return html`
      <slot name="label"></slot>
      <span id="control">${this.value}</span>
    `;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    /*
        if(this.querySelector('fx-label')){
            this.style.display = 'block';
        }
*/
  }

  /*
        getControlValue() {
            // super.getControlValue();
            console.log('output control value ', this.value);
            // console.log('output control value ', this.getValue());
            return this.shadowRoot.querySelector('#control');
            // return this.value;
        }
    */

  // eslint-disable-next-line class-methods-use-this
  isRequired () {
    console.log('Output required');
    return false;
  }

  // eslint-disable-next-line class-methods-use-this
  isReadonly () {
    return true;
  }

  // eslint-disable-next-line class-methods-use-this
  handleRequired() {}

  // eslint-disable-next-line class-methods-use-this
  handleReadonly() {
    // super.handleReadonly();
  }
}
customElements.define('fx-output', FxOutput);
