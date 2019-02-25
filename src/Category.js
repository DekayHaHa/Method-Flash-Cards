import React, { Component } from 'react';
import Snippet from './Snippet'

export default class Categories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: [],
			display: false,
			currentQuestion: {}
		}
	}
	componentWillMount(){
		this.setState({questions: this.props.questions})
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
		const {display, questions} = this.state
		let buttonDisable = display || questions.length === 0 ? true : false;
		return (
			<div>
				<button type='button' disabled={buttonDisable} onClick={this.getQuestion}>{this.props.title}</button>
				{this.state.display && <Snippet question={this.state.currentQuestion} close={this.displayToggle} keepScore={this.props.keepScore}/>}
			</div>
		);
	}
}