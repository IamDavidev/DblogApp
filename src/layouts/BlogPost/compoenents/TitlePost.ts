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
			font-size: 96px;
			font-weight: bold;
			color: var(--primary--color);
			margin: 0.5rem 0;
			padding: 1.5rem 0;
			position: relative;
			z-index: 99;
		}
		.container__title-post::after {
			content: '';
			width: 100%;
			height: 4px;
			position: absolute;
			top: 0;
			left: 0;
			background-color: var(--primary--color);
		}

		.container__title-post::before {
			content: '';
			width: 100%;
			height: 4px;
			bottom: 0;
			left: 0;
			position: absolute;
			background-color: var(--primary--color);
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
