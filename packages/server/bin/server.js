#!/usr/bin/env node

const micro = require('micro');
// const handler = require('../src/index');

micro('../src/index.js').listen({ port: 3000 });
