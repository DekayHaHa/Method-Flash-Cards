import React from 'react';
import ReactDOM from 'react-dom';
import Container from '../Container';
import { shallow } from 'enzyme';
import { wrap } from 'module';

const Mock = jest.fn();
const mockData = [{
	"snippet": ["let arr = [1, 2, 3, 4, 5]", "let results = arr.", "((acc, val) => acc += val)", "console.log(results) // logs 15"],
	"category": "Array Prototype Method",
	"solution": "reduce",
	"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce",
	"uid": "card-10"
},
	{
		"snippet": ["let str = 'Burritos are the best!'", "let results = str.", "('best!')", "console.log(results) // logs true"],
		"category": "String Prototype Method",
		"solution": "endsWith",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith",
		"uid": "card-11"
	},
	{
		"snippet": ["let str = 'Burritos are the best times 10!'", "let results = str.", "(10)", "console.log(results) // logs [ '10', index: 28, input: 'Burritos are the best times 10!' ]"],
		"category": "String Prototype Method",
		"solution": "match",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match",
		"uid": "card-12"
	}]

const mockPrompt = {
	"snippet": ["let obj = {a: 1}, obj2 = {a: 1}", "let results = Object.", "(obj, obj2)", "console.log(results) // logs false"],
	"category": "Object Prototype Method",
	"solution": "is",
	"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is",
	"uid": "card-21"
}

describe('Container', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(
			<Container cards={[]}/>
		);
	});
	it('should match snapshop', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('should have default state', () => {
		expect(wrapper.state()).toEqual({
			correct: [],
			incorrect: []
		});
	});
	it('should be able to clear state', () => {
		wrapper.setState({incorrect: [1,2,3], correct: [3,2,1]})
		expect(wrapper.state()).toEqual({incorrect: [1, 2, 3], correct: [3, 2, 1]})
		wrapper.instance().clearIncorrect();
		wrapper.instance().clearCorrect();
		expect(wrapper.state()).toEqual({incorrect: [], correct: []})
	})
	it('should keep track of correct prompts', () => {
		expect(wrapper.state()).toEqual({
			correct: [],
			incorrect: []
		});
		wrapper.instance().keepScore(mockPrompt, true);
		expect(wrapper.state('correct')).toEqual([mockPrompt]);
	})
	it('should keep track of incorrect prompts', () => {
		expect(wrapper.state()).toEqual({
			correct: [],
			incorrect: []
		});
		wrapper.instance().keepScore(mockPrompt, false);
		expect(wrapper.state('incorrect')).toEqual([mockPrompt]);
	})
	it('', () => {
		wrapper.setProps({ cards: mockData });
		expect(wrapper).toMatchSnapshot();	
	})
})