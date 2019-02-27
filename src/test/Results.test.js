import React from 'react';
import ReactDOM from 'react-dom';
import Results from '../Results';
import { shallow } from 'enzyme';

const closeMock = jest.fn();
const mockPrompt = {
	"snippet": ["let arr = [1, 2, 3, 4, 5]", "let results = arr.", "(val => val > 0)", "console.log(results) // logs true"],
	"category": "Array Prototype Method",
	"solution": "every",
	"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every",
	"uid": "card-1"
}

describe('Results', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(
			<Results answer={false} close={closeMock} prompt={mockPrompt}/>
		);
	});
	it('should match snapshop', () => {
		expect(wrapper).toMatchSnapshot();
	});
	
	it('should invoke props.close on click of button', () => {
		wrapper.find('.continue').simulate('click');
		expect(closeMock).toHaveBeenCalled();
	})
})