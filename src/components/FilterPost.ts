import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

export const tagName = 'filter-post';

@customElement(tagName)
export class FilterPost extends LitElement {
	render(): TemplateResult<1> {
		return html`
			<div>
				<button></button>
			</div>
		`;
	}
}
