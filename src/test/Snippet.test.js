import React from 'react';
import ReactDOM from 'react-dom';
import Snippet from '../Snippet';
import { mount } from 'enzyme';

const closeMock = jest.fn();
const keepScoreMock = jest.fn();
const mockPrompt = {
	"snippet": ["let arr = [1, 2, 3, 4, 5]", "let results = arr.", "(val => val > 0)", "console.log(results) // logs true"],
	"category": "Array Prototype Method",
	"solution": "every",
	"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every",
	"uid": "card-1"
}

describe('Snippet', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(
			<Snippet close={closeMock} question={mockPrompt} keepScore={keepScoreMock}/>
		);
	});
	it('should match snapshop', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('should have default state', () => {
		expect(wrapper.state()).toEqual({
			prompt: mockPrompt,
			results: false,
			answer: false,
			close: closeMock
		});
	});
	it('should checkAnswer on submit', () => {
		wrapper.find('form').simulate('submit', {
			preventDefault: () => {}
		})
		expect(keepScoreMock).toBeCalled()
	})
	it('should set state to display results', () => {
		wrapper.find('form').simulate('submit', {
			preventDefault: () => { }
		})
		expect(wrapper.state('results')).toEqual(true)
	})
})