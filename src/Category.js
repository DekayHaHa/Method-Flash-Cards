import React, { Component } from 'react';

export default class Categories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: this.props.questions
		}
	}
	render() {
		return (
			<div>
				<button>{this.state.questions[0].category}</button>
				{}
			</div>
		);
	}
}