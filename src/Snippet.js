import React, { Component } from 'react';

export default class Snippet extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	checkAnswer = () => {

	}
	render() {
		const card = this.props.question
		return (
			<section>
				<textarea>{card.snippet[0]}</textarea>
				<label htmlFor='answer'>METHOD</label>
				<input id='answer' type='text'></input>
				<p>{card.snippet[1]}</p>
				<button onClick={this.checkAnswer}>SUBMIT</button>
			</section>
		);
	}
}