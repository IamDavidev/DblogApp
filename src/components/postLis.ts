import type { TemplateResult } from 'lit';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@components/Tags';
import Elipse from '../assets/images/icons/elipse.svg';
import '~/components/ButtonAddFavorites';

interface propsPostList {
	title: string;
	description: string;
	updatedPost: string; // diference time whit today
	image: string;
	userName: string;
	imageProfile: string;
	url: string;
	tags: string[];
}

const tagName = 'post-list';

@customElement(tagName)
export class PostList extends LitElement {
	constructor(post: propsPostList) {
		super();
	}

	@property({ type: String }) title: string = '';
	@property({ type: String }) description: string = '';
	@property({ type: String }) updatedPost: string = '';
	@property({ type: String }) image: string = '';
	@property({ type: String }) userName: string = '';
	@property({ type: String }) imageProfile: string = '';
	@property({ type: String }) url: string = '';
	@property({ type: Array }) tags: string[] = [];

	static styles = css`
		.container {
			margin: 3rem 0px;
		}
		.post {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			padding: 0 1rem;
			border-radius: 1rem;
			transition: all 0.3s ease-in-out;
		}
		/*  if hover only apply box - shadow  */

		.post-info {
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			gap: 1rem;
			overflow: hidden;
			max-height: 150px;
		}

		.post-info__header {
			display: flex;
			flex-direction: column;
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
			height: 150px;
			object-fit: cover;
			border-radius: 1rem;
		}

		.post-info__header--title {
			color: var(--primary--color);
			font-family: 'Raleway-bold';
			font-size: 32px;
			text-decoration: none;
		}

		.post-info__header--title:hover {
			color: var(--white--color);
			text-shadow: 0 0 2px var(--effect--color);
			transition: all 1s;
		}

		.post-data {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-end;
			/* padding: 1rem 0; */
			min-width: 160px;
		}
		.post-data > .user-post {
			display: flex;
			align-items: center;
			gap: 1rem;
			color: var(--effect--color);
		}

		.post-info__header--update {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;
		}
		.post_data--user {
			font-weight: bold;
		}
		.post-description {
			color: var(--gray--color);
			font-weight: bold;
			margin: 0;
		}
		.long-title {
			max-width: 50%;
			font-size: 1.6rem;
		}
		.post-tags {
			margin-left: calc(3rem + 160px);
		}
	`;

	render(): TemplateResult<1> {
		return html`
			<div class="container">
				<article class="post">
					<div class="post-info">
						<img
							src="${this.image}"
							alt="${this.title}"
							class="post-info__image"
						/>
						<div class="post-info__header">
							<header>
								<a
									href="${this.url}"
									class="post-info__header--title ${this.title.length > 50
										? 'long-title'
										: 'small-title'}"
									>${this.title}</a
								>
								<div class="post-info__header--update">
									<img src="${Elipse}" alt="icon-update" />
									<span class="post-info__header--update"
										>${this.updatedPost}</span
									>
								</div>
							</header>
							<p class="post-description">${this.description}</p>
						</div>
					</div>
					<div class="post-data">
						<div class="user-post">
							<a href="https://github.com/iamdavidev" target="_blank">
								<img src="/github.svg" alt="" />
							</a>
							<span class="post_data--user"> ${this.userName} </span>
						</div>
						<button-add-favorites></button-add-favorites>
					</div>
				</article>
				<div class="post-tags"></div>
			</div>
		`;
	}
}
