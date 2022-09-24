import { html, TemplateResult, LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import SavedIcon from '~/assets/images/icons/saved.svg';

const tagName = 'button-add-favorites';

@customElement(tagName)
export class ButtonAddFavorites extends LitElement {
	static styles = css`
		.container_button {
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
	`;

	render(): TemplateResult<1> {
		return html`
			<button class="container_button">
				<img src="${SavedIcon}" alt="saved-icon" />
			</button>
		`;
	}
}
