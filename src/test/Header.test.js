import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import { shallow } from 'enzyme';

const oneMock = jest.fn();
const twoMock = jest.fn();
const threeMock = jest.fn();
const mockEvent = { target: { className: 'all header-button'}}
describe('Header', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(
			<Header check={true} reset={threeMock} clear={oneMock} correct={2} incorrect={3} clearAll={twoMock} />
		);
	});
	it('should match snapshop', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('should have default state', () => {
		expect(wrapper.state()).toEqual({
		});
	});
	it('should be able to reset round', () => {
		wrapper.instance().detectReset(mockEvent)
		expect(oneMock).toBeCalled();
		expect(threeMock).toBeCalled();
		expect(twoMock).toBeCalled();
	})
})