import browserEnv from 'browser-env';
browserEnv();

// It's a bad practice to populate JSDom globals in
// the Node global env, but for now, this is how we
// can test DOM mounted components in Ava.

// Only use the necessary global objects...
// browserEnv(['window', 'document', 'navigator']);