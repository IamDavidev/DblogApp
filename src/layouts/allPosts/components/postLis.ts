import type { TemplateResult } from 'lit';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '~/components/ButtonAddFavorites';

import Elipse from '../../../assets/images/icons/elipse.svg';

interface propsPostList {
	title: string;
	description: string;
	updatedPost: string; // diference time whit today
	image: string;
	userName: string;
	imageProfile: string;
	url: string;
}

const tagName = 'post-list';

@customElement(tagName)
export class PostList extends LitElement {
	constructor(post: propsPostList) {
		console.log(post);
		super();
	}

	@property({ type: String }) title: string = '';
	@property({ type: String }) description: string = '';
	@property({ type: String }) updatedPost: string = '';
	@property({ type: String }) image: string = '';
	@property({ type: String }) userName: string = '';
	@property({ type: String }) imageProfile: string = '';
	@property({ type: String }) url: string = '';

	static styles = css`
		.container {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			padding: 1rem;
		}

		.post-info {
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			gap: 1rem;
		}
		.post-info__header > header {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			gap: 2rem;
		}

		.post-info__image {
			width: 160px;
			max-width: 160px;
			height: 132px;
			object-fit: cover;
			border-radius: 1rem;
		}

		.post-info__header--title {
			color: var(--primary--color);
			font-family: 'Raleway-bold';
			font-size: 32px;
		}

		.post-data {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-end;
			padding: 1rem 0;
		}

		.post-info__header--update {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;
		}
		.post_data--user {
			color: var(--effect--color);
			font-weight: bold;
		}
	`;

	render(): TemplateResult<1> {
		return html`
			<article class="container">
				<div class="post-info">
					<img
						src="${this.image}"
						alt="${this.title}"
						class="post-info__image"
					/>
					<div class="post-info__header">
						<header>
							<h2 class="post-info__header--title">${this.title}</h2>
							<div class="post-info__header--update">
								<img src="${Elipse}" alt="icon-update" />
								<span class="post-info__header--update"
									>${this.updatedPost}</span
								>
							</div>
						</header>
						<p>${this.description}</p>
					</div>
				</div>
				<div class="post-data">
					<div class="post-data mb-4">
						<img src="" alt="" />
						<span class="post_data--user"> ${this.userName} </span>
					</div>
					<button-add-favorites></button-add-favorites>
				</div>
			</article>
		`;
	}
}
