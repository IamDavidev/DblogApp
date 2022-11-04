import { html, css, LitElement, PropertyValueMap } from 'lit';
import { customElement, property } from 'lit/decorators.js';

const tagName = 'clip-to-clipboard';

@customElement(tagName)
export class ClipToClipboard extends LitElement {
	protected firstUpdated(
		_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
	): void {
		const code: Element | null | undefined =
			this.shadowRoot?.querySelector('.astro-code');
		const $btnCopy = this.shadowRoot?.querySelector('#copy-to-clipboard');
		if (code == null) throw new Error('code is null');
		if ($btnCopy == null) throw new Error('$btnCopy is null');

		const text = code.textContent;
		if (text == null) throw new Error('text is null');

		$btnCopy.addEventListener('click', (): any => {
			navigator.clipboard.writeText(text);
		});
	}

	render() {
		return html` <button></button> `;
	}
}
