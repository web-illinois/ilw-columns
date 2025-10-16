import type { LitElement, ReactiveController, ReactiveControllerHost } from 'lit';

/**
 * A simple Lit reactive controller to apply manual slotting to a component.
 *
 * Using manual slotting gives us the ability to surround the child nodes with additional
 * elements without resorting to manipulating the page's DOM. This is important for
 * elements with strict parent-child relationships, like `ul` and `li`, since otherwise
 * they would require the component's user to add those elements.
 *
 * When using this:
 * - Make sure your component has `slotAssignment: "manual"` in its shadowRootOptions.
 * - Add the `_observer = new ManualSlotController(this)` property to your component's class.
 * - In your component's render, map over children to create the slots. Something like:
 *
 * ```
 * ${map(Array.from(this.children), () => html`<li><slot></slot></li>`)}
 * ```
 */
export class ManualSlotController implements ReactiveController {
    private _host: LitElement & ReactiveControllerHost;
    private _observer: MutationObserver;

    constructor(host: LitElement & ReactiveControllerHost) {
        this._host = host;
        this._observer = new MutationObserver(() => {
            this._host.requestUpdate();
        });
        // This binds the controller to the element's lifecycle
        host.addController(this);
    }

    /**
     * Find the child nodes and slots, and assign the children to each slot.
     *
     * The render of the host component is expected to create the slots, but this
     * function will take care of assigning the elements to them.
     */
    private _refreshInternal(): void {
        const items = Array.from(this._host.children);
        const slots = Array.from(this._host.shadowRoot!.querySelectorAll('slot'));

        for (const slot of slots) {
            if (items.length > 0) {
                slot.assign(items.shift()!);
            }
        }
    }

    hostUpdated(): void {
        // Called by Lit after the host component's render.
        this._refreshInternal();
    }

    hostConnected(): void {
        this._observer.observe(this._host, { childList: true });
    }

    hostDisconnected(): void {
        this._observer.disconnect();
    }
}