export const code1 = `
interface Props {
	record: string;
}

function Demo({ record }: Props) {
	return (
		<div>Hello, world!</div>
		<div>record: {record}</div>
	)
}

export default PreactFactory(Demo)
`

export const code2 = `
const PreactFactory = (reactComponent: any): typeof PreactComponent => {
	return class Element extends PreactComponent {
		constructor() {
			super(reactComponent)
		}
	}
}

export { PreactFactory }
`

export const code3 = `
import { LitElement, html } from 'lit'
import { render, createElement } from 'preact'

type HostString = \`https://\${string}\` | \`http://\${string}\`

const widgetHost: HostString = "http://localhost:3000"

export default class PreactComponent extends LitElement {
	static get properties() {
		return {
			record: {
				type: String,
			}
		}
	}
	record: string = ''

	constructor(private reactComponent: any) {
		super();
	}

	get root() {
		return this.shadowRoot!.getElementById('preact-root')!
	}

	preactRender() {
		render(
			createElement(this.reactComponent, { record: this.record }),
			this.root
		)
	}

	updated() {
		this.preactRender()
	}

	render() {
		return html\`
			<link rel="stylesheet" href="\${widgetHost}/style.css" />
			<div id = "preact-root"></div>
		\`;
	}
}
`
