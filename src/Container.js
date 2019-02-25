import React, { Component } from 'react';
import Category from './Category';

export default class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	componentWillMount = () => {
		let newState = this.props.cards.reduce((acc, val) => {
			let key = val.category.split(' ')[0]
				if (!acc[key]) {
					acc[key] = [];
				}
				if (val.category.includes(key)) {
					acc[key].push(val);
				}
			return acc;
		},{})
		this.setState({...newState})
	}
	displayCategories = () => {
		return Object.keys(this.state).map(key => {
			return <Category questions={this.state[key]} keepScore={this.props.keepScore} title={`${key} Prototype Method`}/>
		})
	}
	render() {
		return (
			<section>
				{this.displayCategories()}
			</section>
		);
	}
}