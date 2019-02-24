import React, { Component } from 'react';
import Results from './Results'

export default class Snippet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prompt: this.props.question,
			results: false,
			answer: false,
			close: this.props.close
		}
	}
	checkAnswer = (e) => {
		e.preventDefault()
		let answer = false
		let val = this.anw.value
		if (val === this.state.prompt.solution){
			console.log(val)
			answer = true
		}
		this.setState({answer: answer, results: true})
	}
	render() {
		let displayResults = this.state.results ? <Results {...this.state}/> : <h3>PRESS ENTER TO SUBMIT</h3>
		const card = this.props.question
		return (
			<section>
				<form onSubmit={this.checkAnswer}>
					<p>{card.snippet[0]}</p>
					<p>{card.snippet[1]}
						<label htmlFor='answer'>METHOD</label>
						<input id='answer' ref={anw => this.anw = anw} type='text' />{card.snippet[2]}</p>
				<p>{card.snippet[3]}</p>
				{displayResults}
				</form>
			</section>
		);
	}
}