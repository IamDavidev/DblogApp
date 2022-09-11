import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export const tagName = '';

@customElement(tagName)
export class PostRecent extends LitElement {
	@property({ type: String }) title: string = '';
	@property({ type: Array }) tags: String[] = [];
	@property({ type: String }) description: string = '';
	@property({ type: String }) imageUser: string = '';
	@property({ type: String }) userName: string = '';
	@property({ type: String }) updatedPost: string = '';

	render(): TemplateResult<1> {
		return html` <article></article> `;
	}
}
