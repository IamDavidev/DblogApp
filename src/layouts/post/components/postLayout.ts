import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators';

export const tagName = 'post-layout';

@customElement(tagName)
export class PostLayout extends LitElement {
	render(): TemplateResult<1> {
		return html`
			<article>
				post layout
				<slot />
			</article>
		`;
	}
}
