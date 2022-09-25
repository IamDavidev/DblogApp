import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SavedIcon from '~/assets/images/icons/saved.svg';

export const tagName = 'post-recent';

@customElement(tagName)
export class PostRecent extends LitElement {
	constructor(post: {
		title: string;
		tags: string[];
		description: string;
		imageUser: string;
		userName: string;
		updatedPost: string;
		url: string;
	}) {
		super();
	}

	static styles = css`
		.container__tags {
			display: flex;
			flex-direction: row;
			gap: 1rem;
		}

		.container__image {
			position: relative;
			margin-bottom: 32px;
		}

		.container__image--save {
			position: absolute;
			bottom: -1rem;
			right: -1rem;
		}

		.container__image--save > button {
			background-color: rgba(68, 68, 68, 0.5);
			width: 48px;
			border: none;
			height: 48px;
			border-radius: 50%;
		}

		.container__image--save > button > img {
			width: 13px;
			height: 20px;
			margin: auto;
		}

		.container__tags--tag {
			color: var(--white--color);
			padding: 8px 24px;
			font-family: 'Raleway-bold';
			border-radius: 16px;
			background: linear-gradient(
				to bottom,
				rgba(23, 23, 23, 1) 0%,
				rgba(227, 163, 179, 1) 100%
			);
			margin-bottom: 16px;
			transition: all 10s linear;
		}

		.container__content--title {
			color: var(--primary--color);
			font-family: 'Raleway-bold';
			text-decoration: none;
			font-size: 32px;
			max-width: 315px;
			transition: all 0.4s linear;
		}

		.container__content--title:hover {
			color: var(--white--color);
		}

		.container__content--description {
			font-family: 'Roboto-medium';
			color: var(--gray--color);
			font-size: 18px;
		}

		@media screen and (min-width: 1025px) {
			.new-post {
				width: 380px;
				max-width: 380px;
				padding: 32px;
				height: 600px;
				box-sizing: border-box;
			}

			.container__image--picture > img {
				width: 100%;
				object-fit: cover;
				max-width: 316px;
				border-radius: 1rem;
			}
		}
	`;

	@property({ type: String, attribute: true }) title: string = '';
	@property({ type: Array }) tags: String[] = [];
	@property({ type: String }) description: string = '';
	@property({ type: String }) imageUser: string = '';
	@property({ type: String }) userName: string = '';
	@property({ type: String }) updatedPost: string = '';
	@property({ type: String }) url: string = '';

	render(): TemplateResult<1> {
		return html`
			<article class="new-post">
				<div class="container">
					<div class="container__image">
						<picture class="container__image--picture">
							<img src="${this.imageUser}" alt="${this.title}" />
						</picture>
						<div class="container__image--save">
							<button>
								<img src="${SavedIcon}" alt="saved" />
							</button>
						</div>
					</div>
					<div class="container__tags">
						${this.tags.map(tag => {
							return html`
								<div class="container__tags--tag">
									<span> ${tag} </span>
								</div>
							`;
						})}
					</div>
					<div class="container__content">
						<a href="${this.url}" class="container__content--title">
							${this.title}
						</a>
						<p class="container__content--description">
							Como solucionar el error de netlify not found al deployear una app
							en netlify...
						</p>
					</div>
				</div>
				<footer class="new-post-footer"></footer>
			</article>
		`;
	}
}