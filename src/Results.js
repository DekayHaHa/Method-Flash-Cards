import React from 'react';

export default function Results (props) {
		const results = props.answer ? 'CORRECT' : 'JUST DO BETTER NEXT TIME';
		return (
			<section>
				<h3>{results}</h3>
				<p>Here is a link to the <a href={props.prompt.mdn}>MDN</a> on the '{props.prompt.solution}( )' method</p>
				<button className='continue' onClick={props.close}>Continue</button>
			</section>
		);
	}
