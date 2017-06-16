import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
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