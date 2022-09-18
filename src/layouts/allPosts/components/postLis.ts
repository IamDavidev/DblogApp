import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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
		.post-data {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-end;
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
							<span class="post-info__header--title">${this.updatedPost}</span>
						</header>
						<p>${this.description}</p>
					</div>
				</div>
				<div class="post-data">
					<div>
						<img src="" alt="" />
						<span>ItsDavidev</span>
					</div>
					<button></button>
				</div>
			</article>
		`;
	}
}
