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
	render() {

		return (
			<section>
				<Category questions={this.state.array}/>
				<Category questions={this.state.string}/>
				<Category questions={this.state.object}/>
			</section>
		);
	}
}