import test from 'ava';
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App.jsx';

// Shallow

test('has a .main class', t => {
	const wrapper = shallow(<App/>);
	t.true(wrapper.hasClass('main'));
});

test('renders a main element', t => {
	const wrapper = shallow(<App/>);
	t.is(wrapper.find('main').length, 1);
});

// Mounted

test('mounts main element', t => {
	const wrapper = mount(<App />);
	t.is(wrapper.find('main').length, 1);
});

test('has featured state', t => {
	const wrapper = mount(<App />);
	const state = wrapper.state();
	t.is(state.featured, -1);
});
