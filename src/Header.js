import React, { Component } from 'react';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	detectReset = (e) => {
		const results = e.target.className.includes('round') ? false : true;
		this.props.reset(results);
		this.props.clear();
		if (results) this.props.clearAll()
	}
	render() {
		let {incorrect, correct, check} = this.props
		let checkProgess = correct + incorrect
		return (
			<nav>
				<button disabled={check} onClick={this.detectReset} className='round header-button'>Do Better</button>
				<div>
					<h2>Methods of MADNESS</h2>
					<div className='score-board'>
					<p>Correct: {correct}</p> <p>Incorrect: {incorrect}</p>
					</div>
				</div>
				<button disabled={checkProgess === 0} onClick={this.detectReset} className='all header-button'>Reset All</button>
			</nav>
		);
	}
}