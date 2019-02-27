import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';

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
const mockScore = [{
  "snippet": ["let arr = [1, 2, 3, 4, 5]", "let results = arr.", "((acc, val) => acc += val)", "console.log(results) // logs 15"],
  "category": "Array Prototype Method",
  "solution": "reduce",
  "mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce",
  "uid": "card-10"
},
{
  "snippet": ["let str = 'Burritos are the best times 10!'", "let results = str.", "(10)", "console.log(results) // logs [ '10', index: 28, input: 'Burritos are the best times 10!' ]"],
  "category": "String Prototype Method",
  "solution": "match",
  "mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match",
  "uid": "card-12"
}]

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App/>
    );
  });
  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      questions: [],
      roundReset: false
    });
  });
  it('Should set reset state to true', () => {
    expect(wrapper.state('roundReset')).toEqual(false)
    wrapper.instance().reset()
    expect(wrapper.state('roundReset')).toEqual(true)
  })
  it('Should set reset state to true', () => {
    wrapper.instance().reset()
    expect(wrapper.state('roundReset')).toEqual(true)
    wrapper.instance().setToggle()
    expect(wrapper.state('roundReset')).toEqual(false)
  })
  it('should use original questions if nothing in local storage', () => {
    wrapper.setState({questons: mockData})
    expect(wrapper.instance().checkStorage(mockData)).toEqual(mockData)
    expect(wrapper).toMatchSnapshot();    
  })
  it('should filter out questions by uid', () => {
    expect(wrapper.instance().filterStorage(mockScore, mockData)).toEqual([mockData[1]])
  })
})
