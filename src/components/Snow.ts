import {
	css,
	type CSSResultGroup,
	html,
	LitElement,
	TemplateResult,
} from 'lit';
import { customElement } from 'lit/decorators.js';

const countSnowflakes = Array.from({ length: 200 }).fill('❄️') as string[];

const tagName = 'snow-decoration';
@customElement(tagName)
export class Snow extends LitElement {
	static override styles?: CSSResultGroup | undefined = css`
		.container-snow {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 2;
			overflow: hidden;
		}
		.container-snow span {
			animation: snowfall var(--duration-animation) linear infinite;
			animation-delay: var(--delay-animation);
			filter: blur(1.5px);
		}
		@keyframes snowfall {
			0% {
				transform: translate3d(var(--left-init), 0, 0);
				opacity: 1;
			}
			100% {
				opacity: 0;
				transform: translate3d(var(--left-end), 110vh, 0);
			}
		}
	`;

	private randomValue(): number {
		return Math.floor(Math.random() * 10);
	}

	protected firstUpdated(): void {
		const container = this.shadowRoot?.querySelector('.container-snow');
		countSnowflakes.forEach(snowflake => {
			const snowflakeElement = document.createElement('span');
			if (snowflakeElement === null) return;
			// snowflakeElement.classList.add('snowflake');
			snowflakeElement.innerText = snowflake;
			snowflakeElement.style.position = 'absolute';
			snowflakeElement.style.top = `${Math.random() * 100}%`;
			snowflakeElement.style.left = `${Math.random() * 100}%`;
			snowflakeElement.style.fontSize = `${Math.random() * 10 + 2}px`;
			snowflakeElement.style.setProperty(
				'--duration-animation',
				`${this.randomValue() + 10}s`
			);
			snowflakeElement.style.setProperty(
				'--delay-animation',
				`-${this.randomValue()}s`
			);
			snowflakeElement.style.setProperty(
				'--left-init',
				`${this.randomValue()}vw`
			);
			snowflakeElement.style.setProperty(
				'--left-end',
				`${this.randomValue() + 10}vw`
			);
			container?.appendChild(snowflakeElement);
		});
	}

	override render(): TemplateResult<1> {
		return html` <div class="container-snow"></div> `;
	}
}
