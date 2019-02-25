import React, { Component } from 'react';
import Category from './Category';

export default class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			correct: []
		}
	}
	filterByCat(){
		let cats = this.props.cards.reduce((acc, val) => {
			let key = val.category.split(' ')[0]
				if (!acc[key]) {
					acc[key] = [];
				}
				if (val.category.includes(key)) {
					acc[key].push(val);
				}
			return acc;
		},{})
		return this.displayCategories(cats)
	}
	keepScore = (question) => {
		const newScore = this.state.correct;
		newScore.push(question);
		this.setState({ correct: newScore }, () => {
			localStorage.setItem('correct', JSON.stringify(newScore));
		})
	}
	displayCategories = (cats) => {
		const {resetCheck, resetToggle} = this.props
		return Object.keys(cats).map(key => {
			return <Category questions={cats[key]} key={key} keepScore={this.keepScore} title={`${key} Prototype Method`} resetCheck={resetCheck} resetToggle={resetToggle}/>
		})
	}
	render() {
		return (
			<section>
				{this.filterByCat()}
			</section>
		);
	}
}