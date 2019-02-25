import React, { Component } from 'react';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	detectReset = (e) => {
		const results = e.target.className.includes('round') ? false : true;
		this.props.reset(results)
	}
	render() {
		return (
			<nav>
				<button onClick={this.detectReset} className='round header-button'>Try and Do Better</button>
				<h1>Methods of MADNESS</h1>
				<button onClick={this.detectReset} className='all header-button'>Reset All</button>
			</nav>
		);
	}
}