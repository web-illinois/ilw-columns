import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import styles from './ilw-columns.styles.js';
import { ManualSlotController } from './ManualSlotController.js';
import './ilw-columns.css';

@customElement('ilw-columns')
export default class Columns extends LitElement {
    static shadowRootOptions = { ...LitElement.shadowRootOptions, slotAssignment: 'manual' as SlotAssignmentMode };

    static styles = styles;

    @property({ type: String })
    theme = '';

    @property({ type: String })
    mode = '';

    @property({ type: String })
    width = '';

    @property({ type: String })
    gap = '';

    @property({ type: String })
    padding = '0 0 40px 0';

    @property({ type: Boolean })
    reverse = false;

    private _observer = new ManualSlotController(this);

    get _items(): Element[] {
        return Array.from(this.children);
    }

    get reverseClass(): string {
        return this.reverse ? 'reverse' : '';
    }

    get columnsClass(): string {
        if (this.mode === '2x1') {
            return 'first2';
        }
        if (this.mode === '3x1') {
            return 'first3';
        }
        if (this.mode === '1x2') {
            return 'last2';
        }
        if (this.mode === '1x3') {
            return 'last3';
        }
        if (this.mode === '1x2x1') {
            return 'middle2';
        }
        if (this.mode === 'sidebar-left') {
            return 'sidebar-left';
        }
        if (this.mode === 'sidebar-right') {
            return 'sidebar-right';
        }
        return '';
    }

    get paddingStyle(): string {
        return this.padding === '' ? '' : `padding: ${this.padding};`;
    }

    get gapStyle(): string {
        return this.gap === ''
            ? (this.mode === 'sidebar-left' || this.mode === 'sidebar-right' ? '30px' : '0')
            : this.gap;
    }

    get outerWidth(): string {
        return this.width === 'full' || this.width === 'auto' ? 'fixed' : '';
    }

    get innerWidth(): string {
        return this.width === 'auto' || this.width === 'page' ? 'fixed' : '';
    }

    render() {
        return html`
            <style>
                :host {
                    --ilw-columns--gap: ${this.gapStyle};
                }
            </style>
            <div class="columns-outer ${this.theme} ${this.outerWidth}">
                <div class="columns ${this.innerWidth} ${this.columnsClass} ${this.reverseClass}" style="${this.paddingStyle}">
                    ${map(Array.from(this.children), () => html`<div><slot></slot></div>`)}
                </div>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ilw-columns': Columns;
    }
}
