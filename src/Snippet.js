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
		const val = this.anw.value
		let answer = val === this.state.prompt.solution
		this.props.keepScore(this.state.prompt, answer)
		this.setState({answer: answer, results: true})
	}
	render() {
		let displayResults = this.state.results ? <Results {...this.state} /> : <h3 className='instruction'>PRESS ENTER TO SUBMIT</h3>
		const card = this.props.question
		return (
			<section className='snippet'>
				<h3 className='instructions' >FILL IN THE METHOD</h3>
				<form onSubmit={this.checkAnswer}>
					<p>{card.snippet[0]}</p>
					<p>{card.snippet[1]}
						<input autoComplete="off" placeholder='METHOD' id='answer' ref={anw => this.anw = anw} type='text' />{card.snippet[2]}</p>
				<p>{card.snippet[3]}</p>
				</form>
				<div className='results'>
				{displayResults}
				</div>
				
			</section>
		);
	}
}