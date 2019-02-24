import React, { Component } from 'react';
import Snippet from './Snippet'

export default class Categories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: this.props.questions,
			display: false,
			currentQuestion: {}
		}
	}
	getQuestion = () => {
		const prompts = this.state.questions
		const question = prompts.splice(Math.floor(Math.random() * prompts.length), 1)
		this.setState({questions: prompts, currentQuestion: question[0], display: true})
	}
	displayToggle = () => {
		this.setState({display: false})
	}
	render() {
		let buttonDisable = this.state.display ? true : false;
		return (
			<div>
				<button type='button' disabled={buttonDisable} onClick={this.getQuestion}>{this.state.questions[0].category}</button>
				{this.state.display && <Snippet question={this.state.currentQuestion} close={this.displayToggle}/>}
			</div>
		);
	}
}