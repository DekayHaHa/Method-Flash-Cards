import React, { Component } from 'react';

export default class Results extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		const results = this.props.answer ? 'CORRECT' : 'JUST DO BETTER NEXT TIME';
		return (
			<section>
				<h3>{results}</h3>
				<p>Here is a link to the <a href={this.props.prompt.mdn}>MDN</a> on the '{this.props.prompt.solution}( )' method</p>
				<button onClick={this.props.close}>Continue</button>
			</section>
		);
	}
}