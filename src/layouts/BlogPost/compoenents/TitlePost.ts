import {
	html,
	css,
	LitElement,
	type TemplateResult,
	CSSResultGroup,
} from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface propsTitlePost {
	title: string;
}

const tagName = 'title-post';

@customElement(tagName)
export class TitlePost extends LitElement {
	constructor(props: propsTitlePost) {
		super();
	}

	@property({ type: String }) title = '';

	static styles: CSSResultGroup = css`
		.container__title-post {
			font-size: 72px;
			font-weight: bold;
			color: var(--primary--color);
		}
	`;

	render(): TemplateResult<1> {
		return html`
			<div class="container">
				<h1 class="container__title-post">${this.title}</h1>
			</div>
		`;
	}
}
