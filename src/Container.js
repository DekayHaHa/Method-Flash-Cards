import React, { Component } from 'react';
import Category from './Category';

export default class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			array: [],
			string: [],
			object: []
		}
	}
	componentWillMount = () => {
		let newState = this.props.cards.reduce((acc, val) => {
			Object.keys(this.state).forEach(key => {
				if (!acc[key]) {
					acc[key] = [];
				}
				if (val.category.toLowerCase().includes(key)) {
					acc[key].push(val);
				}
			})
			return acc;
		},{})
		this.setState({...newState})
	}
	displayCategories = () => {
		return Object.keys(this.state).map(key => {
			return <Category questions={this.state[key]}/>
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