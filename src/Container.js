import React, { Component } from 'react';
import Header from './Header';
import Category from './Category';

export default class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			correct: [],
			incorrect: []
		}
	}
	filterByCat(cards) {
		let cats = cards.reduce((acc, val) => {
			let key = val.category.split(' ')[0];
			if (!acc[key]) {
				acc[key] = [];
			}
			if (val.category.includes(key)) {
				acc[key].push(val);
			}
			return acc;
		}, {})
		return this.displayCategories(cats)
	}
	keepScore = (question, check) => {
		let key = check ? 'correct' : 'incorrect';
		const newScore = this.state[key];
		newScore.push(question);
		this.setState({ [key]: newScore }, () => {
			localStorage.setItem('correct', JSON.stringify(this.state.correct));
		})
	}
	clearIncorrect = () => {
		this.setState({ incorrect: [] })
	}
	clearCorrect = () => {
		this.setState({ correct: [] })
	}
	displayCategories = (cats) => {
		const { resetCheck, resetToggle } = this.props
		return Object.keys(cats).map(key => {
			return <Category questions={cats[key]} key={key} keepScore={this.keepScore} title={`${key} Prototype Method`} resetCheck={resetCheck} resetToggle={resetToggle} />
		})
	}
	render() {
		let check = this.state.incorrect.length ? false : true;
		let { correct, incorrect } = this.state;
		return (
			<section>
				<Header check={check} reset={this.props.reset} clear={this.clearIncorrect} correct={correct.length} incorrect={incorrect.length} clearAll={this.clearCorrect} />
				<h3 className='pick-cat instructions' >SELECT A CATEGORY</h3>
				<div className='cat-box'>
					{this.filterByCat(this.props.cards)}
				</div>
			</section>
		);
	}
}