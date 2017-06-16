// test.js
import test from 'ava';

test.before(t => {
	// This runs before all tests
  console.log('run this before\n');
});

test.after(t => {
	// This runs before all tests
  console.log('\nrun this after');
});

test.todo('will think about writing this later');

test('foo', t => {
	t.pass();
});

test('bar', async t => {
	const bar = Promise.resolve('bar');

	t.is(await bar, 'bar');
});