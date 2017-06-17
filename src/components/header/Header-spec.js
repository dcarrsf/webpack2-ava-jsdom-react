import test from 'ava';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header.jsx';

// Shallow

test('has a .header class', t => {
	const wrapper = shallow(<Header/>);
	t.true(wrapper.hasClass('header'));
});

test('renders a main element', t => {
	const wrapper = shallow(<Header/>);
	t.is(wrapper.find('header').length, 1);
});

// Mounted

test('mounts header element', t => {
	const wrapper = mount(<Header />);
	t.is(wrapper.find('header').length, 1);
});