import React from 'react';
import ReactDOM from 'react-dom';
import Category from '../Category';
import { shallow } from 'enzyme';

const resetMock = jest.fn();
const mockCards = [{
	"snippet": ["let arr = [1, 2, 3, 4, 5]", "let results = arr.", "(val => val > 0)", "console.log(results) // logs true"],
	"category": "Array Prototype Method",
	"solution": "every",
	"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every",
	"uid": "card-1"
},
	{
		"snippet": ["let arr = [1, 2, 3, 4, 5]", "let results = arr.", "(5)", "console.log(results) // logs 4"],
		"category": "Array Prototype Method",
		"solution": "indexOf",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf",
		"uid": "card-2"
	},
	{
		"snippet": ["let arr = [1, 2, 3, 4, 5]", "let results = arr.", "(val => val > 3)", "console.log(results) // logs [ 4, 5 ]"],
		"category": "Array Prototype Method",
		"solution": "filter",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
		"uid": "card-3"
	}]

describe('Category', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(
			<Category resetToggle={resetMock} questions={mockCards}/>
		);
	});
	it('should match snapshop', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('should have default state', () => {
		expect(wrapper.state()).toEqual({
			questions: mockCards,
			display: false,
			currentQuestion: {}
		});
	});
	it('should toggle snippet display', () => {
		wrapper.instance().displayToggle();
		expect(wrapper).toMatchSnapshot();
	})
	it('should grab question for current question after click', () => {
		expect(wrapper.state('currentQuestion')).toEqual({})
		wrapper.find('button').simulate('click')
		expect(wrapper.state('currentQuestion')).toHaveProperty('snippet')
		expect(wrapper.state('display')).toEqual(true)
	})
})