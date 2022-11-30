import { css, html, LitElement, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

const tagName = 'render-tags';

@customElement(tagName)
export class RenderTags extends LitElement {
	constructor(tags: string) {
		super();
	}

	static styles = css`
		.container__tags {
			display: flex;
			flex-direction: row;
			gap: 1rem;
		}
		.container__tags--tag {
			color: var(--white--color);
			padding: 8px 24px;
			font-family: 'Raleway-bold';
			border-radius: 16rem;
			background: linear-gradient(
				to bottom,
				rgba(23, 23, 23, 1) 0%,
				rgba(227, 163, 179, 1) 100%
			);
			margin-bottom: 16px;
			transition: all 10s linear;
			text-decoration: none;
		}
	`;

	@property({ type: String }) tags = '';

	render(): TemplateResult<1> {
		const renderTags = this.tags.split(',').map(tag => {
			return html`<a class="container__tags--tag" href="/posts/${tag}">
				<span> ${tag} </span>
			</a>`;
		});
		return html`<div class="container__tags">${renderTags}</div>`;
	}
}
